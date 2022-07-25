import React, {Component} from "react";

class TOC extends Component {
    render() {
        const lists = [];
        const contents = this.props.data;
        for (const content of contents) {
            lists.push(
                <li key={content.id}>
                    <a href={"/content/" + content.id}
                       data-id={content.id}
                       onClick={(e) => {
                           e.preventDefault();
                           this.props.onChangePage(e.target.dataset.id);
                       }}
                    >
                        {content.title}
                    </a>
                </li>
            );
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default TOC;