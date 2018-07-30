<script>
export default {
    props:["desktopDisplayPassMainVal","mobileDisplayPassMainVal","toComponentScrollTop"],
    data(){
        return {
            page3:99999,
            page3S_top:false,
            isIndexHTML:false,
            isIndexOther:true

        };
    },
    computed: {

    },
    methods:{
        toCompScrollTop(val){
            //console.log("toComponentScrollTop:",val);
            if(val > this.page3){
                this.page3S_top = true;
            }
        },
        gotoAndRouter(routerUrl){
            this.$router.push(routerUrl);
            
            this.$emit("isIndexHTML",this.isIndexHTML);
            this.$emit("isIndexOther",this.isIndexOther);
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
        setTimeout(()=>{
            this.page3 = document.querySelector("#page3").offsetTop;
            //console.log("page3:",this.page3)
        },500)
    }
};
</script>

<template>
    <div id='page3'>
        <div :class="{'page1-bg picfx picfloat':desktopDisplayPassMainVal,'page1-mobile-bg':mobileDisplayPassMainVal}">
            <img src="~index_Taoyuan_mobile.png" alt="" v-if="mobileDisplayPassMainVal" />
            <div class="btnGroup">
                <ul>
                    <li :class="{movingVertical:true,on:page3S_top,movingDelay1:true}">
                        <a @click="gotoAndRouter('/survey')" href="javascript:;"><img src="~page3_btn1.gif" alt="" /><p>桃原概況</p></a>
                    </li>
                    <li :class="{movingVertical:true,on:page3S_top,movingDelay2:true}">
                        <a @click="gotoAndRouter('/newpolicy')" href="javascript:;"><img src="~page3_btn2.gif" alt="" /><p>桃原新政</p></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="cloud cloud01" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page3S_top,movingDelay3:true}"></div>
        <div class="cloud cloud02" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page3S_top,movingDelay4:true}"></div>
        <div class="music" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page3S_top}"></div>
        <div class="dog" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page3S_top}"></div>

        <div class="cloud_mobile" v-if="mobileDisplayPassMainVal"><img src="~page3_cloud_mobile.png" alt="" /></div>


    </div>
</template>

<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_scrollAnimation.scss';
    .btnGroup{
        width: 100%;
        position: absolute;
        top: 180px;
        left: 0;
        @include SCREEN_736 {
            top: 0;
            text-align: center;
        }
        >ul{
            text-align: center;
            @include SCREEN_736 {
                display: inline-block;
                margin-left: 110px;
            }
            
            >li{
                display: inline-block;
                @include SCREEN_736 {
                    display: block;
                }
                &:nth-child(1){
                    margin-left: 230px;
                    @include SCREEN_736 {
                        margin-left: 0;
                        margin-bottom: 20px;
                    }
                    @include SCREEN_374 {
                        margin-bottom: 10px;
                    }
                    > a{
                        background-color: #b86c6c;
                        margin-right: 25px;
                    }
                }
                &:nth-child(2){
                    > a{
                        background-color: #649095;
                    }
                }
                >a{
                    width: 255px;
                    height: 255px;
                    display: block;
                    border-radius: 127.5px;
                    position: relative;
                    transition: all 0.3s;
                    transform-origin: center;
                    @include SCREEN_1024 {
                        width: 200px;
                        height: 200px;
                    }
                    @include SCREEN_736 {
                        width: 100px;
                        height: 100px;
                    }
                    @include SCREEN_374 {
                        width: 80px;
                        height: 80px;
                    }
                    &:hover{
                        transform: scale(1.05);
                    }
                    >img{
                        max-width: 100%;
                    }
                    >p{
                        color: #fff;
                        font-size: 36px;
                        bottom: 45px;
                        position: absolute;
                        left: 0;
                        display: block;
                        width: 100%;
                        text-align: center;
                        @include SCREEN_1024 {
                            font-size: 28px;
                        }
                        @include SCREEN_736 {
                            font-size: 16px;
                            bottom: 15px;
                        }
                        @include SCREEN_374 {
                            font-size: 14px;
                        }
                    }

                }

            }
        }
    }
    .picfx{
        width: 100%;
        min-height: 728px;
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

    #page3{
        width: 100%;
        height: 746px;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
        }
        .page1-bg{ background-image: url("~index_Taoyuan_desktop.png"); z-index: 2;}

        .page1-mobile-bg{
            position: relative;
            z-index: 2;
            font-size: 0;
            >img{
                max-width: 100%;
            }
        }

        .page2-mobile-bg{
            position: absolute;
            top: 20px;
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
    }

    .music{
        width: 100%;
        height: 746px;
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        margin: 0 auto;
        background-image: url("~page3_cloud.gif");
    }
    .dog{
        width: 100%;
        height: 746px;
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        margin: 0 auto;
        background-image: url("~page3_dog.gif");
    }
    .cloud{
        height: 746px;
    }
    .cloud01{
        background-image: url("~page3_cloud1.png");
    }
    .cloud02{
        background-image: url("~page3_cloud2.png");
    }
    
</style>
