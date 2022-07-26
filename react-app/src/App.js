import './App.css';
import React, {Component} from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            selected_content_id: 1,
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
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    content={this.state.subject.content}
                    onChangePage={this.changePage('welcome')}
                />
                <TOC
                    onChangePage={this.changePage('read')}
                    data={this.state.contents}
                />
                <Control onChangeMode={(_mode) => {
                    this.setState({
                        mode: _mode
                    })
                }}/>
                {this.getContents()}
            </div>
        );
    }

    changePage(mode) {
        return (id) => {
            this.setState({
                mode: mode,
                selected_content_id: Number(id)
            });
        };
    }

    getContents() {
        let _title, _desc, _article;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}/>
        } else if (this.state.mode === 'read') {
            const content = this.state.contents.find(content => content.id === this.state.selected_content_id);
            _title = content.title;
            _desc = content.desc;
            _article = <ReadContent title={_title} desc={_desc}/>
        } else if (this.state.mode === 'create') {
            _article = <CreateContent/>
        }
        return _article;
    }
}

export default App;
