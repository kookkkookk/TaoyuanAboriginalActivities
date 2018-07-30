<script>
export default {
    props:["desktopDisplayPassMainVal","mobileDisplayPassMainVal"],
    data(){
        return {

        };
    },
    computed: {

    },
    methods:{
        toTopFn(){
            let appBody = document.getElementById("app");
            TweenMax.to(appBody, 2, {
                scrollTo:{
                    y: 0,
                }, 
                ease:Power3.easeOut
            });
            return false
        }
    },
    watch:{
        
    },
    created(){

    },
    mounted(){ 

    }
};
</script>

<template>
    <footer>
        <div :class="{'page1-bg picfx picfloat':desktopDisplayPassMainVal,'page1-mobile-bg':mobileDisplayPassMainVal}">
            <img src="~index_footer_mobile.png" alt="" v-if="mobileDisplayPassMainVal" />
            <div class="topBtn" @click="toTopFn()"></div>
            <div class="unitGroup">
                <ul>
                    <li><img src="~index_footer_text1_desktop.png" alt="" /></li>
                    <li><img src="~index_footer_text2_desktop.png" alt="" /></li>
                    <li><a href="https://zh-tw.facebook.com/LongFunMarketing/" target="_blank"><img src="~index_footer_text3_desktop.png" alt="" /></a></li>
                </ul>
            </div>
            <div class="designtext" v-if="mobileDisplayPassMainVal"><img src="~index_footer_text4_desktop.png" alt="" /></div>
        </div>
    </footer>
</template>

<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    .picfx{
        width: 100%;
        min-height: 188px;
        // background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        // background-attachment: fixed;
        margin: 0 auto;
    }
    .picfloat{
        position: absolute;
        top:0;
        left: 0;
    }

    footer{
        width: 100%;
        height: 188px;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
        }
        .page1-bg{ background-image: url("~index_footer_desktop.png"); z-index: 1; min-height: 188;}

        .page1-mobile-bg{
            font-size: 0;
            position: relative;
            >img{
                max-width: 100%;
            }
        }
        .topBtn{
            width: 77px;
            height: 77px;
            background-image: url("~index_footer_topBtn_desktop.png");
            background-position: 50% 0%;
            background-size: contain;
            background-repeat: no-repeat;
            margin: 0 auto;
            cursor: pointer;
            transition: all .3s;
            transform-origin: center;
            &:hover{
                transform: scale(1.1);
            }
            @include SCREEN_1024 {
                width: 66px;
                height: 66px;
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -33px;
            }
            @include SCREEN_736 {
                width: 40px;
                height: 40px;
                margin-left: -20px;
            }
        }
        .unitGroup{
            text-align: center;
            @include SCREEN_1024 {
                background-color: #fff;
            }
            >ul{
                margin-top: 18px;
                overflow: hidden;
                display: inline-block;
                @include SCREEN_1024 {
                    margin-top: 0;
                }
                @include SCREEN_736 {
                    margin-top: 10px;
                }
                >li{
                    float: left;
                    @include SCREEN_1024 {
                        display: inline-block;
                        float: none;
                        margin-bottom: 10px;
                    }
                    @include SCREEN_736 {
                        margin: 0 10px;
                        width: 200px;
                        height: auto;
                    }
                    >a{
                        display: block;
                    }
                    img{
                        font-size: 0;
                        max-width: 100%;
                    }
                }
            }
        }
        .designtext{
            background-color: #fff;
            margin: 0 auto;
            padding-bottom: 40px;
            @include SCREEN_736 {
                padding-bottom: 20px;
            }
            >img{
                font-size: 0;
                margin: 0 auto;
                display: block;
                width: 55px;
                height: auto;
                @include SCREEN_736 {
                    width: 35px;
                }
            }
        }
    }
</style>