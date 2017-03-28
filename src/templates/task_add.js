import React, { Component } from 'react';
import {Link} from 'react-router';

export default class filterTask extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-8 text-left">
                    <h1>Create task</h1>
                    <form>
                        <div className="form-group">
                            <label for="task_name">Task name</label>
                            <input type="task_name" className="form-control" id="task_name" />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Description</label>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                        </div>
                        <button type="submit" className="btn btn-default btn-danger">Cancel</button>
                        <button type="submit" className="btn btn-default btn-primary pull-right">Save</button>
                    </form>



                </div>
                <div className="col-sm-2 sidenav">
                    <div className="checkbox">
                        <label><input type="checkbox">DONE</input></label>
                    </div>
                    <label for="project">Project:</label>
                    <select class="form-control" id="project">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <br/>
                    <label for="tag">Tag</label>
                    <select multiple class="form-control" id="tag">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                </div>
            </div>
        );
    }
}