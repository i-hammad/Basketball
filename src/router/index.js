import Vue from "vue";
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router);
const DEFAULT_TITLE = 'Basketball';
const router = new Router({
    mode: "history",
    routes: routes
});

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;