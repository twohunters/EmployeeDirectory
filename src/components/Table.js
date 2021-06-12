import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import API from "../utils/API";

class Table extends Component {
    state = {
        results: [],
        resultsFiltered: [],
        search: ""
    };

    componentDidMount() {
        this.getEmployees();
    };

    getEmployees() {
        API.getEmployees()
            .then(res => {
                this.setState({
                    results: res.data.results,
                    resultsFiltered: res.data.results
                })
            });
    };

    searchEmployees = (event) => {
        event.preventDefault();

        const search = this.state.search;
        const list = this.state.results.filter(item => {
            let value = Object.values(item).join("").toLowerCase();
            return value.indexOf(search.toLowerCase()) !== -1;
        });

        this.setState({
            resultsFiltered: list
        });
    };

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            search: event.target.value
        });
    };

    sortEmployees = () => {
        // create a way to sort a search for employees by first name, last name, dob, email
    };

    render = () => {
        
    };
}

export default Table;