import axios from 'axios'

// export default id => axios.get("http://47.105.165.248:8110/areuhungry/product-info/listForBuyer", {
export default id => axios.get("/areuhungry/product-info/listForBuyer", {
    params: {
        merchant_id: id
    }
})
