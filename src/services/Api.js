import * as axios from 'axios';

class Api {
    apiUrl = 'https://trello-purrweb.herokuapp.com';

    setAuthorizationHeader = (response) => {
        axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
        return response;
    }

    signUp = (data) => {
        const {payload} = data;
        console.log(payload);
        return axios.post(`${this.apiUrl}/auth/sign-up`, payload).then(this.setAuthorizationHeader);
    }

    logIn = (data) => {
        const {payload} = data;
        return axios.post(`${this.apiUrl}/auth/sign-in`, payload).then(this.setAuthorizationHeader);
    }

    getColumns = () => {
        return axios.get(`${this.apiUrl}/columns`)
    }
    addColumn = (data) => {
        return axios.post(`${this.apiUrl}/columns`, data)
    }
    deleteColumn = (columnId) => {
        return axios.delete(`${this.apiUrl}/columns/${columnId}`)
    }
    changeTitleColumn = (data) => {
        const {columnId} = data
        return axios.put(`${this.apiUrl}/columns/${columnId}`, data)
    }

    getTasks = () => {
        return axios.get(`${this.apiUrl}/cards`)
    }

    addTasks = (data) => {
        return axios.post(`${this.apiUrl}/cards`, data)
    }

    deleteTask = (id) => {
        return axios.delete(`${this.apiUrl}/cards/${id}`)
    }

    changeTask = (data) => {
        const {id} = data
        return axios.put(`${this.apiUrl}/cards/${id}`, data)
    }

    persisSignIn = (token) => {
        console.log('token', token)
        return axios.get(`${this.apiUrl}/columns`, {
            headers: {'Authorization': `bearer ${token}`},
        }).then(response => {
            this.setAuthorizationHeader({ data: { token } });
            return response;
        });
    }
}

export default new Api();
