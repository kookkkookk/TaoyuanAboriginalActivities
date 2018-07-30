import user from 'userVue'

let filename = 'mike.jpg';
require('images/'+filename);    //打包圖片



$(function(){
    new Vue(user);
    console.log("pug vue載入")
})
