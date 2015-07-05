var React = require('react');
var TagActions = require('../actions/TagActions');
var MainSection = require('./MainSection.react');
var TagStore = require('../stores/TagStore');
var TagTextInput = require('./TagTextInput.react');

function getTagState() {
    return {
        allTags: TagStore.getAll()
    };
}

var TagApp = React.createClass({
    getInitialState: function() {
        return getTagState();
    },
    componentDidMount: function() {
        TagStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        TagStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <div id="tags">
                <MainSection />
                <TagTextInput id="new-tag"/>
          </div>
         );
    },

    _onChange: function() {
        this.setState(getTagState());
    }

});

module.exports = TagApp;
