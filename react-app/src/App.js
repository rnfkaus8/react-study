import './App.css';
import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {title:'WEB', content: 'World Wide Web!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        }
    }
  render() {
      return (
          <div className="App">
              <Subject
                  title={this.state.subject.title}
                  content={this.state.subject.content}
              />
              <TOC data={this.state.contents}/>
              <Content
                  title="HTML"
                  desc="HTML is HyperText Markup Language."
              />
          </div>
      );
  }
}

export default App;
