var React = require('react');
var TodoStore = require('../stores/TodoStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}
var ReactPropTypes = React.PropTypes;

var TodoApp = React.createClass({
    getInitialState: function() {
        return getTodoState();
    },

    render: function() {
        var filters = [];
        filters.push(<Filter  key='1' name="Регион и территория" />);
        filters.push(<Filter  key='2' name="Статус" />);
        filters.push(<Filter  key='3' name="Тип" />);
        filters.push(<Filter  key='4' name="Параметр" />);

        return (
            <div>{filters}</div>
        );
    },
});

var Filter = React.createClass({
    propTypes: {
        name: ReactPropTypes.string.isRequired
    },
    getInitialState: function() {
        return {
            isChecked: false
        };
    },
    render: function() {
        var filter = this.props.filter;
        return (
            <div onClick={this._onClick}>{this.props.name}</div>
        );
    },

    _onClick: function() {
        this.setState({isChecked: true});
    },

});


module.exports = TodoApp;
