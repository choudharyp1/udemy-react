import React from "react";

class SearchBar extends React.Component{
    state = { videoSearchTerm: ''}

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.videoSearchTerm)
    }
f
    onInputChange = (event) => {
        this.setState({ videoSearchTerm: event.target.value})
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search:</label>
                        <input
                            type="text"
                            value={this.state.videoSearchTerm}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>

            </div>
        );
    }

}

export default SearchBar;