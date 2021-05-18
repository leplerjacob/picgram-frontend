import axios from "axios"

export const login = (credentials) => {
    axios.post("http://localhost:3000/users/sign_in", {user:credentials})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
}