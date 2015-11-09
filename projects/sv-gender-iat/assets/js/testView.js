HM.TestView = Backbone.View.extend({
    className: 'test',
    template: '\
    <div class="clearfix">\
        <div class="test-group test-group1">\
            {{ #leftCategories }}\
                <h3 style="color: {{ color }}">{{ name }}</h3>\
            {{ /leftCategories }}\
        </div>\
        <div class="test-group test-group2">\
            {{ #rightCategories }}\
                <h3 style="color: {{ color }}">{{ name }}</h3>\
            {{ /rightCategories }}\
        </div>\
    </div>\
    <div class="test-stimulus">\
        {{ #stimulusIsImage }}\
            <img class="test-stimulus-image" src="{{ stimulus }}" />\
        {{ /stimulusIsImage }}\
        {{ ^stimulusIsImage }}\
            <h1>{{ stimulus }}</h1>\
        {{ /stimulusIsImage }}\
        {{ #isIncorrect }} <div class="test-is-wrong">x</div> {{ /isIncorrect }} \
    </div>\
    {{ #has_instructions }}\
        <div class="test-instructions">\
            <p>Part {{ step }} of 5</p>\
\
            <p>Put a left finger on the <span class="badge">e</span> key for images of\
            {{ #leftCategories }}\
                <span style="color: {{ color }}">{{ name }}</span>\
            {{ /leftCategories }}.\
            Put a right finger on the <span class="badge">i</span> key for images of\
            {{ #rightCategories }}\
                <span style="color: {{ color }}">{{ name }}</span>\
            {{ /rightCategories }}.\
            Items will appear one at a time.</p>\
\
            <p>If you make a mistake, a red X will appear. Press the other key to continue. Go as fast as you can while being accurate.</p>\
\
            <p>Press the <span class="badge">space bar</span> to begin.</p>\
        </div>\
    {{ /has_instructions }}',
    scrambleTestData: function(){
        this.test.group1.categories[0].data = _.shuffle(this.test.group1.categories[0].data);
        this.test.group1.categories[1].data = _.shuffle(this.test.group1.categories[1].data);
        this.test.group2.categories[0].data = _.shuffle(this.test.group2.categories[0].data);
        this.test.group2.categories[1].data = _.shuffle(this.test.group2.categories[1].data);
    },
    initialize: function(options){
        this.test = options.test;
        this.scrambleTestData(); // randomizes the order of the stimulus
        this.step = 0; // ranges from 0 to 4, represents the 4 steps
        this.testIndex = 0; // ranges from 0 to length of category data, state variable that keeps track of test as user categorizes stimulus 
        this.isTesting = false; // state variable that keeps track of whether or not questions are being asked, or if in the instruction step
        this.render();
        return this;
    },
    leftRightCategories: function(step){
        var leftCategories, rightCategories;
        this.order = (this.order) ? this.order : (Math.random() > 0.5) ? [0,1] : [1,0]; // randomizes initial left/right order 

        if(step === 0){
            // categorize group 1
            leftCategories = [this.test.group1.categories[this.order[0]]];
            rightCategories = [this.test.group1.categories[this.order[1]]];
        } else if(step === 1){
            // categorize group 2
            leftCategories = [this.test.group2.categories[this.order[0]]];
            rightCategories = [this.test.group2.categories[this.order[1]]];
        } else if(step === 2){
            // categorize both groups
            leftCategories = [this.test.group1.categories[this.order[0]], this.test.group2.categories[this.order[0]]];
            rightCategories = [this.test.group1.categories[this.order[1]], this.test.group2.categories[this.order[1]]];
        } else if(step === 3){
            // categorize group 1 in reverse
            leftCategories = [this.test.group1.categories[this.order[1]]];
            rightCategories = [this.test.group1.categories[this.order[0]]];
        } else if(step === 4){
            // categorize both groups in reverse, with categories switched
            leftCategories = [this.test.group1.categories[this.order[0]], this.test.group2.categories[this.order[1]]];
            rightCategories = [this.test.group1.categories[this.order[1]], this.test.group2.categories[this.order[0]]];
        }
        return [leftCategories, rightCategories];
    },
    leftCategories: function(step){
        // array of categories
        return this.leftRightCategories(step)[0];
    },
    rightCategories: function(step){
        // array of categories
        return this.leftRightCategories(step)[1];
    },
    serializeData: function(){
        var data = {
            step: this.step + 1,
            has_instructions: !this.isTesting,
            leftCategories: this.leftCategories(this.step),
            rightCategories: this.rightCategories(this.step),
            stimulus: (this.stimulusArray && this.isTesting) ? this.stimulusArray[this.testIndex] : null,
            stimulusIsImage: (this.stimulusArray) ? /\.png|\.jpg/.test(this.stimulusArray[this.testIndex]) : false,
            isIncorrect: this.isIncorrect
        };
        console.log(data);
        return data;
    },
    render: function(){
        this.$el.html(Mustache.render(this.template, this.serializeData()));
        this.bind();
        return this;
    },
    bind: function(){
        var that = this;
        $(window).unbind('keydown').keydown(function(event){
            // User interaction flow starts here
            if( (event.keyCode === 69 || event.keyCode === 73) && that.isTesting ){
                // e or i
                that.recordResult(event);
                that.render();
            } else if( event.keyCode === 32 && !that.isTesting ){
                // space
                that.beginTest();
            }
        });
    },
    leftStimulus: function(){
        // array of data from leftCategories categories
        var leftStimulus = [];
        _(this.leftCategories(this.step)).each(function(category){
            leftStimulus = leftStimulus.concat(category.data);
        });
        return leftStimulus;
    },
    rightStimulus: function(){
        // array of data from rightCategories categories
        var rightStimulus = [];
        _(this.rightCategories(this.step)).each(function(category){
            rightStimulus = rightStimulus.concat(category.data);
        });
        return rightStimulus;
    },
    generateStimulus: function(){
        // take both left and right data and scramble
        var stimulusArray = [];
        stimulusArray = stimulusArray.concat(this.leftStimulus());
        stimulusArray = stimulusArray.concat(this.rightStimulus());
        return _.shuffle(stimulusArray);
    },
    // uses event.keyCode and testIndex to determine if answer is correct
    isCorrect: function(){
        var isLeft = !!(event.keyCode === 69);
        var isRight = !isLeft;
        var stimulus = this.stimulusArray[this.testIndex];
        if( isLeft && _(this.leftStimulus()).contains(stimulus) ){
            return true;
        } else if( isRight && _(this.rightStimulus()).contains(stimulus) ){
            return true;
        } else{
            return false;
        }
    },
    startTimer: function(){
        this.startTime = new Date().getTime();
    },
    getResponseTime: function(){
        return new Date().getTime() - this.startTime;
    },
    // constructInitialResponseTime creates an
    // initial response time object that looks like
    // [
    //     {'name': 'men vs women', 'data': []},
    //     {'name': 'technical vs nontechnical', 'data': []},
    //     ...
    // ]
    constructInitialResponseTime: function(){
        var that = this;
        var emptyResponseTimesObj = [];
        _.each(_.range(5), function(step){
            var responseItem = {'data':[]};
            var name = '';
            _.each(that.leftCategories(step), function(leftCategory){
                name += leftCategory.name + ' ';
            });
            name += 'vs. ';
            _.each(that.rightCategories(step), function(rightCategory){
                name += rightCategory.name + ' ';
            });
            responseItem.name = name;
            emptyResponseTimesObj.push(responseItem);
        });
        return emptyResponseTimesObj;
    },
    saveResponseTime: function(time){
        console.log('saving response time: '+time);
        this.responseTimes = (this.responseTimes) ? this.responseTimes : this.constructInitialResponseTime();
        this.responseTimes[this.step].data.push(time);
    },
    beginTest: function(){
        this.isTesting = true;
        this.stimulusArray = this.generateStimulus();
        this.startTimer();
        this.render();
    },
    recordResult: function(event){
        // decide whether result was right/wrong
        var isCorrect = this.isCorrect(event);

        if(isCorrect){ // if result was correct, record result show next question
            console.log('correct');
            this.saveResponseTime(this.getResponseTime());
            this.startTimer();
            this.isIncorrect = false;
        } else{ // if result was wrong, show a red x, and return
            console.log('incorrect');
            this.isIncorrect = true;
            return;
        }

        this.testIndex++;
        if(this.testIndex === this.stimulusArray.length){
            // last question answered
            this.endTest();
        }
    },
    endTest: function(){
        var final_step_completed = (this.step === 4);
        if(final_step_completed){
            this.next();
            return;
        }

        this.isTesting = false;
        this.step++;
        this.testIndex = 0;
        this.render();
    },
    next: function(){
        console.log('results', this.responseTimes);
        this.trigger('next', this.responseTimes);
    }
});