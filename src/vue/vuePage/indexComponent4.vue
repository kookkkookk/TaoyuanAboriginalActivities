<script>
export default {
    props:["desktopDisplayPassMainVal","mobileDisplayPassMainVal","toComponentScrollTop"],
    data(){
        return {
            page4Title_top:99999,
            page4STitle_top:false,
            page4Btn1_top:99999,
            page4Btn1S_top:false,
            page4Btn2_top:99999,
            page4Btn2S_top:false,
            page4Btn3_top:99999,
            page4Btn3S_top:false,
            page4Btn4_top:99999,
            page4Btn4S_top:false,
            page4Btn5_top:99999,
            page4Btn5S_top:false,
            page4Btn6_top:99999,
            page4Btn6S_top:false,

            peopleAll_top:99999,
            peopleAllS_top:false,
            page4BtnII1_top:99999,
            page4BtnII1S_top:false,
            page4BtnII2_top:99999,
            page4BtnII2S_top:false,
            page4BtnII3_top:99999,
            page4BtnII3S_top:false,
            page4BtnII4_top:99999,
            page4BtnII4S_top:false,

            isIndexHTML:false,
            isIndexOther:true,
            pageGoScroll: null,
            thisUrl: null,
            lightBoxSwitch: false,
            lightBoxTitle:null,
            lightBoxAddress:null,
            lightBoxInfo:null,
        };
    },
    computed: {

    },
    methods:{
        toCompScrollTop(val){
            //console.log("toComponentScrollTop:",val);
            if(val > this.page4Title_top){
                this.page4STitle_top = true;
            }
            if(val > this.page4Btn1_top){
                this.page4Btn1S_top = true;
            }
            if(val > this.page4Btn2_top){
                this.page4Btn2S_top = true;
            }
            if(val > this.page4Btn3_top){
                this.page4Btn3S_top = true;
            }
            if(val > this.page4Btn4_top){
                this.page4Btn4S_top = true;
            }
            if(val > this.page4Btn5_top){
                this.page4Btn5S_top = true;
            }
            if(val > this.page4Btn6_top){
                this.page4Btn6S_top = true;
            }
            if(val > this.peopleAll_top){
                this.peopleAllS_top = true;
            }
            if(val > this.page4BtnII1_top){
                this.page4BtnII1S_top = true;
            }
            if(val > this.page4BtnII2_top){
                this.page4BtnII2S_top = true;
            }
            if(val > this.page4BtnII3_top){
                this.page4BtnII3S_top = true;
            }
            if(val > this.page4BtnII4_top){
                this.page4BtnII4S_top = true;
            }
        },
        gotoAndRouter(routerUrl){
            this.$router.push(routerUrl);

            this.$emit("isIndexHTML",this.isIndexHTML);
            this.$emit("isIndexOther",this.isIndexOther);
        },
        thisUrlIndexOf(){
           this.thisUrl = this.$route.path;
           //this.thisUrl = location.href;
            /*if(this.thisUrl.indexOf("/index")==-1){
                this.isIndexHTML = false;
                this.isIndexOther = true;
            }else{
                this.isIndexHTML = true;
                this.isIndexOther = false;
            }*/
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
                        this.pageGoScroll = document.getElementById("page4").offsetTop+400;
                    }else if(pageNum == 5){
                        this.pageGoScroll = document.getElementById("page5").offsetTop;
                    }else if(pageNum == 6){
                        this.pageGoScroll = document.getElementById("page6").offsetTop;
                    }else if(pageNum == 7){
                        this.pageGoScroll = document.getElementById("page7").offsetTop;
                    }
                    this.TweenMaxScroll(this.pageGoScroll,2);
                    window.history.replaceState({}, null, "http://localhost:3000/#/index/"+pageNum);
                    //window.history.replaceState({}, null, "http://www.kookkkookk.url.tw/#/index/"+pageNum);
                    //window.history.replaceState({}, null, "http://www.tetirm-tyc.com/#/index/"+pageNum);
                    //this.$router.push(`/index/${pageNum}`)
                },300) 
            }
        },
        lightBoxFn(val){
            if(val != "close"){
                this.lightBoxSwitch = true;

                axios.get('/src/api/indexComponent4.json')
                .then((response)=> {
                    // console.log(response.data[val].title);
                    this.lightBoxTitle = response.data[val].title
                    this.lightBoxAddress = response.data[val].address
                    this.lightBoxInfo = response.data[val].table
                })
                .catch((error)=> {
                });
            }else{
                this.lightBoxSwitch = false;
            }
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
            let page4Top = document.querySelector("#page4").offsetTop;
            //console.log("page4Top:",page4Top)

            
            this.page4Title_top = document.querySelector(".page4Title").offsetTop + page4Top;
            this.page4Btn1_top = document.querySelector(".btn1").offsetTop + page4Top;
            //console.log("page4Btn1_top:",this.page4Btn1_top)
            this.page4Btn2_top = document.querySelector(".btn2").offsetTop + page4Top;
            this.page4Btn3_top = document.querySelector(".btn3").offsetTop + page4Top;
            this.page4Btn4_top = document.querySelector(".btn4").offsetTop + page4Top;
            this.page4Btn5_top = document.querySelector(".btn5").offsetTop + page4Top;
            this.page4Btn6_top = document.querySelector(".btn6").offsetTop + page4Top;
            this.peopleAll_top = document.querySelector(".peopleAll").offsetTop + page4Top;

            let page4TopII = document.querySelector("#page4 .linksStyle").offsetTop;
            //console.log("page4TopII:",page4TopII)

            this.page4BtnII1_top = document.querySelector(".linksStyle .btnII1").offsetTop + page4Top+page4TopII;
            //console.log("page4BtnII1_top:",this.page4BtnII1_top)
            this.page4BtnII2_top = document.querySelector(".linksStyle .btnII2").offsetTop + page4Top+page4TopII;
            this.page4BtnII3_top = document.querySelector(".linksStyle .btnII3").offsetTop + page4Top+page4TopII;
            this.page4BtnII4_top = document.querySelector(".linksStyle .btnII4").offsetTop + page4Top+page4TopII;
        },500)
        
    }
};
</script>

