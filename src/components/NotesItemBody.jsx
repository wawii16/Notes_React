import React from "react";

class NotesItemBody extends React.Component{
    render(){
        const { title, body, createdAt } = this.props;
    
        return (
           <div className="item-body">
            <h3>{title}</h3>
            <p>{body}</p>
            <p className="createdAt">{createdAt}</p>
           </div> 
        )
    }

}

export default NotesItemBody;