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
            scrollObj2:null,
            scrollObj2Switch:false,
            scrollObj3:99999,
            scrollObj3Switch:false,
            scrollObj4:99999,
            scrollObj4Switch:false,
            scrollObj5:99999,
            scrollObj5Switch:false,
            scrollObj6:99999,
            scrollObj6Switch:false,
            scrollObj7:99999,
            scrollObj7Switch:false,
            scrollObj8:99999,
            scrollObj8Switch:false,
            scrollObj9:99999,
            scrollObj9Switch:false,
            scrollObj10:99999,
            scrollObj10Switch:false,
            scrollObj11:99999,
            scrollObj11Switch:false,
            scrollObj12:99999,
            scrollObj12Switch:false,
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
            if(val > this.scrollObj5){
                this.scrollObj5Switch = true;
            }
            if(val > this.scrollObj6){
                this.scrollObj6Switch = true;
            }
            if(val > this.scrollObj7){
                this.scrollObj7Switch = true;
            }
            if(val > this.scrollObj8){
                this.scrollObj8Switch = true;
            }
            if(val > this.scrollObj9){
                this.scrollObj9Switch = true;
            }
            if(val > this.scrollObj10){
                this.scrollObj10Switch = true;
            }
            if(val > this.scrollObj11){
                this.scrollObj11Switch = true;
            }
            if(val > this.scrollObj12){
                this.scrollObj12Switch = true;
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

        this.scrollObj1 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup1").offsetTop;
        this.scrollObj2 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup2").offsetTop;
        this.scrollObj3 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup3").offsetTop;
        this.scrollObj4 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup4").offsetTop;
        this.scrollObj5 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup5").offsetTop;
        this.scrollObj6 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup6").offsetTop;
        this.scrollObj7 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup7").offsetTop;
        this.scrollObj8 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup8").offsetTop;
        this.scrollObj9 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup9").offsetTop;
        this.scrollObj10 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup10").offsetTop;
        this.scrollObj11 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup11").offsetTop;
        this.scrollObj12 = j_topRange+document.querySelector("#app #newpolicyPage .roundGroup12").offsetTop;

        
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    }
};
</script>


