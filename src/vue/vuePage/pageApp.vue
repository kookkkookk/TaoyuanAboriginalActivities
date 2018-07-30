<script>
export default {
    data(){
        return {
            isMenuDisplay: false,
            isXX: false,
            pages: [
                '/index',
                '/survey',
                '/newpolicy',
            ],
            menuList: [
                '首　頁',
                '桃原概況',
                '桃原新政',
            ],
            mainScrollTop: 0,
            isIndexHTML:true,
            isIndexOther:false,
            pageGoScroll: null,
            thisUrl: null
        };
    },
    computed: {

    },
    methods:{
        switchMenu(){
            this.isMenuDisplay = ! this.isMenuDisplay;
            this.isXX = ! this.isXX;
        },
        thisUrlIndexOf(){
           this.thisUrl = this.$route.path;
           //this.thisUrl = location.href;
            if(this.thisUrl.indexOf("/index")==-1){
                this.isIndexHTML = false;
                this.isIndexOther = true;
            }else{
                this.isIndexHTML = true;
                this.isIndexOther = false;
            }
        },
        TweenMaxScroll(scrollPosition,secNum){
            let appBody = document.getElementById("app");
            TweenMax.to(appBody, secNum, {
                scrollTo:{
                    y: scrollPosition,
                }, 
                ease:Power3.easeOut
            });
        },
        gotoPage(pageNum){
            this.thisUrlIndexOf();
            if(this.thisUrl.indexOf("/index")==-1){

            }else{
                setTimeout(()=>{
                    if(pageNum == 1){
                        this.pageGoScroll = document.getElementById("page1").offsetTop;
                    }else if(pageNum == 3){
                        this.pageGoScroll = document.getElementById("page3").offsetTop;
                    }else if(pageNum == 4){
                        this.pageGoScroll = document.getElementById("page4").offsetTop+300;
                    }else if(pageNum == 5){
                        this.pageGoScroll = document.getElementById("page5").offsetTop;
                    }else if(pageNum == 6){
                        this.pageGoScroll = document.getElementById("page6").offsetTop;
                    }else if(pageNum == 7){
                        this.pageGoScroll = document.getElementById("page7").offsetTop;
                    }
                    this.TweenMaxScroll(this.pageGoScroll,2);
                    //window.history.replaceState({}, null, "http://localhost:3000/#/index/"+pageNum);
                    //window.history.replaceState({}, null, "http://www.kookkkookk.url.tw/#/index/"+pageNum);
                    window.history.replaceState({}, null, "http://www.tetirm-tyc.com/#/index/"+pageNum);
                    //this.$router.push(`/index/${pageNum}`)
                },300) 
            }
            
        },
        hideIndexVal(val){
            // console.log("hideIndexVal:",val);
            this.isIndexHTML = val;
        },
        showOtherVal(val){
            // console.log("showOtherVal",val);
            this.isIndexOther = val;
        },
        onScroll(e){
            this.mainScrollTop = (window.innerHeight+e.target.scrollTop)-100;
        },
    },
    watch:{
        
    },
    created(){
    },
    mounted(){
        this.mainScrollTop = window.innerHeight + document.getElementById("app").scrollTop;
        this.thisUrlIndexOf();

        //console.log("thisUrl:",this.thisUrl.substr(-1,1));
        // console.log(isNaN(this.thisUrl.substr(-1,1)))
        let num;
        if(this.thisUrl.indexOf("/index")!=-1){
            if(!isNaN(this.thisUrl.substr(-1,1))){
                
                num = this.thisUrl.substr(-1,1);
                //console.log("num:",num);
                this.pageGoScroll = document.getElementById("page"+num).offsetTop;
                //console.log("this.pageGoScroll:",this.pageGoScroll)
                setTimeout(()=>{
                    this.TweenMaxScroll(this.pageGoScroll,0);
                },500) 
            }
        }
        
    }
};
</script>

<template>
    <div id="app" v-cloak v-scroll="onScroll">
        <div id="menuBtm"
            @click="switchMenu"
        >
            <span :class="{on:isXX}"></span>
            <span :class="{on:isXX}"></span>
            <span :class="{on:isXX}"></span>
        </div>
        <transition
            enter-active-class="animated bounceIn"
            leave-active-class="animated zoomOut"
        >
            <div id="menu"
                v-if="isMenuDisplay"
            >   
                <div id="menuContent">
                    <div class="menuBtnGroup">
                        <router-link class="btn1" :to='pages[0]' @click.native="switchMenu();gotoPage(1)"><img src="~menu_index_hone.png" alt="" />{{menuList[0]}}</router-link>
                        <span class="menuContentLine"></span>
                        <h2>桃原</h2>
                        <router-link class="btn2" :to='pages[1]' @click.native="switchMenu();gotoPage(3)"><img src="~menu_icon1.png" alt="" />{{menuList[1]}}</router-link>
                        <router-link :to='pages[2]' @click.native="switchMenu();gotoPage(3)">{{menuList[2]}}</router-link>
                        <span class="menuContentLine"></span>
                        <h2>106年桃園市原住民族日系列活動</h2>

                        <div v-if="isIndexHTML">                        
                            <a href="javascript:;" @click="switchMenu();gotoPage(4);">覺　醒</a>
                            <a href="javascript:;" @click="switchMenu();gotoPage(5);">樂信瓦旦紀念公園落成典禮及特展開展記者會</a>
                            <a href="javascript:;" @click="switchMenu();gotoPage(6);">原住民族權利講堂</a>
                            <span class="menuContentLine"></span>
                            <a href="javascript:;" @click="switchMenu();gotoPage(7)">相關連結</a>
                        </div>
                        <div v-if="isIndexOther">       
                            <router-link :to='pages[0]' @click.native="switchMenu();gotoPage(4)">覺　醒</router-link>
                            <router-link :to='pages[0]' @click.native="switchMenu();gotoPage(5)">樂信瓦旦紀念公園落成典禮及特展開展記者會</router-link>
                            <router-link :to='pages[0]' @click.native="switchMenu();gotoPage(7)">原住民族權利講堂</router-link>
                            <span class="menuContentLine"></span>
                            <router-link :to='pages[0]' @click.native="switchMenu();gotoPage(7)">相關連結</router-link>
                        </div>
                        
                    </div>
                    <div class="menuCloseBtn"
                        @click="switchMenu()"
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
            </div>
        </transition>
        
        <transition mode='out-in'>
            <router-view 
                :mainScrollTop="mainScrollTop"
                @isHideIndex="hideIndexVal"
                @isShowOther="showOtherVal"
            ></router-view>
        </transition>
    </div>
