import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


const Main = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div>

            {
            
            
                users.map(user => <Cart user={user}></Cart>)

            }
        </div>
    );
};

export default Main;