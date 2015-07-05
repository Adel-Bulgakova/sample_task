var React = require('react');
var ReactPropTypes = React.PropTypes;
var TagActions = require('../actions/TagActions');
var TagItem = require('./TagItem.react');
var TagStore = require('../stores/TagStore');

var MainSection = React.createClass({

    render: function() {

        var allTags = TagStore.getAll();
        var tags = [];

        for (var key in allTags) {
            tags.push(<TagItem key={key} tag={allTags[key]} />);
        }

        return (
            <ul id="tag-list">{tags}</ul>
        );
    }

});

module.exports = MainSection;
