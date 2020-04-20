import axios from 'axios'

export default (userId) => {
    // return axios.get("http://47.105.165.248:8110/areuhungry/order-master/listForBuyer", {
    return axios.get("/areuhungry/order-master/listForBuyer", {
        params: {
            userId
        }
    });
}