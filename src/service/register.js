import axios from 'axios'

export default obj => {
    // return axios.post("http://47.105.165.248:8110/areuhungry/user-info/register", obj);
    return axios.post("/areuhungry/user-info/register", obj);
}