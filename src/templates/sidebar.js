import React, { Component } from 'react';
import {Link} from 'react-router';

export default class sidebar extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-2 sidenav">
                    <p><a href="#">Filter</a></p>
                    <p><a href="#">Project 1</a></p>
                    <p><a href="#">Project 2</a></p>
                    <p><a href="#">Tag 1</a></p>
                    <p><a href="#">Tag 2</a></p>
                </div>
            </div>
        );
    }
}/**
 * Created by bsusta on 28. 3. 2017.
 */
