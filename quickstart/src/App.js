import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Carre from './Carre';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            helloMessage: "Hello World",
            count: 0
        };

        this.handleOnClick = this.handleOnClick.bind(this);

        console.log('Constructor');
    }
    componentWillMount() {
        console.log('Will Mount');
        this.setState({
            count: 0
        });
    }

    render() {
        console.log('Render');
        return (
            <div className="App">
                <Carre color="blue"/>
                <Carre color="red" toto={12}/>
                <button></button>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    handleOnClick() {
        let c = this.state.count;
        this.setState({
            count : c + 1
        });
    }
}

export default App;
