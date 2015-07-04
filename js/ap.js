var TabComponent = React.createClass({
    getDefaultProps: function() {
        return {
            menuItems: [
                {uid: 'home'},
                {uid: 'about'},
                {uid: 'contact'}
            ]
        };
    },

    getInitialState: function() {
        return {
            activeMenuItemUid: 'home'
        };
    },

    setActiveMenuItem: function(uid) {
        this.setState({activeMenuItemUid: uid});
    },

    render: function() {
        var menuItems = this.props.menuItems.map(function(menuItem) {
            return (
                MenuItem({
                    active: (this.state.activeMenuItemUid === menuItem.uid),
                    key: menuItem.uid,
                    onSelect: this.setActiveMenuItem,
                    uid: menuItem.uid
                })
            );
        }.bind(this));

        return (
            React.DOM.ul({className: 'nav navbar-nav'}, menuItems)
        );
    }
});

    var MenuItem = React.createClass({
        handleClick: function(event) {
            event.preventDefault();
            this.props.onSelect(this.props.uid);
        },
        render: function() {
            var className = this.props.active ? 'active' : null;

            return (
                React.DOM.li({className: className},
                    React.DOM.a({href: "#" + this.props.uid, onClick: this.handleClick})
                )
            );
        }
    });