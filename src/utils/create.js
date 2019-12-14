import Vue from 'vue'
import store from '../store'

export default function (Component, option) {
    // 创建组件，并挂载到body中
    const vm = new Vue({
        store,
        render: h => h(Component, option)
    }).$mount();
    const comp = vm.$children[0];
    document.documentElement.appendChild(vm.$el);
    comp.remove = () => {
        document.documentElement.removeChild(vm.$el);
        vm.$destroy();
    };
    return comp;
}