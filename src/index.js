import 'Styles/main.scss';
import Vue from 'vue';
import Main from 'Components/Main/Main.vue';
import Content from 'Components/Main/Content/Content.vue';
import Home from 'Pages/Home/Home.vue';
import CompanyData from 'Pages/CompanyData/CompanyData.vue';
import CompanyPage from 'Pages/CompanyPage/CompanyPage.vue';
import VueRouter from 'vue-router';
import VueCurrencyInput from 'vue-currency-input'
import VueBreadcrumbs from 'vue-breadcrumbs'
import Vuex from 'vuex'
import vueMoment from 'vue-moment';

const pluginOptions = {
    globalOptions: {
        currency: 'USD',
        locale: 'en-US',
    }
};

Vue.use(VueCurrencyInput, pluginOptions);
Vue.use(VueBreadcrumbs);
Vue.use(VueBreadcrumbs);
Vue.use(vueMoment);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        additionalNotes: 'blablabla'
    },
    mutations: {
        setAdditionalNotes(state, notes) {
            state.additionalNotes = notes;
        }
    },
    actions: {
    },
    modules: {
    }
});

const routes = [
    {
        path: '/',
        component: Content,
        meta: {
            breadcrumb: 'Home',
        },
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/company-data',
                name: 'CompanyData',
                component: CompanyData,
                meta: {
                    breadcrumb: 'Company Data',
                },
            },
            {
                path: '/company-page',
                name: 'CompanyPage',
                component: CompanyPage,
                meta: {
                    breadcrumb: 'Company Page',
                },
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

new Vue({
    router,
    store,
    render: createElement => createElement(Main),
}).$mount('#app');
