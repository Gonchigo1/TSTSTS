import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data);
        }).catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);

    const handleDelete = (id) => {
        deleteUser(id).then(() => {
            setUsers(users.filter(user => user.id !== id));
        }).catch(error => {
            console.error('Error deleting user:', error);
        });
    };

    return (
        <div>
            <h1>Users :</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.description}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
