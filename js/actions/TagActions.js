var AppDispatcher = require('../dispatcher/AppDispatcher');
var TagConstants = require('../constants/TagConstants');

var TagActions = {

    create: function(text) {
        AppDispatcher.dispatch({
            actionType: TagConstants.TAG_CREATE,
            text: text
        });
    },

    destroy: function(id) {
        AppDispatcher.dispatch({
            actionType: TagConstants.TAG_DESTROY,
            id: id
        });
    }

};

module.exports = TagActions;
