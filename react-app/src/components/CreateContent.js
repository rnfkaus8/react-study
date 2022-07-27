import React, {Component} from "react";

class CreateContent extends Component {
    render() {
        return (
            <article>
                <form>
                    <h2>Create</h2>
                    <form>
                        <p>
                            <input type="text" name="title" placeholder="title" />
                        </p>
                    </form>
                </form>
            </article>
        )
    }
}

export default CreateContent;