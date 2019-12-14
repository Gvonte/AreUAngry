import axios from 'axios'

export default ()=>{
    return axios.get("http://47.105.165.248:8110/areuhungry/merchant/listForBuyer");
}