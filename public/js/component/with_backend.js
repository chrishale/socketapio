define(
  ['underscore', 'socket.io'],
  function (_, io) {

  'use strict';

  /**
   * Module exports
   */

  return withBackend;

  /**
   * Module function
   */

  function withBackend() {

    this.defaultAttrs({
      host: 'http://localhost:3000'
    });

    this.after('initialize', function () {

      var _this = this;
      
      _this._socket = io.connect(_this.attr.host);

      // overide _this._socket.io's emit method
      var $emit = _this._socket.$emit;
      _this._socket.$emit = function(key, data) {
        _this.trigger(key, data);
        $emit.apply(_this._socket, arguments);
      };

      // overide flight's trigger method
      var $trigger = _this.trigger;
      _this.trigger = function(key, data) {
        _this._socket.emit(key, data);
        $trigger.apply(_this, arguments);
      }

    });
  }

});