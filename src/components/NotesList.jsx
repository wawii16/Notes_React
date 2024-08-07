import React from "react";
import NotesItem from "./NotesItem";

class NotesList extends React.Component{
    render(){
        const { notes, onDelete, onArchive } = this.props;

        if (notes.length === 0) {
            return <p>Tidak ada catatan</p>;
        }

        return(
            <div className="notes-list">
                {
                    notes.map((notes)=>(
                        <NotesItem 
                            key={notes.id}
                            id={notes.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...notes}
                        />
                    ))
                }
            </div>
        )
    }
}

export default NotesList;