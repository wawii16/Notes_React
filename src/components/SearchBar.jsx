import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(event) {
        this.setState({ keyword: event.target.value });
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <input
            className="search-bar"
                type="text"
                placeholder="Cari catatan..."
                value={this.state.keyword}
                onChange={this.onKeywordChangeHandler}
            />
        );
    }
}

export default SearchBar;
