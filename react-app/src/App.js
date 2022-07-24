import './App.css';
import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            subject: {title: 'WEB', content: 'World Wide Web!'},
            welcome: {title: 'Welcome', desc: 'Hello, React!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        };
    }
    render() {
        let {_title, _desc} = this.changeTitleAndDesc(this.state.mode);
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    content={this.state.subject.content}
                    onChangeMode={this.changeMode('welcome')}
                />
                <TOC
                    onChangeMode={this.changeMode('read')}
                    data={this.state.contents}
                />
                <Content
                    title={_title}
                    desc={_desc}
                />
            </div>
        );
    }

    changeMode(_mode) {
        return () => {
            this.setState({mode: _mode})
        };
    }

    changeTitleAndDesc(mode) {
        let _title, _desc = null;
        if (mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            return {_title, _desc};
        }
        _title = this.state.contents[0].title;
        _desc = this.state.contents[0].desc;
        return {_title, _desc};
    }
}

export default App;
