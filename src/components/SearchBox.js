import React from 'react';

const SearchBox = (props) => { //I put parenthsis
    return (
        <div className="col col-lg-4">
            <input
                className="form-control"
                value={props.value}
                onChange={event => props.setSearchValue(event.target.value)}
                placeholder="Type to search..."
            ></input>
        </div>
    );
};

export default SearchBox;
