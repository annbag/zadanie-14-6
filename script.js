var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement : function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    increment : function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },


    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, 'Decrement'),
            React.createElement('button', {onClick: this.increment}, 'Increment'),
        );
    }
});



var element = React.createElement('div', {},
            React.createElement('h1', {}, 'Niezależne liczniki'),
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter)
        );

ReactDOM.render(element, document.getElementById('app'));