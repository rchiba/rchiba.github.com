HM.InfoView = Backbone.View.extend({
    className: 'info',
    template: '\
        <h1>Let\'s Find Out</h1>\
        <p>\
            It will take 5 minutes to discover whether you are biased.</p><p>In this task, you will use the <span class="badge">e</span> and <span class="badge">i</span> computer keys to categorize items into groups as fast as you can. These are the four groups and the items that belong to each:\
        </p>\
        <table class="table">\
            <tr><th>Category</th> <th>Items</th></tr>\
            {{ #categories }}\
                <tr>\
                    <td>{{ name }}</td>\
                    <td>\
                        {{ #is_text}}\
                            {{ #data }} {{ . }}, {{ /data }}\
                        {{ /is_text }}\
                        {{ #is_image }}\
                            {{ #data }} <img class="info-image" src="{{ . }}" /> {{ /data }}\
                        {{ /is_image }}\
                    </td>\
                </tr>\
            {{ /categories }}\
        </table>\
        <h3>Ready to Begin?</h3> <button class="info-begin btn btn-primary">begin test</button>\
    ',
    initialize: function(options){
        this.test = options.test;
        this.render();
        return this;
    },
    serializeData: function(){
        return {
            'categories': this.test.group1.categories.concat(this.test.group2.categories)
        };
    },
    render: function(){
        this.$el.html(Mustache.render(this.template, this.serializeData()));
        return this;
    },
    events: {
        'click .info-begin': 'begin'
    },
    begin: function(){
        this.trigger('next');
    }
});