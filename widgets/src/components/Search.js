import React from "react";
import { useState} from "react";

const Search = () => {
    const [term, setTerm] = useState('')

    const onFormSubmit = () => {

    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={(event) => onFormSubmit} className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input"
                           type="text"
                           value={term}
                           onChange={event => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Search;