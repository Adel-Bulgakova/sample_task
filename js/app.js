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
    getInitialState: function() {
        return {
            showFilterContent: false
        };
    },

    onClick: function() {
        this.setState({
            showFilterContent: true
        });
        document.getElementById(this.props.id).className += " active";
    },

    render: function() {
        var filter = this.props.filter;
        return (
            <div onClick={this.onClick}>{this.props.name}</div>
        );
    }

});


React.render(<Filters />,  document.getElementById('filters'));
React.render(<TagApp />,  document.getElementById('tagApp'));