import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/users';

export const getUsers = () => {
    return axios.get(apiUrl).catch(error => {
        console.error('There was an error fetching the users!', error);
        throw error;
    });
};

export const getUser = (id) => {
    return axios.get(`${apiUrl}/${id}`).catch(error => {
        console.error(`There was an error fetching the user with id ${id}!`, error);
        throw error;
    });
};

export const createUser = (user) => {
    return axios.post(apiUrl, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => {
        console.error('There was an error creating the user!', error);
        throw error;
    });
};

export const updateUser = (id, user) => {
    return axios.put(`${apiUrl}/${id}`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => {
        console.error(`There was an error updating the user with id ${id}!`, error);
        throw error;
    });
};

export const deleteUser = (id) => {
    return axios.delete(`${apiUrl}/${id}`).catch(error => {
        console.error(`There was an error deleting the user with id ${id}!`, error);
        throw error;
    });
};
