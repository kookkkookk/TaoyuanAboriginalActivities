<script>
import awakening1 from "awakening1";
import awakening2 from "awakening2";
import awakening3 from "awakening3";
import awakening4 from "awakening4";
export default {
    components:{
        awakening1,
        awakening2,
        awakening3,
        awakening4,
    },
    props:["mainScrollTop"],
    data(){
        return {
            screenWidth: null,
            isDesktopDisplay: true,
            isMobileDisplay: false,
            isIndexClose:true,
            isOtherOpen:false,

            titleSwitch:false,
        };
    },
    computed: {

    },
    methods:{
        handleResize(e){
            this.screenWidth = document.body.clientWidth;
            if(this.screenWidth < 1024){
                this.isDesktopDisplay = false;
                this.isMobileDisplay = true;
            }else{
                this.isDesktopDisplay = true;
                this.isMobileDisplay = false;
            }
        },
        // toCompScrollTop(val){
        //     if(val > window.innerHeight){
        //         this.isTopBtn = true;
        //     }else if(val < window.innerHeight){
        //         this.isTopBtn = false;
        //     }

        //     if(val > this.allHeight-450){
        //         this.bottomCss = true
        //     }else{
        //         this.bottomCss = false
        //     }
        // }
        backFn(routerUrl){
            this.$router.push(routerUrl);
            this.$emit("isHideIndex",this.isIndexClose);
            this.$emit("isShowOther",this.isOtherOpen);
        },
        isHideIndex(val){
            this.$emit("isHideIndex",val);
        },
        isShowOther(val){
            this.$emit("isShowOther",val);
        }
    },
    watch:{
        // mainScrollTop(val){
        //     this.toCompScrollTop(val);
        // }
    },
    created(){
        
    },
    mounted(){ 
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        setTimeout(()=>{
            this.titleSwitch = true;
        },500);

        
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    }
};
</script>


<template>
    <div id="awakeningPage">
        <div :class="{'awakeningPage1 picfx picfloat':isDesktopDisplay,'awakeningPage1_mobille':isMobileDisplay}">
            <img src="~awakening/awakening_mobile_top.png" alt="" v-if="isMobileDisplay" />
            <div class="backBtnGroup">
                <div class="backBtn" @click="backFn('/index')">
                    <a href="javascript:;"><img src="~newpolicy/backBtn.png" alt="" /></a>
                </div>
            </div>
            <div class="mainTitle" v-if="isDesktopDisplay" :class="{movingOpacity:true,on:titleSwitch,movingDelay1:true}"></div>

            <div class="cloud cloud01" v-if="isDesktopDisplay" :class="{movingOpacity:true,on:titleSwitch,movingDelay2:true}"></div>
            <div class="cloud_mobile" v-if="isMobileDisplay"><img src="~awakening/awakening_mobile_top_cloud.png" alt="" /></div>
        </div>

        <div class="menuGroup">
            <div class="menuList"><!--
                --><div class="menuBlock"><!--
                    --><div class="menu menu1">
                            <!-- <a href="javascript:;">策展概念</a> -->
                            <router-link :to='"/awakening/awakening1"'>策展概念</router-link>
                       </div><!--
                    --><div class="menu menu2">
                            <!-- <a href="javascript:;">臺灣原住民族權利運動紀實</a> -->
                            <router-link :to='"/awakening/awakening2"'>臺灣原住民族權利運動</router-link>
                        </div><!--
                --></div><!--
                --><div class="menuBlock"><!--
                    --><div class="menu menu3">
                            <!-- <a href="javascript:;">母體的意識</a> -->
                            <router-link :to='"/awakening/awakening3"'>母體的意識</router-link>
                        </div><!--
                    --><div class="menu menu4">
                            <!-- <a href="javascript:;">原鄉的赫茲</a> -->
                            <router-link :to='"/awakening/awakening4"'>原鄉的赫茲</router-link>
                        </div><!--
                --></div>
            </div>
        </div>


        <transition mode='out-in'>
            <router-view 
                @isHideIndexChird="isHideIndex"
                @isShowOtherChird="isShowOther"
            ></router-view>
        </transition>

    </div>
