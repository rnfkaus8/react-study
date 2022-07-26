import React, {Component} from "react";

class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="/create" onClick={this.changeMode('create')}>create</a></li>
                <li><a href="/update" onClick={this.changeMode('update')}>update</a></li>
                <li><input type="button" value="delete" onClick={this.changeMode('delete')} /></li>
            </ul>
        );
    }

    changeMode(mode) {
        return (e) => {
            e.preventDefault();
            this.props.onChangeMode(mode);
        };
    }
}

export default Control;
