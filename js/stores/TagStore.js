var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TagConstants = require('../constants/TagConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _tags = {};

create('Гипермаркет');
create('Магазин');

function create(text){
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _tags[id] = {
        id: id,
        text: text
    };
}

function destroy(id) {
    delete _tags[id];
}

var TagStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return _tags;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});


AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
      case TagConstants.TAG_CREATE:
          text = action.text.trim();
          if (text !== '') {
              create(text);
              TagStore.emitChange();
          }
          break;

      case TagConstants.TAG_DESTROY:
          destroy(action.id);
          TagStore.emitChange();
          break;

      default:
  }
});

module.exports = TagStore;
