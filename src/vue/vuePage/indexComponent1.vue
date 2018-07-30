<script>
// import stateModle from "./stateModle"
export default {
    props:["desktopDisplayPassMainVal","mobileDisplayPassMainVal","toComponentScrollTop"],
    data(){
        // return stateModle
        return {
            page1:99999,
            page1S_top:false,

            // pageww1MobileBg:null,
            // page1MobileBgS_top:false,
            // page2MobileBg:null,
            // page2MobileBgS_top:false
        };
    },
    computed: {

    },
    methods:{
        toCompScrollTop(val){
            //console.log("toComponentScrollTop:",val);
            if(val > this.page1){
                this.page1S_top = true;
            }

            // if(val > this.page1MobileBg){
            //     this.page1MobileBgS_top = true;
            // }
            // if(val > this.page2MobileBg){
            //     this.page2MobileBgS_top = true;
            // }
        }
    },
    watch:{
        toComponentScrollTop(val){
            this.toCompScrollTop(val);
        }
    },
    created(){

    },
    mounted(){
        this.page1 = document.querySelector("#page1").offsetTop;
        //this.page1MobileBg = document.querySelector(".page1-mobile-bg").offsetTop;
        //this.page2MobileBg = document.querySelector(".page2-mobile-bg").offsetTop;
        this.toCompScrollTop(this.toComponentScrollTop);
    }
};
</script>

<template>
    <div id='page1'>
        <div class="page1-bg picfx picfloat" v-if="desktopDisplayPassMainVal" :class="{movingVertical:true,on:page1S_top}"></div>
        <div class="page2-bg picfx picfloat" v-if="desktopDisplayPassMainVal" :class="{movingLevel:true,on:page1S_top,movingDelay1:true}"></div>
        <div class="page3-bg picfx picfloat" v-if="desktopDisplayPassMainVal" :class="{movingLevelLeft:true,on:page1S_top,movingDelay2:true}"></div>
        <div class="page4-bg picfx picfloat" v-if="desktopDisplayPassMainVal"></div>
        <div class="bg-people" v-if="desktopDisplayPassMainVal" :class="{movingVertical:true,on:page1S_top}">
            <img src="~index_mainPic_people_desktop.gif" alt="">
        </div>
        <div class="cloud cloud01" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page1S_top,movingDelay3:true}"></div>
        <div class="cloud cloud02" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page1S_top,movingDelay4:true}"></div>
        <div class="music" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page1S_top}"></div>
        <div class="arrowDown" v-if="desktopDisplayPassMainVal"></div>

        <div class="page1-mobile-bg" v-if="mobileDisplayPassMainVal" >
            <img src="~index_mainPic_mobile.png" alt="">
        </div>
        <div class="page2-mobile-bg" v-if="mobileDisplayPassMainVal" >
            <img src="~index_mainDate_mobile.png" alt="">
        </div>

        <div class="cloud_mobile" v-if="mobileDisplayPassMainVal"><img src="~page1_cloud_mobile.png" alt="" /></div>
        <div class="arrowDownMobile" v-if="mobileDisplayPassMainVal"></div>


    </div>
</template>

<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_scrollAnimation.scss'; 
    .picfx{
        width: 100%;
        min-height: 950px;
        // background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
    .picfloat{
        position: absolute;
        top:0;
        left: 0;
    }

    #page1{
        width: 100%;
        height: 950px;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
        }
        .page1-bg{ background-image: url("~index_mainPic_desktop.png"); z-index: 1;}
        .page2-bg{ background-image: url("~index_mainDate_desktop.png"); z-index: 1;}
        .page3-bg{ background-image: url("~index_mainTitle_desktop.png"); z-index: 1;}
        .page4-bg{ background-image: url("~index_mainRope_desktop.png"); z-index: 0;}
        .bg-people{
            width: 1024px;
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -512px;
            z-index: 1;
        }

        .page1-mobile-bg{
            margin-top: 70px;
            font-size: 0;
            >img{
                max-width: 100%;
            }
        }

        .page2-mobile-bg{
            position: absolute;
            top: -50px;
            right: 20px;
            @include SCREEN_736 {
                >img{
                    max-width: 90px;
                    height: auto;
                }
            }
            @include SCREEN_374 {
                >img{
                    max-width: 50px;
                    height: auto;
                }
            }
        }

        .cloud_mobile{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            transform-origin: center center;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-name: changeCloudMobile;
            >img{
                font-size: 0;
                max-width: 100%;
            }
        }
        .arrowDownMobile{
            width: 100%;
            height: 15px;
            position: absolute;
            bottom: -15px;
            left: 0;
            background-size: contain;
            background-position: 50% 0%;
            background-repeat: no-repeat;
            margin: 0 auto;
            background-image: url("~array_down_mobile.png");

            transform-origin: center center;
            animation-duration: 0.8s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-name: arrowDownMobile
        }
    }

    .music{
        width: 100%;
        height: 950px;
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        margin: 0 auto;
        background-image: url("~page1_cloud.gif");
    }

    .arrowDown{
        width: 100%;
        height: 34px;
        position: absolute;
        bottom: 10px;
        left: 0;
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        margin: 0 auto;
        background-image: url("~array_down.png");

        transform-origin: center center;
        animation-duration: 0.8s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-name: arrowDown;
    }
    @keyframes arrowDown{
        from {
            transform: translateY(0px);
        }
        to{
            transform: translateY(-15px);
        }
    }
    @keyframes arrowDownMobile{
        from {
            transform: translateY(0px);
        }
        to{
            transform: translateY(-5px);
        }
    }

    .cloud{
        height: 950px;
    }
    .cloud01{
        background-image: url("~page1_cloud1.png");
    }
    .cloud02{
        background-image: url("~page1_cloud2.png");
    }
    
</style>