<template>
    <div id="newpolicyPage">
        <div class="j_top1" :class="{'newpolicy1 picfx picfloat':isDesktopDisplay,'newpolicy1_mobille':isMobileDisplay}">
            <img src="~newpolicy/top_bg_mobile.png" alt="" v-if="isMobileDisplay" />

            <div class="title">
                <img src="~newpolicy/title.png" alt="" />
            </div>
            <div class="titlePeople">
                <img src="~page3_btn2.gif" alt="" />
                <h1>桃原新政</h1>
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
            <p class="contentText movingDownFirst" :class="{on:contentSwitch}">原住民族在臺灣歷史中，充滿了許多國家侵害及權益受損的血淚史，不僅使族人遠離土地、文化流失，更因長期不公正的待遇而扭曲了原住民族人的發展權。</p>
            <p class="contentText movingDownFirst" :class="{on:contentSwitch}">為了完成轉型正義的未竟之業，落實原住民族權利運動的「正名、土地與自治」的核心訴求，桃園市政府推動許多政策，其中「桃原新政」是第一步，包含協助原住民族回復傳統姓名單一窗口設置，原住民族歲時祭儀舉辦，復振原住民族語言，維護原住民族土地權益、記錄歷史真相等政策，期許作原住民族人最強的後盾，讓桃園得以成為族人的新故鄉，族群文化得以傳承，族群的傳統能以新型態在桃園永續。</p>
            <div class="cloud cloud02" v-if="isDesktopDisplay" :class="{movingOpacity:true,on:contentSwitch,movingDelay2:true}"></div>
        </div>

        <div :class="{'newpolicy3':isDesktopDisplay,'newpolicy1_mobille':isMobileDisplay}">
            <div class="newpolicy3_content">


                <div class="roundGroup roundGroup1" :class="{movingVertical:true,on:scrollObj1Switch}">
                    <div class="round roundNnmber1">
                        <h2>名字</h2>
                    </div>
                    <h3>單一窗口正名</h3>
                    <p>正名權是原住民族權利重要訴求，桃園市設置「原住民族回復傳統姓名單一窗口」整合，免除規費，簡便行政程序，讓族人能大聲說出自己的名！</p>
                </div>

                <div class="roundGroup roundGroup2" :class="{movingVertical:true,on:scrollObj2Switch}">
                    <div class="round roundNnmber2">
                        <h2>傳承</h2>
                    </div>
                    <h3>歲時祭儀傳承</h3>
                    <p>舉辦「16族歲時祭儀活動」，讓傳統文化在都會扎根；提供「返鄉參加歲時祭儀交通補助」鼓勵族人回到原有部落參加祭典；舉辦「尋根之旅」使都會青少年對自我文化認知及覺醒。</p>
                </div>

                <div class="roundGroup roundGroup3" :class="{movingVertical:true,on:scrollObj3Switch}">
                    <div class="round roundNnmber3">
                        <h2>語言</h2>
                    </div>
                    <h3>族語課程</h3>
                    <p>落實原住民族教育法，開辦「原住民族課後族語班」，推動多元族語課程，提供不同語言，實現語言平權政策。</p>
                </div>

                <div class="roundGroup roundGroup4" :class="{movingVertical:true,on:scrollObj4Switch}">
                    <div class="round roundNnmber4">
                        <h2>保險</h2>
                    </div>
                    <h3>原住民族團體意外險</h3>
                    <p>提供微型保險，符合資格者，免保費，即可擁有理賠保障，做本市原住民族人生活的後盾。</p>
                </div>

                <div class="roundGroup roundGroup5" :class="{movingVertical:true,on:scrollObj5Switch}">
                    <div class="round roundNnmber5">
                        <h2>水源</h2>
                    </div>
                    <h3>簡易自來水系統</h3>
                    <p>於復興區設置41處簡易自來水系統，輔導成立管委會，辦理訓練及提供設備，強化並健全系統管理工作。</p>
                </div>

                <div class="roundGroup roundGroup6" :class="{movingVertical:true,on:scrollObj6Switch}">
                    <div class="round roundNnmber6">
                        <h2>土地</h2>
                    </div>
                    <h3>保留地登記及禁伐補償</h3>
                    <p>協助族人保留地權利回復，取得土地所有權，及訂定「桃園市政府原住民保留地禁伐補償實施要點」，使族人得到應有補償，實現土地正義。</p>
                </div>

                <div class="roundGroup roundGroup7" :class="{movingVertical:true,on:scrollObj7Switch}">
                    <div class="round roundNnmber7">
                        <h2>教育</h2>
                    </div>
                    <h3>幼兒及人才獎勵</h3>
                    <p>提供學齡前孩童「幼兒學前教育補助」，學童「清寒優秀原住民族子女獎助學金」及「特殊傑出人才獎勵」，提供完整的教育獎補助系統。</p>
                </div>

                <div class="roundGroup roundGroup8" :class="{movingVertical:true,on:scrollObj8Switch}">
                    <div class="round roundNnmber8">
                        <h2>居住</h2>
                    </div>
                    <h3>租屋及建購修繕補助</h3>
                    <p>提供「中低收入戶原住民族租屋補助」使族人不須擔心租屋，「建構….」完善居住環境。原鄉地區部落重建，並與本府社會住宅政策配合，落實居住正義。</p>
                </div>

                <div class="roundGroup roundGroup9" :class="{movingVertical:true,on:scrollObj9Switch}">
                    <div class="round roundNnmber9">
                        <h2>會所</h2>
                    </div>
                    <h3>一區一會所</h3>
                    <p>傳統文化裡「聚會所」為社群中心，為使散居各地的族人擁有專屬的活動場域，辦理語言、技藝及歲時祭儀等傳承，特地推動12區「一區一集會所」政策。</p>
                </div>

                <div class="roundGroup roundGroup10" :class="{movingVertical:true,on:scrollObj10Switch}">
                    <div class="round roundNnmber10">
                        <h2>產業</h2>
                    </div>
                    <h3>產業發展</h3>
                    <p>發展原住民族產業，扶植經濟事業拓展，推廣原鄉觀光旅遊，運用原住民族知識發展創意經濟，以文化底蘊提升經濟價值。</p>
                </div>

                <div class="roundGroup roundGroup11" :class="{movingVertical:true,on:scrollObj11Switch}">
                    <div class="round roundNnmber11">
                        <h2>參與</h2>
                    </div>
                    <h3>桃園市原住民族發展基金會</h3>
                    <p>規劃引進民間企業營運模式，透過公私跨域合作模式推動原住民族發展工作，更有效、更全面協助原住民族發展，成立桃園市原住民族發展基金會。</p>
                </div>

                <div class="roundGroup roundGroup12" :class="{movingVertical:true,on:scrollObj12Switch}">
                    <div class="round roundNnmber12">
                        <h2>通訊</h2>
                    </div>
                    <h3>設置防救災共構共站行動通訊平臺</h3>
                    <p>建構原住民族地區高涵蓋率通訊網絡，平時提供居民及遊客優質通信環境；災害發生時，保持對外聯繫、傳遞災情，提供災害應變中心即時救助訊息，保障人民生命及財產安全。</p>
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
        height: 2748px;
        // overflow: hidden;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
            overflow: hidden;
        }
        .newpolicy1{ background-image: url("~newpolicy/top_bg.png"); z-index: 2; height: 363px;}
        .newpolicy2{
            background-image: url("~newpolicy/top2_bg.png");
            z-index: 2;
            height: auto;
            top: 363px;
        }
        .newpolicy3{
            width: 100%;
            height: auto;
            position: absolute;
            top: 663px;
            left: 0;
        }
        .newpolicy4{
            background-image: url("~newpolicy/buttom_bg.png");
            height: 170px;
            top: 3243px;
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
            margin-top: 30px;
            // display: flex;
            overflow: hidden;
            @include SCREEN_1024 {
                width: 620px;
            }
            @include SCREEN_736 {
                width: 100%;
            }
            .roundGroup{
                width: 330px;
                // height: auto;
                height: 410px;
                margin: 0 90px;
                margin-bottom: 15px;
                // display: inline-block;
                float: left;
                @include SCREEN_1024 {
                    width: 250px;
                    height: 350px;
                    margin: 0 30px;
                }
                @include SCREEN_736 {
                    width: 200px;
                    height: 260px;
                    float: none;
                    margin: 0 auto;
                    margin-bottom: 5px;
                }
                .round{
                    width: 160px;
                    height: 160px;
                    border-radius: 80px;
                    background-color: #7f614f;
                    background-size: contain;
                    background-position: 50% 0%;
                    background-repeat: no-repeat;
                    position: relative;
                    margin: 0 auto;
                    @include SCREEN_1024 {
                        width: 100px;
                        height: 100px;
                    }
                    @include SCREEN_736 {
                        width: 75px;
                        height: 75px;
                    }
                    >h2{
                        font-size: 30px;
                        position: absolute;
                        bottom: 25px;
                        left: 0;
                        right: 0;
                        text-align: center;
                        color: #fff;
                        letter-spacing: 0.2em;
                        @include SCREEN_1024 {
                            font-size: 24px;
                            bottom: 10px;
                        }
                        @include SCREEN_736 {
                            font-size: 18px;
                            letter-spacing: 0.1em;
                        }
                    }

                }
                .roundNnmber1{ background-image: url("~newpolicy/icon01.png"); }
                .roundNnmber2{ background-image: url("~newpolicy/icon02.png"); }
                .roundNnmber3{ background-image: url("~newpolicy/icon03.png"); }
                .roundNnmber4{ background-image: url("~newpolicy/icon04.png"); }
                .roundNnmber5{ background-image: url("~newpolicy/icon05.png"); }
                .roundNnmber6{ background-image: url("~newpolicy/icon06.png"); }
                .roundNnmber7{ background-image: url("~newpolicy/icon07.png"); }
                .roundNnmber8{ background-image: url("~newpolicy/icon08.png"); }
                .roundNnmber9{ background-image: url("~newpolicy/icon09.png"); }
                .roundNnmber10{ background-image: url("~newpolicy/icon10.png"); }
                .roundNnmber11{ background-image: url("~newpolicy/icon11.png"); }
                .roundNnmber12{ background-image: url("~newpolicy/icon12.png"); }
                >h3{
                    font-size: 24px;
                    color: #1f1f1f;
                    text-align: center;
                    font-weight: bold;
                    margin-top: 15px;
                    @include SCREEN_1024 {
                        font-size: 20px;
                    }
                    @include SCREEN_736 {
                        font-size: 16px;
                    }
                }
                >p{
                    font-size: 20px;
                    color: #685c54;
                    line-height: 28px;
                    text-align: justify;
                    margin-top: 15px;
                    @include SCREEN_1024 {
                        font-size: 16px;
                        line-height: 24px;
                    }
                    @include SCREEN_736 {
                        font-size: 12px;
                        line-height: 20px;
                    }
                }
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
