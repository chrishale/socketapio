define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */
  var resultsUi = require('component/results_ui');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    resultsUi.attachTo('.js-results');
  }

});
