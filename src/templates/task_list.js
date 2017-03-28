import React, { Component } from 'react';
import {Link} from 'react-router';

export default class filterTask extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid text-left">
                    <div className="row content">
                        <div className="col-sm-10">
                            <h1>Project 1</h1>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task name</th>
                                    <th>Project</th>
                                    <th>Tag</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Task 1</td>
                                    <td>Project 2</td>
                                    <td>Tag 3</td>
                                    <td><input type="checkbox" value="" /></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Task 1</td>
                                    <td>Project 2</td>
                                    <td>Tag 3</td>
                                    <td><input type="checkbox" value="" /></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}