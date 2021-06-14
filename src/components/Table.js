import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import Employees from "./Employees";
import API from "../utils/API";

class Table extends Component {
    state = {
        results: [],
        resultsFiltered: [],
        search: ""
    };

    componentDidMount() {
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

        const employeeSearch = this.state.search;
        const employeeList = this.state.results.filter(item => {
            let value = Object.values(item).join("").toLowerCase();
            return value.indexOf(employeeSearch.toLowerCase()) !== -1;
        });

        this.setState({
            resultsFiltered: employeeList
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
        return (
            <div>
                <Header />
                <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.searchEmployees} search={this.state.search} />
                <table className="table">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                    <tbody>
                        {
                            this.state.results.map((employee, index) => (
                                <Employees
                                    key={index}
                                    picture={employee.picture}
                                    name={employee.name}
                                    email={employee.email}
                                    phone={employee.phone}
                                    index={index}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    };
}

export default Table;