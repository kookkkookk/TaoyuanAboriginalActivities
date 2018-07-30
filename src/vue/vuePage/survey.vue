<script>
export default {
    props:["mainScrollTop"],
    data(){
        return {
            screenWidth: null,
            isDesktopDisplay: true,
            isMobileDisplay: false,
            isTopBtn: false,
            allHeight: null,
            bottomCss: false,
            isIndexClose:true,
            isOtherOpen:false,

            contentSwitch:false,

            scrollObj1:null,
            scrollObj1Switch:false,
            scrollObj2:99999,
            scrollObj2Switch:false,
            scrollObj3:99999,
            scrollObj3Switch:false,
            scrollObj4:99999,
            scrollObj4Switch:false,
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
        toCompScrollTop(val){
            //console.log("toCompScrollTop:", Math.round(val));
            if(val > window.innerHeight){
                this.isTopBtn = true;
            }else if(val < window.innerHeight){
                this.isTopBtn = false;
            }

            if(val > this.allHeight-250){
                this.bottomCss = true
            }else{
                this.bottomCss = false
            }

            //動畫出現
            if(val > this.scrollObj1){
                this.scrollObj1Switch = true;
            }
            if(val > this.scrollObj2){
                this.scrollObj2Switch = true;
            }
            if(val > this.scrollObj3){
                this.scrollObj3Switch = true;
            }
            if(val > this.scrollObj4){
                this.scrollObj4Switch = true;
            }
        },
        toTopFn(){
            let appBody = document.getElementById("app");
            TweenMax.to(appBody, 2, {
                scrollTo:{
                    y: 0,
                }, 
                ease:Power3.easeOut
            });
            return false
        },
        backFn(routerUrl){
            this.$router.push(routerUrl);
            this.$emit("isHideIndex",this.isIndexClose);
            this.$emit("isShowOther",this.isOtherOpen);
        },
    },
    watch:{
        mainScrollTop(val){
            this.toCompScrollTop(val);
        }
    },
    created(){

    },
    mounted(){ 
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        //document.getElementById("app").scrollTop = 0;

        setTimeout(()=>{
            this.contentSwitch = true;
        },500);

    },
    updated(){  
        this.allHeight = document.querySelector("#app #newpolicyPage").offsetHeight;
        // console.log("this.allHeight:",this.allHeight)  

        let j_top1 = document.querySelector("#app #newpolicyPage .j_top1").offsetHeight;
        let j_top2 = document.querySelector("#app #newpolicyPage .j_top2").offsetHeight;
        let j_topRange = j_top1+j_top2;

        this.scrollObj1 = j_topRange+document.querySelector("#app #newpolicyPage .chart1").offsetTop;
        this.scrollObj2 = j_topRange+document.querySelector("#app #newpolicyPage .chart2").offsetTop;
        this.scrollObj3 = j_topRange+document.querySelector("#app #newpolicyPage .chart3").offsetTop;
        this.scrollObj4 = j_topRange+document.querySelector("#app #newpolicyPage .chart4").offsetTop;

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    }
};
</script>


<template>
    <div id="newpolicyPage" ref="newpolicy">
        <div class="j_top1" :class="{'newpolicy1 picfx picfloat':isDesktopDisplay,'newpolicy1_mobille':isMobileDisplay}">
            <img src="~survey/top_bg_mobile.png" alt="" v-if="isMobileDisplay" />

            <div class="title">
                <img src="~newpolicy/title.png" alt="" />
            </div>
            <div class="titlePeople">
                <img src="~page3_btn1.gif" alt="" />
                <h1>桃原概況</h1>
            </div>

            <div class="backBtnGroup">
                <div class="backBtn" @click="backFn('/index')">
                    <a href="javascript:;"><img src="~newpolicy/backBtn.png" alt="" /></a>
                </div>
            </div>
            <div class="cloud cloud01" v-if="isDesktopDisplay" :class="{movingOpacity:true,on:contentSwitch,movingDelay1:true}"></div>
            <div class="cloud_mobile" v-if="isMobileDisplay"><img src="~survey/top_bg_cloud_mobile.png" alt="" /></div>
        </div>

        <div class="j_top2" :class="{'newpolicy2 picfx picfloat':isDesktopDisplay,'newpolicy1_mobille newpolicy2_mobille':isMobileDisplay}">
            <!-- <img src="~newpolicy/top2_bg_mobile.png" alt="" v-if="isMobileDisplay" /> -->
            <p class="contentText movingDownFirst" :class="{on:contentSwitch}">原住民族文化是世界給台灣的禮物，然而在都市化及當代發展的脈絡下，許多原住民族人朋友離開原居部落，移居到都會地區。許多族人朋友遷徙到桃園做為新的深根地，截至106年7月止，桃園市原住民族人口達7萬445人，是目前原住民族最多的直轄市，除了原有的復興區原鄉外，也是原住民族人遷徙到都會地區的首選。多元的族群及大量的移居人口，也使得桃園市的城市氛圍與其他地區不同。</p>
            <div class="cloud cloud02" v-if="isDesktopDisplay" :class="{movingOpacity:true,on:contentSwitch,movingDelay2:true}"></div>
        </div>

        <div :class="{'newpolicy3':isDesktopDisplay,'newpolicy1_mobille':isMobileDisplay}">
            <div class="chartGroup">

                
                <div class="chart1 chart" :class="{movingVertical:true,on:scrollObj1Switch}">
                    <div class="chart1Title chartTitle">
                        <h1>桃園原住民族人口數</h1>
                        <h2>資料標準日：106年3月底</h2>
                    </div>
                    <div class="chart1Content chartContent">
                        <img src="~survey/chart01-1.png" alt="" v-if="isMobileDisplay" />
                    </div>
                </div>
            
                <div class="chart2 chart" :class="{movingVertical:true,on:scrollObj2Switch}">
                    <div class="chart2Title chartTitle">
                        <h1>桃園各區原住民族分布</h1>
                        <h2>資料標準日：106年06月01日</h2>
                    </div>
                    <div class="chart2Content chartContent">
                        <img src="~survey/chart02-1.png" alt="" v-if="isMobileDisplay" />
                    </div>
                </div>
                
                <div class="chart3 chart" :class="{movingVertical:true,on:scrollObj3Switch}">
                    <div class="chart3Title chartTitle">
                        <h1>各族群人口數</h1>
                        <h2>資料標準日：106年06月30日</h2>
                    </div>
                    <div class="chart3Content chartContent">
                        <img src="~survey/chart03-1_mobile.png" alt="" v-if="isMobileDisplay" />
                        <img style="margin-top: 30px;" src="~survey/chart03-3_mobile.png" alt="" v-if="isMobileDisplay" />
                    </div>
                </div>

                <div class="chart4 chart" :class="{movingVertical:true,on:scrollObj4Switch}">
                    <div class="chart4Title chartTitle">
                        <h1>回復原住民族傳統姓名人口</h1>
                        <h2>資料標準日：106年06月30日</h2>
                    </div>
                    <div class="chart4Content chartContent">
                        <img src="~survey/chart04-1.png" alt="" v-if="isMobileDisplay" />
                    </div>
                </div>
            </div>
        </div>

        <div :class="{'newpolicy4 picfx picfloat':isDesktopDisplay,'newpolicy1_mobille':isMobileDisplay}">
            <img src="~newpolicy/buttom_bg_mobile.png" alt="" v-if="isMobileDisplay" />
            <div class="backBtnGroup backBtnGroupBottom">
                <div class="backBtn" @click="backFn('/index')">
                    <a href="javascript:;"><img src="~newpolicy/backBtn.png" alt="" /></a>
                </div>
            </div>
            <div class="cloud cloud03 cloudType1" v-if="isDesktopDisplay"></div>
            <div class="cloud_mobile" v-if="isMobileDisplay"><img src="~survey/buttom_bg_mobile_cloud.png" alt="" /></div>
        </div>

        <div class="topGroup" @click="toTopFn()">
            <transition
                enter-active-class="animated bounceIn"
                leave-active-class="animated zoomOut"
            >
                <div :class="{topBtn:true,on:bottomCss}" v-show="isTopBtn">
                    <a href="javascript:;"><img src="~index_footer_topBtn_desktop.png" alt="" /></a>
                </div>
            </transition>
        </div>
    </div>
</template>
<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_scrollAnimation.scss';
    @import '../../css/scss/_animate.min.scss';

    .chartGroup{
        width: 100%;
        height: auto;
        margin-top: 100px;
        @include SCREEN_1024 {
            margin-top: 0;
        }
    }
    .chart{
        width: 100%;
        height: auto;
        margin: 0 auto;
        margin-bottom: 150px;
        @include SCREEN_1024 {
            margin-bottom: 100px;
        }
        @include SCREEN_736 {
            margin-bottom: 50px;
        }
        .chartTitle{
            >h1{
                font-size: 35px;
                color: #1f1f1f;
                text-align: center;
                font-weight: bold;
                margin-bottom: 25px;
                @include SCREEN_1024 {
                    font-size: 28px;
                    margin-bottom: 12px;
                }
                @include SCREEN_736 {
                    font-size: 20px;
                    margin-bottom: 10px;
                }
            }
            >h2{
                font-size: 28px;
                color: #685c54;
                text-align: center;
                @include SCREEN_1024 {
                    font-size: 22px;
                }
                @include SCREEN_736 {
                    font-size: 16px;
                    margin-bottom: 10px;
                }
            }
        }
        .chartContent{
            background-repeat: no-repeat;
            background-position: 50% 0%;
            margin: 0 auto;
            margin-top: 20px;
            font-size: 0;
            >img{
                max-width: 97%;
                margin-left: 1.5%;
            }
        }

        .chart1Content{
            background-image: url("~survey/chart01-1.png");
            height: 594px;
            @include SCREEN_1024 { background-image: url(""); height: auto; }
        }
        .chart2Content{
            background-image: url("~survey/chart02-1.png");
            height: 840px;
            @include SCREEN_1024 { background-image: url(""); height: auto; }
        }
        .chart3Content{
            background-image: url("~survey/chart03-1.png");
            height: 1213px;
            @include SCREEN_1024 { background-image: url(""); height: auto; }
        }
        .chart4Content{
            background-image: url("~survey/chart04-1.png");
            height: 826px;
            @include SCREEN_1024 { background-image: url(""); height: auto; }
        }
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
    #newpolicyPage{
        width: 100%;
        height: 5387px;
        // overflow: hidden;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
            overflow: hidden;
        }
        .newpolicy1{ background-image: url("~survey/top_bg.png"); z-index: 2; height: 363px;}
        .newpolicy2{
            background-image: url("~survey/top2_bg.png");
            z-index: 2;
            height: 240px;
            top: 363px;
        }
        .newpolicy3{
            width: 100%;
            height: auto;
            position: absolute;
            top: 603px;
            left: 0;
        }
        .newpolicy4{
            background-image: url("~newpolicy/buttom_bg.png");
            height: 170px;
            top: 5217px;
        }

        .newpolicy1_mobille{
            font-size: 0;
            position: relative;
            >img{
                max-width: 100%;
            }
        }
        .newpolicy2_mobille{
            min-height: 240px;
            background-image: url("~newpolicy/top2_bg_mobile.png");
            background-position: 50% 0%;
            background-repeat: no-repeat;
            background-size: contain;
        }

        .newpolicy3_content{
            width: 1024px;
            height: auto;
            margin: 0 auto;
            // display: flex;
            overflow: hidden;
            @include SCREEN_1024 {
                width: 620px;
            }
            @include SCREEN_736 {
                width: 100%;
            }
        }

        .contentText{
            width: 730px;
            color: #685c54;
            font-size: 20px;
            text-align: justify;
            line-height: 30px;
            margin: 0 auto;
            margin-top: 30px;
            text-indent: 40px;
            @include SCREEN_1024 {
                // position: absolute;
                // top: 35px;
                // left: 50%;
                // margin-left: -40%;
                width: 80%;
                font-size: 16px;
                line-height: 24px;
                margin-top: 0;
                padding-top: 30px;
                text-indent: 32px;
            }
            @include SCREEN_736 {
                font-size: 12px;
                line-height: 18px;
                text-indent: 24px;
            }
        }

        .title{
            width: 237px;
            height: auto;
            margin: 0 auto;
            margin-top: 30px;
            >img{
                max-width: 100%;
            }
            @include SCREEN_1024 {
                width: 180px;
                position: absolute;
                top: 20px;
                left: 50%;
                margin-left: -90px;
                margin-top: 0;
            }
            @include SCREEN_736 {
                width: 100px;
                top: 10px;
                margin-left: -50px;
            }
        }
        .titlePeople{
            width: 255px;
            height: auto;
            position: absolute;
            top: 70px;
            left: 50%;
            margin-left: -127.5px;
            @include SCREEN_1024 {
                width: 220px;
                margin-left: -110px;
                top: 50px;
            }
            @include SCREEN_736 {
                width: 140px;
                margin-left: -70px;
                top: 20px;
            }
            >img{
                max-width: 100%;
            }
            >h1{
                font-size: 40px;
                color: #594132;
                position: absolute;
                top: 150px;
                left: 0;
                right: 0;
                text-align: center;
                @include SCREEN_1024 {
                    font-size: 32px;
                    top: 135px;
                }
                @include SCREEN_736 {
                    font-size: 20px;
                    top: 110px;
                }
                @include SCREEN_374 {
                    font-size: 20px;
                    top: 100px;
                }
            }
            
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
        height: 170px;
    }

    .topGroup{
        width: 1024px;
        height: 100%;
        position: fixed;
        top: 0;
        left: 50%;
        margin-left: -512px;
        pointer-events: none;
        z-index: 2;
        @include SCREEN_1024 {
            width: 100%;
            max-height: 100%;
            left: 0;
            margin-left: 0;
        }
        .topBtn{
            transition:bottom .3s;
            width: 60px;
            height: auto;
            pointer-events: auto;
            position: absolute;
            bottom: 20px;
            right: 0;
            &.on{
                bottom: 130px;
                @include SCREEN_1024 {
                   bottom: 50px; 
                }
            }
            @include SCREEN_1024 {
                width: 40px;
                bottom: 10px;
                right: 10px;
            }
            img{
                max-width: 100%;
            }
        }
    }

    .cloud01{
        background-image: url("~survey/top_bg_cloud.png");
        height: 363px;
    }
    .cloud02{
        background-image: url("~survey/top_bg_cloud2.png");
        height: 240px;
    }
    .cloud03{
        background-image: url("~survey/buttom_bg_cloud.png");
        height: 170px;
    }
</style>
