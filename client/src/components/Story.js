import React from 'react';

const Story = props => {
    return(
        <div>
            <h2>{props.post.title}</h2>
            <p>{props.post.description}</p>
        </div>
    );
}

export default Story;