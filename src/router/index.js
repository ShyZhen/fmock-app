import Vue from 'vue'
import Router from 'vue-router'

// 异步加载路由模块
const Index = () => import('../pages/Index');
const Login = () => import('../pages/Login');
const Follow = () => import('../pages/Follow');
const Write = () => import('../pages/Write');
const Mime = () => import('../pages/Mime');
const Post = () => import('../pages/Post');
const User = () => import('../pages/User');

const routes = [
    { path: '/', name: 'root', redirect: '/index' },
    { path: '/index', name: 'Index', component: Index },
    { path: '/login', name: 'Login', component: Login },
    { path: '/follow', name: 'Follow', component: Follow },
    { path: '/write', name: 'Write', component: Write },
    { path: '/mime', name: 'Mime', component: Mime },
    { path: '/post/:uuid', name: 'Post', component: Post },
    { path: '/user/:uuid', name: 'User', component: User },
];

Vue.use(Router);

export default new Router({
    base: '/',
    routes,
})
