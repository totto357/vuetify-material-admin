import Vue from "vue"

/**
 * Drawer
 */
export interface Drawer {
    mini: boolean,
    toggle: () => void,
}

const drawer = new Vue({
    data: () => ({
        mini: true,
    }),
    methods: {
        toggle() {
            this.mini = !this.mini
        }
    },
})

/**
 * Window
 */
export interface Window {
    drawer: Drawer,
}

declare module "vue/types/vue" {
    interface Vue {
        $window: Window
    }
}

const window = new Vue({
    data: () => ({
        drawer,
    }),
});

export default ({ app }, inject) => {
    inject("window", window)
}
