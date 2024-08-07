import React from "react";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            bodyLimit: 50,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const value = event.target.value;
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
        
    }

    onBodyChangeEventHandler(event) {
        const value = event.target.value;
        if (value.length <= this.state.bodyLimit) {
            this.setState(() => {
                return {
                    body: value,
                };
            });
        }
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state.title, this.state.body);
        this.setState(() => {
            return {
                title: '',
                body: '',
            };
        });
    }

    render() {
        return (
            <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
                <p>Sisa karakter: {this.state.bodyLimit - this.state.body.length}</p>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler} />
                <textarea 
                    placeholder="Body"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default NotesInput;
