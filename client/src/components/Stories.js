import React, { useEffect } from 'react';
import Story from './Story';
import PrivateRoute from './PrivateRoute';

const Stories = props => {

    return ( 
        <div>
            {props.loading === true && <img src = 'https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif' alt = "loading img" />}
            {props.posts.length > 0 && props.posts.map((post, index) => {
                return(<Story key = {index} post = {post} />)
            })}
        </div>
    )
}


export default Stories;