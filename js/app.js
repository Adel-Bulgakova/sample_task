var React = require('react');
var TagApp = require('./components/TagApp.react');


var ReactPropTypes = React.PropTypes;

var Filters = React.createClass({
    render: function() {
        var filters = [];
        filters.push(<Filter  key="1" name="Регион и территория" id="location"/>);
        filters.push(<Filter  key="2" name="Статус" id="status"/>);
        filters.push(<Filter  key="3" name="Тип" id="type"/>);
        filters.push(<Filter  key="4" name="Параметр" id="parameter"/>);

        return (
            <div>{filters}</div>
        );
    }
});

var Filter = React.createClass({
    propTypes: {
        name: ReactPropTypes.string.isRequired
    },

    onClickFilter: function() {
        var filterName = this.props.id;
        document.getElementById(filterName).className += " clicked";

        function getElementByAttribute(attr, value, root) {
            root = root || document.body;
            if(root.hasAttribute(attr) && root.getAttribute(attr) == value) {
                return root;
            }
            var children = root.children,
                element;
            for(var i = children.length; i--; ) {
                element = getElementByAttribute(attr, value, children[i]);
                if(element) {
                    return element;
                }
            }
            return null;
        }
        var attr = "filter";
        var activeFilter = getElementByAttribute(attr, filterName);
        activeFilter.className += " active";

        var deleteIcon =  document.createElement("div");
        deleteIcon.innerText = "x";
        deleteIcon.className = "delete-icon";

        activeFilter.getElementsByClassName("control-panel")[0].appendChild(deleteIcon);
        activeFilter.getElementsByClassName("control-panel")[1].appendChild(deleteIcon);

        deleteIcon.onclick = function(){
            activeFilter.className = "row";
            document.getElementById(filterName).className ="";
        }
    },

    render: function() {
        var filter = this.props.filter;


        return (
            <div onClick={this.onClickFilter} id={this.props.id}>{this.props.name}</div>
        );
    }

});


React.render(<Filters />,  document.getElementById('filters'));
React.render(<TagApp />,  document.getElementById('tagApp'));