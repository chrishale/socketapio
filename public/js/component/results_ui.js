'use strict';

define(
['flight/lib/component', 'component/with_backend'], function(defineComponent, withBackend) {
  return defineComponent(withBackend, resultsUi);
  
  function resultsUi() {

  	this.renderResults = function(e, data) {
  		_.each(data.results, _.bind(function(r) {
  			this.$node.append("<li>" + r + "</li>");
  		}, this));
  	};
    
    this.after('initialize', function () {
    	this.trigger('uiNeedsResults');  
    	this.on(document, 'dataFetchedResults', this.renderResults);
    });
  }

});

