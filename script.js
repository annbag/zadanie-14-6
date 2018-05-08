var Counter = React.createClass({
    getDefaultProps: function () {
        console.log ('Faza inicjalizacji')
    },

    getInitialState: function() {
        console.log('Faza inicjalizacji, początkowy stan naszego komponentu')
        return {
            counter: 0
        };
    },

    componentWillMount: function () {
        console.log('Metoda wywoływana tylko w momencie inicjalizacji komoponentu')
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
        console.log()
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, 'Decrement'),
            React.createElement('button', {onClick: this.increment}, 'Increment'),
        );
    },

    componentDidMount: function () {
        console.log('W tym miejscu możemy wykonać rózne operacje monipulacji, użyć jQuery lub pobrać dane')
    },

    componentWillReceiveProps: function () {
        console.log('Faza aktualizacji, zosatje wywołana, gdy komponent otrzyma nowe właściwości, aktualizowanie stanu na podsitwie nadchodzących właściwości')
    },

    shouldComponentUpdate: function () {
        console.log('Faza aktualizacji, pozwala sprawdzić czy faktycznie trzeba jeszcze raz przeryswoać komponent, zwraca wartośc true lub false')
        return true;
    },

    componentWillUpdate: function () {
        console.log('Faza aktualizacji, zosatnie wywyołana jeśli wcześniejsza metoda zwraca true')
    },

    componentDidUpdate: function () {
        console.log('Faza aktualizacji, można wykonać np jakieś manipulacje DOM')
    },

    componentWillUnmount: function () {
        console.log('faza usuwania')
    },


});



var element = React.createElement('div', {},
            React.createElement('h1', {}, 'Niezależne liczniki'),
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter)
        );

ReactDOM.render(element, document.getElementById('app'));