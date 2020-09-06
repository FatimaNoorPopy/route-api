import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from '@material-ui/core';
import Comment from '../Comment/Comment';


const UserDetail = () => {
    const{userId} =  useParams();
    const[user, setUser] = useState({});
    useEffect(() => {
        const url =` https://jsonplaceholder.typicode.com/posts/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[])

    const{id,title,body} = user;
    return (
        <div>

    <h1>Id: {id}</h1>
    <h2>Title:{title}</h2>
 <p>Body:{body}</p>
   <Comment user={userId}></Comment>
    
        </div>
    );
};

export default UserDetail;