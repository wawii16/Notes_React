import React from "react";

function ArchiveButton({ id, onArchive, archived}) {
    return <button className='contact-item_delete' onClick={() => onArchive(id)}> {archived ? 'Unarchive' : 'Archive'} </button>
}

export default ArchiveButton;