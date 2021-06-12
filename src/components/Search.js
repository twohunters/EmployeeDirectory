import React from "react";

function Search(props) {
    <form onSubmit={props.handleFormSubmit}>
        <div className="form-group">
            <input
                onChange={props.handleInputChange}
                value={props.search}
                type="text"
                className="form-control"
                placeholder="First, Last"
                id="search"
            />
        </div>
    </form>
}

export default Search;