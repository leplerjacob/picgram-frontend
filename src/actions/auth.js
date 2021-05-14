import axios from "axios"

export const signUp = (credentials) => {
    axios.post("http://localhost:3000/users", {user:credentials})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
}