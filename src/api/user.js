import axios from "axios";

class UserService {
    async login(user) {
        const { data } = await axios.post("/api/login/", user )
        console.log(data)
        return data
    }

    async register(user) {
        const { data } = await axios.post("/api/register/", user )
        console.log(data)
        return data
    }
    async forgetPassword(email) {
        const { data } = await axios.post("/api/forget_password/", email )
        console.log(data)
        return data
    }
}

export default new UserService();