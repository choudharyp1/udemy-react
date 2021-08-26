import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Only update state using the function setState
class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ lat: position.coords.latitude })},
            (err) => {this.setState( { errorMessage: err.message })});
        console.log('My component was added and rendered')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('My component was updated and re-rendered.')
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return (<Spinner message="Please accept geolocation request"/>);
    }

    render() {
        return <div className={`border red`}>
            {this.renderContent()}
        </div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))