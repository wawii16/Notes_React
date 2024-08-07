import React from "react";
import { getInitialData } from '../utils/index.js';
import NotesList from "./NotesList.jsx";
import NotesInput from "./NotesInput.jsx";
import SearchBar from "./SearchBar.jsx";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchKeyword: '',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.filter(note => note.id !== id),
            };
        });
    }

    onAddNotesHandler(title, body) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            };
        });
    }

    onArchiveHandler(id) {
        const updatedNotes = this.state.notes.map(note => {
            if (note.id === id) {
                return { ...note, archived: true };
            }
            return note;
        });
        this.setState({ notes: updatedNotes });
    }

    onUnarchiveHandler(id) {
        const updatedNotes = this.state.notes.map(note => {
            if (note.id === id) {
                return { ...note, archived: false };
            }
            return note;
        });
        this.setState({ notes: updatedNotes });
    }

    onSearchHandler(keyword) {
        this.setState({ searchKeyword: keyword });
    }

    render() {
        const filteredNotes = this.state.notes.filter(note => 
            note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) && !note.archived
        );

        const archivedNotes = this.state.notes.filter(note => 
            note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) && note.archived
        );

        return (
            <div className="notes-app">
                <h1>Aplikasi Notes</h1>
                <SearchBar onSearch={this.onSearchHandler} />
                <NotesInput addNotes={this.onAddNotesHandler} />
                <h2>Catatan Aktif</h2>
                <NotesList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                <h2>Arsip</h2>
                <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onUnarchiveHandler} />
            </div>
        );
    }
}

export default NotesApp;