</template>
<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_scrollAnimation.scss';
    @import '../../css/scss/_animate.min.scss';
    .v-enter-active,
    .v-leave-active{
        transition: opacity .2s;
    }
    .v-enter,
    .v-leave-active{
        opacity:0;
    }
    .picfx{
        width: 100%;
        // min-height: 728px;
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

    #awakeningPage{
        width: 100%;
        height: 1793px;
        // overflow: hidden;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
            overflow: hidden;
        }
        .awakeningPage1{ background-image: url("~awakening/awakening_desktop_top.png"); z-index: 2; height: 593px;}

        .awakeningPage1_mobille{
            font-size: 0;
            position: relative;
            >img{
                max-width: 100%;
            }
        }

        .mainTitle{
            width: 100%;
            height: 593px;
            position: absolute;
            top: 0;
            left:0;
            pointer-events: none;
            background-image: url("~awakening/awakening_desktop_top_title.png");
            background-repeat: no-repeat;
            background-position: 50% 0%;
            background-size: contain;
        }
        .mainTitle{
            width: 100%;
            height: 593px;
            position: absolute;
            top: 0;
            left:0;
            pointer-events: none;
            background-image: url("~awakening/awakening_desktop_top_title.png");
            background-repeat: no-repeat;
            background-position: 50% 0%;
            background-size: contain;
        }

        .menuGroup{
            width: 100%;
            margin: 0 auto;
            position: absolute;
            top: 593px;
            left: 0;
            font-size: 0;
            @include SCREEN_1024 {
                height: auto;
                position: static;
            }
            
            .menuList{
                width: 100%;
                overflow: hidden;
                text-align: center;
                .menuBlock{
                    width: auto;
                    display: inline-block;
                    .menu{
                        display: inline-block;
                        >a{
                            display: block;
                            width: 240px;
                            height: 100px;
                            color: #fff;
                            font-size: 26px;
                            padding: 0 40px;
                            display: table-cell;
                            text-align: center;
                            vertical-align: middle;
                            @include SCREEN_1024 {
                                width: 170px;
                                height: 80px;
                                padding: 0 20px;
                                font-size: 20px;
                            }
                            @include SCREEN_736 {
                                width: 170px;
                                height: 60px;
                                padding: 0 30px;
                                font-size: 16px;
                            }
                            @include SCREEN_374 {
                                width: 150px;
                                height: 50px;
                                padding: 0 20px;
                                font-size: 14px;
                            }
                        }
                    }
                    .menu1{ background-color: #d16363; letter-spacing: 0.3em; }
                    .menu2{ background-color: #946b3e; }
                    .menu3{ background-color: #ffffff; >a {color: #393939;} }
                    .menu4{ background-color: #333333; }
                }
            }
        }
        .contentGroup{
            width: 100%;
            height: 1100px;
            position: absolute;
            top: 693px;
            left: 0;
            background-color: #d16363;
            @include SCREEN_1024 {
                position: static;
                height: auto;
                padding-bottom: 100px;
            }
            .people{
                width: 130px;
                height: auto;
                margin: 0 auto;
                padding-top: 35px;
                @include SCREEN_1024 {
                    width: 90px;
                    padding-top: 15px;
                }
                >img{
                    max-width: 100%;
                }
            }
            >h1{
                display: block;
                width: 100%;
                text-align: center;
                font-size: 36px;
                color: #e5cccc;
                // margin: 0 auto;
                position: absolute;
                top: 125px;
                left: 0;
                @include SCREEN_1024 {
                    font-size: 30px;
                    position: static;
                    margin-top: 20px;
                }
                @include SCREEN_736 {
                    font-size: 24px;
                    margin-top: 15px;
                }
            }
            >p{
                display: block;
                width: 700px;
                font-size: 20px;
                color: #ededed;
                // margin: 0 auto;
                text-align: justify;
                position: absolute;
                top: 205px;
                left: 50%;
                margin-left: -350px;
                @include SCREEN_1024 {
                    width: 90%;
                    font-size: 16px;
                    position: static;
                    margin-left: 0;
                    margin: 0 auto;
                    margin-top: 20px;
                }
                @include SCREEN_736 {
                    font-size: 14px;
                    margin-top: 15px;
                }
            }
            .picGroup{
                width: 1210px;
                height: 400px;
                position: absolute;
                top: 520px;
                left: 50%;
                margin-left: -640px;
                z-index: 1;
                overflow: hidden;
                @include SCREEN_1024 {
                    width: 95%;
                    height: auto;
                    position: relative;
                    top: 0;
                    left: 0;
                    // margin-left: 0;
                    margin: 0 auto;
                    margin-top: 50px;
                }
                @include SCREEN_736 {
                    margin-top: 25px;
                }
                .pic{
                    width: 600px;
                    float: left;
                    &:nth-child(1){
                        margin-right: 10px;
                        @include SCREEN_1024 {
                            margin-right: 1%;
                        }
                        @include SCREEN_1024 {
                            margin-right: 0;
                        }
                    }
                    @include SCREEN_1024 {
                        width: 49.5%;
                        font-size: 0;
                    }
                    @include SCREEN_736 {
                        float: none;
                        width: 100%;
                        margin-bottom: 10px;
                    }
                    >img{
                        font-size: 0;
                        max-width: 100%;
                    }
                }
            }
        }
        .yelloColorBg{
            width: 100%;
            height: 340px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #e6ddcd;
            z-index: 0; 
        } 
    }


    .backBtnGroup{
        width: 1024px;
        height: 363px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -512px;
        @include SCREEN_1024 {
            width: 100%;
            max-height: 100%;
            left: 0;
            margin-left: 0;
        }
        .backBtn{
            position: absolute;
            top: 50px;
            right: 0;
            @include SCREEN_1024 {
                top: 15px;
                right: 15px;
            }
            >a{
                display: block;
                width: 112px;
                height: auto;
                @include SCREEN_736 {
                    width: 80px;
                }
                >img{
                    max-width: 100%;
                }
            }
        }
    }
    .backBtnGroupBottom{
        height: 100%;
        .backBtn{
            top: initial;
            bottom: 50px;
        }
    }

    .cloud01{
        background-image: url("~awakening/awakening_desktop_top_cloud.png");
        height: 593px;
    }
</style>
