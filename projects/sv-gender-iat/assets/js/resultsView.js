HM.ResultsView = Backbone.View.extend({
    className: 'results',
    template: '\
    <h1>Results</h1>\
    <div class="well">\
        <h2>{{ bias_message }}</h2>\
        <p>{{{ details }}}</p>\
        <table class="table results-table">\
            <tr><th>Category</th><th>Categorization Speed</th></tr>\
            {{ #metrics }}\
                <tr> <td>{{ name }}</td> <td>{{ average }}</td> </tr>\
            {{ /metrics }}\
        </table>\
        <button class="btn btn-primary results-share-fb">Share on Facebook</button>\
        <button class="btn btn-primary results-share-tw">Share on Twitter</button>\
    </div>\
    <h1>What\'s Next?</h1>\
    <h3>Implicit biases are not inherently bad</h3>\
    <p>\
        Implicit biases are not always bad. Most of the time, biases help us make decisions faster so we can be productive and not over-analyze every situation. However, there are situations where bias can lead to negative effects. Consider performance evaluations and hiring decisions. These are the situations where it pays off to be aware of your own implicit biases.\
    </p>\
    <h3>Self Awareness</h3>\
    <p>\
        The first step in overcoming implicit biases is to be aware of them. By simply acknowledging their presence being comfortable admitting that these biases exist, you can adjust your decisionmaking to compensate.\
    </p>\
    <h3>Additional Resources</h3>\
    <ul>\
        <li><a href="https://implicit.harvard.edu/implicit/faqs.html" target="_blank">Frequently Asked Questions about IAT - Project Implicit</a></li>\
        <li><a href="http://www.lookdifferent.org/" target="_blank">LookDifferent.org - MTV</a></li>\
        <li><a href="http://www.amazon.com/Blindspot-Hidden-Biases-Good-People/dp/0553804642" target="_blank">Blindspot: Hidden Biases of Good People - Amazon</a></li>\
        <li><a href="https://medium.com/the-coffeelicious/you-may-have-seen-my-face-on-bart-8b9561003e0f" target="_blank">#iLookLikeAnEngineer - Medium</a></li>\
        <li><a href="http://pages.stern.nyu.edu/~dchugh/articles/2007_ERSP.pdf" target="_blank">Pervasiveness and correlates of implicit attitudes and stereotypes - NYU</a></li>\
        <li><a href="https://www.projectimplicit.net/index.html" target="_blank">Project Implicit</a></li>\
    </ul>\
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nLjFTHTgEVU?rel=0" frameborder="0" allowfullscreen></iframe>\
    ',
    initialize: function(options){
        this.currentURL = (/file/.test(window.location.href))? 'http://www.foobar.com' : window.location.href;
        this.responseTimes = options.responseTimes;
        this.render();
    },
    getAverageOfArray: function(arr){
        return _.reduce(arr, function(memo, num) {
            return memo + num;
        }, 0) / (arr.length === 0 ? 1 : arr.length);
    },
    serializeData: function(){
        var that = this;

        // get averages
        var responseTimes = this.responseTimes;
        responseTimes = _.map(responseTimes, function(responseTime){
            responseTime.average = that.getAverageOfArray(responseTime.data);
            return responseTime;
        });

        // figure out which one was faster, the third round or the fifth round.
        // the third and fifth rounds are the ones that determine test results in IATs
        var third_round = responseTimes[2];
        var fifth_round = responseTimes[4];
        var important_rounds = [third_round, fifth_round];
        var sorted_rounds = _.sortBy(important_rounds, function(round){ return round.average; });
        var response_difference = sorted_rounds[1].average - sorted_rounds[0].average;
        var details = 'It looks like you were able to categorize <b>' + sorted_rounds[0].name + '</b> faster than <b>'+sorted_rounds[1].name+'</b> by an average of <b>' + response_difference + '</b>ms.';

        var bias_message;
        if(response_difference < 150){
            bias_message = 'You Are Not Biased';
        } else if(response_difference < 600){
            bias_message = 'You Are Slightly Biased Towards ' + sorted_rounds[0].name;
        } else{
            bias_message = 'You Are Strongly Biased Towards ' + sorted_rounds[0].name;
        }

        var share_message = bias_message.replace('You Are', 'I Am');

        return {
            metrics: responseTimes,
            bias_message: bias_message,
            details: details,
            share_message: share_message
        };
    },
    events: {
        'click .results-share-fb': 'shareOnFB',
        'click .results-share-tw': 'shareOnTW'
    },
    shareOnFB: function(){
        var url = 'https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href='+encodeURIComponent(this.currentURL)+'&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer';
        var url = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent(this.currentURL) + '&t=' + encodeURIComponent(this.serializeData().share_message);
        window.open(url, 'Facebook', 'width=665,height=300');
    },
    shareOnTW: function(){
        var url = 'https://twitter.com/intent/tweet?via=tint&url=' + encodeURIComponent(this.currentURL) + '&text='+encodeURIComponent(this.serializeData().share_message);
        window.open(url, 'Twitter', 'width=665,height=300');
    },
    render: function(){
        this.$el.html(Mustache.render(this.template, this.serializeData()));
        return this;
    }
});