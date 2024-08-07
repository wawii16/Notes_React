import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

class NotesItem extends React.Component{
    render(){
        const { title, body, createdAt, id, onDelete, onArchive , archived} = this.props;
        
        return(
            <div className="notes-item">
                <NotesItemBody title={title} body={body} createdAt={createdAt} />
                <DeleteButton onDelete={onDelete} id={id} />
                <ArchiveButton archived={archived} onArchive={onArchive} id={id}/>
                
            </div>
        )
    }
}

export default NotesItem;