</template>
<style lang='scss'>
    @import '../../css/scss/_reset.scss';
    @import '../../css/scss/_layout.scss';
    @import '../../css/scss/_cloudMove.scss';
    
</style>
<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_animate.min.scss';
    .v-enter-active,
    .v-leave-active{
        transition: opacity .2s;
    }
    .v-enter,
    .v-leave-active{
        opacity:0;
    }
    [v-cloak]{
        display: none;
    }
    #app{
        background-color: #e6ddcd;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    #menuBtm{
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-color: #62493a;
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 51;
        cursor: pointer;
        transition: all 0.3s;
        transform-origin: center;
        @include SCREEN_736 {
            width: 50px;
            height: 50px;
        }
        &:hover{
            background-color: #523a2c;
            transform: scale(0.9);
        }
        >span{
            display: block;
            width: 30px;
            height: 3px;
            background-color: #fff;
            position: absolute;
            left: 25px;
            transition: all 0.3s;
            transform-origin: center;
            @include SCREEN_736 {
                width: 20px;
                left: 15px;
            }
        }
        >span:nth-child(1){
            top: 29px;
            @include SCREEN_736 { top: 14.5px; }
            &.on{
                top: 40px;
                transform: rotate(45deg);
                @include SCREEN_736 { top: 23.5px; }
            }
        }
        >span:nth-child(2){
            top: 40px;
            @include SCREEN_736 { top: 23.5px; }
            &.on{
                transform: scaleX(0.2);
            }
        }
        >span:nth-child(3){
            top: 51px;
            @include SCREEN_736 { top: 32.5px; }
            &.on{
                top: 40px;
                transform: rotate(-45deg);
                @include SCREEN_736 { top: 23.5px; }
            }
        }
    }
    #menu{
        width: 100%;
        height: 100%;
        background-color: rgba(#40362c,0.95);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;
        #menuContent{
            width: 100%;
            max-width: 1024px;
            height: auto;
            margin: 0 auto;
            // background-color: #456;
            .menuBtnGroup{
                width: 100%;
                margin-top: 15%;
                a{
                    color: #d5d5d5;
                    font-size: 26px;
                    display: block;
                    text-align: center;
                    margin: 10px 0 10px 0;
                    transition: all 0.3s;
                    padding: 0 10px;
                    @include SCREEN_736 { font-size: 18px; margin: 15px 0 15px 0;}
                    &:hover{
                        color: #dd9365;
                    }
                    >img{
                        margin-right: 6px;
                        width: 29px;
                        height: 29px;
                        @include SCREEN_736 { width: 20px;height: 20px; }
                    }
                }
                .btn1{
                    &:hover{
                        >img{
                           filter: brightness(50%) sepia(100) saturate(40) hue-rotate(25deg); 
                        }
                    }
                    >img{
                        margin-left: -38px;
                        @include SCREEN_736 {
                            margin-left: -25px;
                        }
                    }
                }
                .btn2{
                    &:hover{
                        >img{
                            opacity: 1;
                        }
                    }
                    >img{
                        opacity: 0;
                        margin-left: -38px;
                        @include SCREEN_736 {
                            margin-left: -27px;
                        }
                    }
                }
                
                .menuContentLine{
                    width: 165px;
                    height: 1px;
                    background-color: #ffffff;
                    display: block;
                    margin: 25px auto;
                    @include SCREEN_736 { margin: 15px auto; }
                }
                >h2{
                    color: #d1ba8e;
                    font-size: 22px;
                    display: block;
                    text-align: center;
                    margin-bottom: 10px;
                    @include SCREEN_736 { font-size: 16px; }
                }
            }
            .menuCloseBtn{
                width: 80px;
                height: 80px;
                // background-color: #759;
                position: absolute;
                top: 8%;
                right: 15%;
                cursor: pointer;
                @include SCREEN_736 {
                    width: 50px;
                    height: 50px;
                    top: 10px;
                    right: 10px;
                }
                &:hover span:nth-child(1){
                    transform: rotate(135deg);
                }
                &:hover span:nth-child(2){
                    transform: rotate(45deg);
                }
                >span{
                    width: 50px;
                    height: 1.5px;
                    background-color: #fff;
                    display: block;
                    position: absolute;
                    top: 38.5px;
                    left: 15px;
                    transition: all 0.3s;
                    transform-origin: center;
                    @include SCREEN_736 {
                        width: 30px;
                        top: 23.5px;
                        left: 10px;
                    }
                }
                >span:nth-child(1){
                    transform: rotate(45deg);

                }
                >span:nth-child(2){
                    transform: rotate(-45deg);
                }
            }  
        }
    }
</style>
