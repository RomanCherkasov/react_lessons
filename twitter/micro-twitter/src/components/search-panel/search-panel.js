import React, {Component} from "react";

export default class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    onUpdateSearch(event) {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);// this fnc from app.js!!! that is not this.onUpdateSearch
                                        // yeah I'am think that is may be bad, but... JS ...
    }
    render(){
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search posts"
                onChange={this.onUpdateSearch}
            />
        )
    }
}
