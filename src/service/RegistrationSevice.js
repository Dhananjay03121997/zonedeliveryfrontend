import axios from 'axios'
class UserService{
    mockUrl="http://localhost:3001"

    constructor () {}

    getAllUser()
    {
        return axios.get(this.mockUrl)
    }

    createUser(user){
        console.log('user', user);
        return axios.post(`${this.mockUrl}/signup`,user)
    }
    createUser(user){
        console.log('user', user);
        return axios.post(`${this.mockUrl}/signup`,user)
    }

}
export default new UserService()