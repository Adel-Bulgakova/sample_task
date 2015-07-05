var React = require('react');
var ReactPropTypes = React.PropTypes;
var TagActions = require('../actions/TagActions');

var ENTER_KEY_CODE = 13;

var TagTextInput = React.createClass({

    propTypes:{
        id: ReactPropTypes.string,
        value: ReactPropTypes.string
    },

    getInitialState: function(){
        return{
            value: this.props.value || ''
        };
    },

    render: function(){
        return(
            <input id={this.props.id} onBlur={this._save} onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.value} autoFocus={true}/>
        );
    },

    _save: function(){
        TagActions.create(this.state.value);
        this.setState({
            value: ''
        });
    },

    _onChange: function(event){
        this.setState({
            value: event.target.value
        });
    },

    _onKeyDown: function(event){
        if (event.keyCode === ENTER_KEY_CODE){
            this._save();
        }
    }

});

module.exports = TagTextInput;