<template>
    <div id='page4'>
        <div class="newsArea">
            <h2 class="page4Title" :class="{movingDownFirst:true,on:page4STitle_top}"><img src="~page4_people.gif" alt="" />106桃園市原住民族日系列活動</h2>
            <ul>
                <li class="btn1" :class="{movingLevel:true,on:page4Btn1S_top}"><a @click="gotoPage(4);" href="javascript:;">• 覺醒：臺灣原住民族權利運動特展</a></li>
                <li class="btn2" :class="{movingLevelLeft:true,on:page4Btn2S_top}"><a @click="lightBoxFn(0);" href="javascript:;">• 樂信瓦旦紀念公園落成典禮及特展開展記者會</a></li>
                <li class="btn3" :class="{movingLevel:true,on:page4Btn3S_top}"><a @click="lightBoxFn(1);" href="javascript:;">• 通訊正義 防災型共構共站基地台啟用</a></li>
                <li class="btn4" :class="{movingLevelLeft:true,on:page4Btn4S_top}"><a @click="gotoPage(6);" href="javascript:;">• 原住民族權利講堂</a></li>
                <li class="btn5" :class="{movingLevel:true,on:page4Btn5S_top}"><a style="cursor:default;" href="javascript:;">• 合流部落重建案永久屋落成典禮</a></li>
                <li class="btn6" :class="{movingLevelLeft:true,on:page4Btn6S_top}"><a @click="lightBoxFn(3);" href="javascript:;">• 原住民青年論壇及原權工作坊</a></li>
            </ul>
        </div>
        
        <transition
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutRight"
        >
            <div class="newsAreaLightBox" v-show="lightBoxSwitch">
                <div class='PopupPanel'>
                    <div>
                        <div class="lightBoxContent">
                            <div class="CloseBtn"
                                @click="lightBoxFn('close')"
                            >
                                <span></span>
                                <span></span>
                            </div>

                            <h1 v-html="lightBoxTitle"></h1>
                            <p v-html="lightBoxAddress"></p>
                            <table class="lightBoxInfoTable" v-html="lightBoxInfo"></table>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div class="page4relative" v-if="desktopDisplayPassMainVal">
            <div class="page1-bg picfx picfloat"></div>
            <div class="cloud cloud01" v-if="desktopDisplayPassMainVal"></div>
        </div>

        <div class="peopleAll" :class="{movingDownFirst:true,on:peopleAllS_top}"></div>

        <div class="page1-mobile-bg" v-if="mobileDisplayPassMainVal">
            <img src="~index_newsArea_mobile1.png" alt="" />
            <div class="cloud_mobile"><img src="~page4_cloud_mobile.png" alt="" /></div>
        </div>
    
        <div class="titlePeople" v-if="desktopDisplayPassMainVal"><img src="~page4_people2.gif" alt="" /></div>

        <div class="linksStyle" :class="{'page1-mobile-bg':mobileDisplayPassMainVal,'linksDesktop':desktopDisplayPassMainVal}">
            <img src="~index_newsArea_mobile2.png" alt="" v-if="mobileDisplayPassMainVal" />
            <h2>臺灣原住民族權利運動特展</h2>
            <ul>
                <li class="btnII1" :class="{movingLevel:true,on:page4BtnII1S_top}">
                    <!-- <router-link :to='"/awakening/awakening1"' @click.native="closeMenuIndex()">策展概念</router-link> -->
                    <a @click="gotoAndRouter('/awakening/awakening1')" href="javascript:;">策展概念</a>
                </li>
                <li class="btnII2" :class="{movingLevelLeft:true,on:page4BtnII2S_top}">
                    <!-- <router-link :to='"/awakening/awakening2"' @click.native="closeMenuIndex()">臺灣原住民族權利運動紀實</router-link> -->
                    <a @click="gotoAndRouter('/awakening/awakening2')" href="javascript:;">臺灣原住民族權利運動</a>
                </li>
                <li class="btnII3" :class="{movingLevel:true,on:page4BtnII3S_top}">
                    <!-- <router-link :to='"/awakening/awakening3"' @click.native="closeMenuIndex()">母體的意識</router-link> -->
                    <a @click="gotoAndRouter('/awakening/awakening3')" href="javascript:;">母體的意識</a>
                </li>
                <li class="btnII4" :class="{movingLevelLeft:true,on:page4BtnII4S_top}">
                    <!-- <router-link :to='"/awakening/awakening4"' @click.native="closeMenuIndex()">原鄉的赫茲</router-link> -->
                    <a @click="gotoAndRouter('/awakening/awakening4')" href="javascript:;">原鄉的赫茲</a>
                </li>
            </ul> 
        </div>
        <div class="page1-mobile-bg" v-if="mobileDisplayPassMainVal">
            <img src="~index_newsArea_mobile3.png" alt="" />
            <div class="cloud_mobile cloudM2"><img src="~page4_cloud_mobile2.png" alt="" /></div>
        </div>

        <div class="music" v-if="desktopDisplayPassMainVal"></div>

        

        


    </div>
