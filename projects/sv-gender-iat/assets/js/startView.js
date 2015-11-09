HM.StartView = Backbone.View.extend({
    className: 'start',
    template: '<h1>Are you biased?</h1> <button class="btn btn-default">Yes</button> <button class="btn btn-default">No</button>',
    initialize: function(){
        this.render();
    },
    events:{
        'click button': 'next'
    },
    render: function(){
        this.$el.html(this.template);
        return this;
    },
    next: function(){
        this.trigger('next');
    }
});