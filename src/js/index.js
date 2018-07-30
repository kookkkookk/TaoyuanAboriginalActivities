import App from 'pageApp';
import page0 from "page0";
import survey from "survey";
import newpolicy from "newpolicy";
import awakening from "awakening";
import awakening1 from "awakening1";
import awakening2 from "awakening2";
import awakening3 from "awakening3";
import awakening4 from "awakening4";
import vuescroll from 'vue-scroll';
import Es6Promise from 'es6-promise';//處理IE11 axios無法引入ES6問題
Es6Promise.polyfill();

Vue.use(vuescroll);
require("index.html");

let filename = 'mike.jpg';
require('images/'+filename);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {path: '/index',component: page0,
            children: [
                {
                    path: '/index/:id',
                }
            ]
        },
        {path: '/survey',    component: survey },  
        {path: '/newpolicy', component: newpolicy },
        {path: '/awakening', component: awakening ,
            children: [
                { path: ''          , component: awakening1 },
                { path: 'awakening1', component: awakening1 },
                { path: 'awakening2', component: awakening2 },
                { path: 'awakening3', component: awakening3 },
                { path: 'awakening4', component: awakening4 },
            ]
        }, 
        {path: '/',   redirect :"/index"},    
        // {path: '*',   redirect :"/index"},                  
    ]  
})


router.afterEach(route => {
    document.getElementById("app").scrollTop = 0;  
    // console.log(route)
})

var Main = new Vue({
    el: '#app',
    router,
    render: h=>h(App),
});