</template>
<style type="text/css">
    
    .lightBoxInfoTable{
        margin-top: 35px;
        margin-bottom: 90px;
    }
    tr{
        line-height: 35px;
    }
    td{
       color: #fff;
       vertical-align:text-top;
       font-size: 20px;
       text-align: left; 
       letter-spacing: 1px;
    }
    @media screen and (max-width: 1023px) {
        table{
            margin-top: 20px;
            margin-bottom: 60px;
        }
        td{
           font-size: 16px; 
        }
    }
    @media screen and (max-width: 736px) {
        tr{
            line-height: 20px;
        }
        td{
            font-size: 12px;
            letter-spacing: 0.5px;
        }
    }
</style>
<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_scrollAnimation.scss';
    @import '../../css/scss/_animate.min.scss';

    .titlePeople{
        width: 100%;
        height: auto;
        position: absolute;
        bottom: 1106px;
        left: 0;
        margin-left: 150px;
        z-index: 1;
        >img{
            max-width: 100%;
            display: block;
            margin: 0 auto;
        }
    }
    .picfx{
        width: 100%;
        min-height: 1653px;
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

    #page4{
        width: 100%;
        height: auto;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
        }
        .newsArea{
            width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
            // background-color: #456;
            @include SCREEN_1024 {
                width: 100%;
                padding: 0 15px 0 15px;
            }
            >h2{
                font-size: 40px;
                font-weight: bold;
                color: #6a3e30;
                text-align: center;
                margin-bottom: 15px;
                @include SCREEN_1024 {
                    font-size: 30px;
                    margin-bottom: 10px;
                }
                @include SCREEN_736 {
                    font-size: 20px;
                }
                >img{
                    font-size: 0;
                    @include SCREEN_1024 {
                        width: 40px;
                        height: auto;
                    }
                    @include SCREEN_374 {
                        width: 25px;
                    }
                }
            }
            >ul{
                >li{
                    // line-height: 60px;
                    border-top: 1px solid #60412b;
                    border-right: 1px solid #60412b;
                    border-left: 1px solid #60412b;
                    text-indent: 90px;
                    transition: all .3s;
                    &:hover{
                        background-color: rgba(#fff, 0.5);
                    }
                    &:nth-child(5):hover{
                        background: transparent;
                    }
                    @include SCREEN_1024 {
                        text-indent: 0;
                        padding-left: 8%;
                        padding-right: 5px;
                    }
                    @include SCREEN_736 {
                        padding-left: 4%;
                    }
                    // list-style-type: disc;
                    // font-size: 25px;
                    // margin-left: 25px;
                    &:nth-last-child(1){
                        border: 1px solid #60412b;
                    }
                    >a{
                        // text-indent: 40px;
                        font-size: 26px;
                        color: #60412b;
                        display: block;
                        padding: 15px 0 15px 0;
                        @include SCREEN_1024 {
                            font-size: 16px;
                            padding: 8px 0 8px 0;
                        }
                        @include SCREEN_736 {
                            font-size: 14px;
                            padding-left: 4%;
                        }
                    } 
                }
            }
        }
        .newsAreaLightBox{
            display: table;
            background: rgba(0, 0, 0, 0.7);
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 5;
            overflow: hidden;
            .PopupPanel {
                display: table-cell;
                vertical-align: middle;
                // text-align: center;
                position: relative;
                width: 100%;
                height: 100%;
                >div{
                    // display: inline-block;
                    // vertical-align: middle;
                    // text-align: center;
                    // opacity: 0.9;
                    background-color: rgba(#40362c,0.95);
                    // border: 1px solid gray;
                    // padding: 8px;
                    // margin: 30px auto;
                    overflow-y: auto;
                    max-height: 100%;
                    min-height: 100%;
                    width: 100%;
                    height: 100%;
                    .lightBoxContent{
                        max-width: 1024px;
                        height: auto;
                        margin: 0 auto;
                        position: relative;
                        padding: 0 120px;
                        @include SCREEN_736 {
                            padding: 0 60px;
                        }
                        h1{
                            font-size: 35px;
                            line-height: 40px;
                            color: #ffc000;
                            padding-top: 90px;
                            @include SCREEN_1024 {
                                font-size: 28px;
                                line-height: 32px;
                                padding-top: 60px;
                            }
                            @include SCREEN_736 {
                                font-size: 22px;
                                line-height: 26px;
                                padding-top: 40px;
                            }
                        }
                        p{
                            font-size: 25px;
                            line-height: 30px;
                            color: #fff;
                            margin-top: 35px;
                            @include SCREEN_1024 {
                                font-size: 20px;
                                line-height: 24px;
                                margin-top: 20px;
                            }
                            @include SCREEN_736 {
                                font-size: 16px;
                                line-height: 20px;
                            }
                        }
                        // table{
                        //     margin-top: 35px;
                        //     margin-bottom: 90px;
                        //     @include SCREEN_1024 {
                        //         margin-top: 20px;
                        //         margin-bottom: 60px;
                        //     }
                        //     >tr{
                        //         line-height: 35px;
                        //         @include SCREEN_736 {
                        //             line-height: 20px;
                        //         }
                        //         >td{
                        //             color: #fff;
                        //             vertical-align:text-top;
                        //             font-size: 20px;
                        //             text-align: left;
                        //             // margin-top: 15px;
                        //             // line-height: 24px;
                        //             letter-spacing: 1px;
                                    
                        //             @include SCREEN_1024 {
                        //                 font-size: 16px;
                        //             }
                        //             @include SCREEN_736 {
                        //                 font-size: 12px;
                        //                 letter-spacing: 0.5px;
                        //             }
                        //         }
                        //     }
                        // }
                        .CloseBtn{
                            width: 80px;
                            height: 80px;
                            // background-color: #759;
                            position: absolute;
                            top: 30px;
                            right: 0;
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
            }
        }
        .page4relative{
            width: 100%;
            height: 1653px;
            position: relative;
            .page1-bg{ background-image: url("~index_newsArea_desktop.png"); z-index: 1;}
        }
        .peopleAll{
            width: 100%;
            height: 1653px;
            position: absolute;
            top: 460px;
            left: 0;
            background-position: 50% 0%;
            background-repeat: no-repeat;
            margin: 0 auto;
            background-image: url("~index_newsArea_peopleAll_desktop.png");
            z-index: 1;
            @include SCREEN_1024 {
                width: 150%;
                background-size: contain;
                top: 250px;
                left: -25%;
                z-index: 0;
            }
        }


        .linksDesktop{
            position: absolute;
            bottom: 620px;
            left: 50%;
            width: 850px;
            margin-left: -425px;
        }


        .page1-mobile-bg{
            font-size: 0;
            position: relative;
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

        .cloud_mobile{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            transform-origin: center center;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-name: changeCloudMobile2;
            >img{
                font-size: 0;
                max-width: 100%;
            }
        }
        .cloudM2{
            animation-name: changeCloudMobile;
        }
    }

    .linksStyle{
        z-index: 2;
        @include SCREEN_1024 {
            position: relative;
        }
        >h2{
            color: #573223;
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 40px;
            @include SCREEN_1024 {
                font-size: 20px;
                margin-bottom: 20px;
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
            }
        }
        >ul{
            @include SCREEN_1024 {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
            >li{
                text-align: center;
                margin-bottom: 5px;
                transition: all .3s;
                &:nth-child(1){ background-color: #d16363; }
                &:nth-child(1) >a{ letter-spacing: 10px; }
                &:nth-child(2){ background-color: #946b3e; }
                &:nth-child(3){ background-color: #ffffff; }
                &:nth-child(3) >a{ color: #383838;}
                &:nth-child(4){ background-color: #333333; }
                &:hover{
                    background-color: #7d7d7d;
                }
                &:hover >a{
                    color: #fff;
                }
                @include SCREEN_1024 {
                    margin-left: 5%;
                    margin-right: 5%;
                }
                >a{
                    display: block;
                    font-size: 34px;
                    color: #fff;
                    text-align: center;
                    padding: 20px 0;
                    transition: all .3s;
                    @include SCREEN_1024 {
                        font-size: 14px;
                        padding: 12px 0;
                    }
                    @include SCREEN_374 {
                        font-size: 12px;
                        padding: 8px 0;
                    }
                }
            }
        }
    }
    .music{
        width: 100%;
        height: 1653px;
        position: absolute;
        top: 517px;
        left: 0;
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        margin: 0 auto;
        background-image: url("~page4_music.gif");
    }

    .cloud{
        height: 746px;
    }
    .cloud01{
        background-image: url("~page4_cloud.png");
    }
    
</style>