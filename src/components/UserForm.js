import React, { useState, useEffect } from 'react';
import { createUser, updateUser, getUser } from '../services/userService';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm = () => {
    const [user, setUser] = useState({ name: '', description: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getUser(id).then(response => {
                setUser(response.data);
            }).catch(error => {
                console.error(`Error fetching user with id ${id}:`, error);
            });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            updateUser(id, user).then(() => {
                navigate('/');
            }).catch(error => {
                console.error(`Error updating user with id ${id}:`, error);
            });
        } else {
            createUser(user).then(() => {
                navigate('/');
            }).catch(error => {
                console.error('Error creating user:', error);
            });
        }
    };

    return (
        <div>
            <h1>{id ? 'Update User' : 'Create User'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={user.description} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
