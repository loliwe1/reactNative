import AsyncStorage from '@react-native-community/async-storage';

class ApiStorage {

    getComments = async () => {
        // AsyncStorage.clear();
        try {
            const token = await AsyncStorage.getItem('token');
            const users = JSON.parse(await AsyncStorage.getItem('users'));
            const comments = users.find((user)=> user.token === token).comments
            return comments;
        } catch(e) {
            console.log(e)
        }
    }

    addComments = async (data) => {
        const comment = data.payload;
        try {
            let id = JSON.parse(await AsyncStorage.getItem('nextCommentId') || 1);
            comment.id = id; 
            await AsyncStorage.setItem('nextCommentId', JSON.stringify(++id));
        }catch(e) {
            console.log(e)
        } 
        try {
            const token = await AsyncStorage.getItem('token');
            const users = JSON.parse(await AsyncStorage.getItem('users'));
            const user = users.findIndex((user)=> user.token === token)
            let comments = users[user].comments
            comments.unshift(comment)
            await AsyncStorage.setItem('users', JSON.stringify(users))
        } catch(e) {
            console.log(e)
        }
    }

    getToken = async () => {
        return await AsyncStorage.getItem('token');
    }
    getUser = async () => {

        const token = await AsyncStorage.getItem('token');
        const users = JSON.parse(await AsyncStorage.getItem('users'));
        const user = users.findIndex((user)=> user.token === token)
        let comments = users[user].comments

        if(!comments) {
            comments = []
            users[user] = {...users[user], comments}
            await AsyncStorage.setItem('users', JSON.stringify(users))
        } 

        return JSON.parse(await AsyncStorage.getItem('users'));
    }


    saveToken = async (response) => {
        const {token} = response.data;
        const comments = []
        const user = {...response.data , comments } ;
        try {
            if(!token) return;
            await AsyncStorage.setItem('token', token)
            const users = JSON.parse(await AsyncStorage.getItem('users')) || [];
            if(users.find((user) => user.token === token)) return;
            users.push(user);
            await AsyncStorage.setItem('users', JSON.stringify(users))
        }catch(e) {
            console.log(e);
        }
    }

    logOut = async (navigation) => {
        navigation.navigate('LogIn');
        await AsyncStorage.removeItem('token');
    }
}

export default new ApiStorage();