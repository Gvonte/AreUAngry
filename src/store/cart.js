export default {
    state: {
        //购物车中每个元素是一个商家对应的购物车，购物车中的商品包含商品名称、数量、价格
        carts: []
    },
    mutations: {
        addCart(state, payload) {
            const {merchantId, food} = payload;
            let cart = state.carts.find(item => item.id === merchantId);
            if (!cart) {                 
                let { name, price } = food;
                state.carts.push({
                    id: merchantId,
                    cart: [{
                        name,
                        price,
                        count: 1
                    }]
                });
            } else {
                const item = cart.cart.find(item => item.name === food.name);
                if (item) {
                    item.count++;
                } else {
                    let { name, price } = food;
                    cart.cart.push({
                        name,
                        price,
                        count: 1
                    });
                }
            }
        },
        decreaseCart(state, payload) {
            const {merchantId, food} = payload;
            let cart = state.carts.find(item => item.id === merchantId);
            cart = cart && cart.cart;
            const index = cart && cart.findIndex(item => item.name === food.name);
            if (index > -1) {
                if (cart[index].count === 1) {
                    cart.splice(index, 1);
                } else {
                    cart[index].count--;
                }
            }
        },
        removeCart(state, merchantId) {
            state.carts.find(item => item.id === merchantId).cart = [];
        }
    },
    /* getters: {
        totalCount: state => state.cart.reduce((num, item) => num + item.count, 0),
        totalPrice: state => state.cart.reduce((total, item) => total + item.count * item.price, 0)
    } */
}