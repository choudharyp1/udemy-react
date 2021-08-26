import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else{
        return lat > 0 ? 'winter' : 'summer';
    }
};

class SeasonDisplay extends React.Component{
    state = { season: null, text: null, iconName: null };
    componentDidMount() {
        const season = getSeason(this.props.lat, new Date().getMonth());
        this.setState({
            season: season,
            text: seasonConfig[season].text,
            iconName: seasonConfig[season].iconName
        });
    }

    render(){
        return (
            <div className={`season-display ${this.state.season}`}>
                <i className={`icon-left massive ${this.state.iconName} icon`}/>
                <h1>{this.state.text}</h1>
                <i className={`icon-right massive ${this.state.iconName} icon`}/>
            </div>
        );
    }
}

export default SeasonDisplay;