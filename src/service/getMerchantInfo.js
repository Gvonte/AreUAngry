import axios from 'axios'

export default merchantId => axios.get(`http://47.105.165.248:8110/areuhungry/merchant/getByMerchantId/${merchantId}`)
