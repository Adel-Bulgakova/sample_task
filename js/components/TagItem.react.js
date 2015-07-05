var React = require('react');
var ReactPropTypes = React.PropTypes;
var TagActions = require('../actions/TagActions');
var TagTextInput = require('./TagTextInput.react');

var cx = require('react/lib/cx');

var TagItem = React.createClass({

    propTypes: {
        tag: ReactPropTypes.object.isRequired
    },

    render: function(){
        var tag = this.props.tag;

        return (
            <li key={tag.id}>
                <div><span className="destroy" onClick={this._onDestroyClick}>x</span>{tag.text}</div>
            </li>
        );
    },

    _onDestroyClick: function(){
        TagActions.destroy(this.props.tag.id);
    }

});

module.exports = TagItem;
