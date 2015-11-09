if(typeof HM === 'undefined'){
    HM = {};
}

$(document).ready(function(){

    var that = this;

    function renderStartView(){
        that.startView = new HM.StartView();
        $('.holder').html(that.startView.$el);
        that.startView.on('next', renderInfoView);
    }

    function renderInfoView(){
        that.infoView = new HM.InfoView({test: HM.testData});
        $('.holder').html(that.infoView.$el);
        that.infoView.on('next', renderTestView);
    }

    function renderTestView(){
        that.testView = new HM.TestView({test: HM.testData});
        $('.holder').html(that.testView.$el);
        that.testView.on('next', renderResultsView);
    }

    function renderResultsView(responseTimes){
        that.resultsView = new HM.ResultsView({responseTimes: responseTimes});
        $('.holder').html(that.resultsView.$el);
    }

    renderStartView();

});