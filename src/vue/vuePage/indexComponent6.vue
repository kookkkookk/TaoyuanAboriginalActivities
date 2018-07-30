<script>
export default {
    props:["desktopDisplayPassMainVal","mobileDisplayPassMainVal","toComponentScrollTop"],
    data(){
        return {
            page6Title_top:99999,
            page6STitle_top:false,
            roundMsgGroup_top1:99999,
            roundMsgGroup_Stop1:false,
            roundMsgGroup_top2:99999,
            roundMsgGroup_Stop2:false,
        };
    },
    computed: {

    },
    methods:{
        toCompScrollTop(val){
            //console.log("toComponentScrollTop:",val);
            if(val > this.page6Title_top){
                this.page6STitle_top = true;
            }
            if(val > this.roundMsgGroup_top1){
                this.roundMsgGroup_Stop1 = true;
            }
            if(val > this.roundMsgGroup_top2){
                this.roundMsgGroup_Stop2 = true;
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
            let page6Top = document.querySelector("#page6").offsetTop;
            this.page6Title_top = document.querySelector(".page6Title").offsetTop + page6Top;
            //console.log("page5Title_top:",this.page5Title_top)

            this.roundMsgGroup_top1 = document.querySelector(".roundMsgGroupMain .roundMsgGroup1").offsetTop + page6Top;
            this.roundMsgGroup_top2 = document.querySelector(".roundMsgGroupMain .roundMsgGroup2").offsetTop + page6Top;
        },500)
    }
};
</script>

<template>
    <div id='page6'>

        <div :class="{'page1-bg picfx picfloat':desktopDisplayPassMainVal,'page1-mobile-bg':mobileDisplayPassMainVal}">
            <img src="~index_Lecture_mobile.png" alt="" v-if="mobileDisplayPassMainVal" />
            <h2 class="linksTitle page6Title" :class="{movingDownFirst:true,on:page6STitle_top}">原住民族權利講堂</h2>
        </div>

        <div class="roundMsgGroupMain" :class="{'page2-bg picfx picfloat':desktopDisplayPassMainVal,'page2-mobile-bg':mobileDisplayPassMainVal}">
            <div class="roundMsgGroupAll" >
                <div class="roundMsgGroupMid">
                    <div class="roundMsgGroup roundMsgGroup1" :class="{movingVertical:true,on:roundMsgGroup_Stop1}">
                        <h2>從部落地圖找回傳統領域</h2>
                        <h3>原住民族權利講堂<br/>第一講</h3>
                        <h4>8/19(六) 14:00-17:00</h4>
                        <table>
                            <tr>
                                <td>主　題：</td>
                                <td>從部落地圖找回傳統領域</td>
                            </tr>
                            <tr>
                                <td>地　點：</td>
                                <td>洞光<br/>(桃園市中壢區成功路139號)</td>
                            </tr>
                            <tr>
                                <td>主講人：</td>
                                <td>官大偉 老師</td>
                            </tr>
                            <tr>
                                <td>與談人：</td>
                                <td>曾巧昕</td>
                            </tr>
                        </table>
                        <div class="signUpBox"><a href="https://www.accupass.com/event/register/1707280251012051307823" target="_blank">我要報名</a></div>
                    </div>

                    <div class="roundMsgGroup roundMsgGroup2" :class="{movingVertical:true,on:roundMsgGroup_Stop2}">
                        <h2>台灣平埔族群文化復振與正名運動</h2>
                        <h3>原住民族權利講堂<br/>第二講</h3>
                        <h4>9/3(日) 13:00-16:00</h4>
                        <table>
                            <tr>
                                <td>主　題：</td>
                                <td>台灣平埔族群文化復振與正名運動-《追鹿人》紀錄片對談</td>
                            </tr>
                            <tr>
                                <td>地　點：</td>
                                <td>桃圍Tao-Way<br/>(桃園市桃園區永樂街99號)</td>
                            </tr>
                            <tr>
                                <td>主講人：</td>
                                <td>陳重佑 導演</td>
                            </tr>
                            <tr>
                                <td>與談人：</td>
                                <td>段洪坤 老師</td>
                            </tr>
                        </table>
                        <div class="signUpBox"><a href="https://www.accupass.com/event/register/1707280251012051307823" target="_blank">我要報名</a></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cloud cloud01" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page6STitle_top,movingDelay2:true}"></div>

    </div>
</template>

<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_scrollAnimation.scss';
    .picfx{
        width: 100%;
        //min-height: 306px;
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

    #page6{
        width: 100%;
        height: 918px;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
        }
        .page1-bg{ background-image: url("~index_Lecture_desktop.png"); z-index: 1; min-height: 306px;}
        .page2-bg{ background-image: url("~index_Lecture_desktop2.png"); z-index: 2; min-height: 918px; top:306px;}

        .page1-mobile-bg{
            font-size: 0;
            position: relative;
            >img{
                max-width: 100%;
            }
        }
        .page2-mobile-bg{
            height: auto;
        }
    }
    .linksTitle{
        font-size: 40px;
        color: #573223;
        text-align: center;
        display: block;
        position: absolute;
        bottom: 100px;
        left: 50%;
        margin-left: -183px;
        width: 366px;
        font-weight: bold;
        z-index: 2;
        background-image: url("~textLine.png");
        background-position: 50% 100%;
        background-repeat: no-repeat;
        padding-bottom: 30px;
        @include SCREEN_1024 {
            font-size: 26px;
            position: absolute;
            bottom: 0;
            left: 0;
            margin: 0;
            width: 100%;
            padding: 0 20px 10px 20px; 
            background-size: 140px;
        }
        @include SCREEN_736 {
            font-size: 18px;
            background-size: 100px;
        }
    }

    .roundMsgGroupAll{
        overflow: hidden;
        width: 860px;
        height: auto;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -430px;
        @include SCREEN_1024 {
            width: auto;
            position: static;
            margin-left: 0;
            margin: 0 auto;
            margin-top: 30px;
            display: table;
        }
        @include SCREEN_736 {
            display: block;
        }
        
        .roundMsgGroupMid{
            width: 100%;
            display:table-row;
            @include SCREEN_736 {
                display: block;
            }
            .roundMsgGroup{
                width: 430px;
                // margin: 0 25px 0 25px;
                padding: 0 30px;
                padding-bottom: 90px;
                display:table-cell;
                position: relative;
                @include SCREEN_1024 {
                    width: 300px;
                    // float: left;
                    padding: 0 15px;
                    padding-bottom: 90px;
                }
                @include SCREEN_736 {
                    display: block;
                    width: 70%;
                    float: none;
                    margin: 0 auto;
                    margin-bottom: 40px;
                    padding-bottom: 70px;
                }

                >h2{
                    width: 234px;
                    height: 234px;
                    background-image: url("~index_Lecture_textBg.png");
                    background-position: 50% 0%;
                    background-repeat: no-repeat;
                    background-size: contain;
                    margin: 0 auto;
                    text-align: center;
                    font-size: 26px;
                    color: #fff;
                    padding: 0 35px;
                    letter-spacing: 2px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    @include SCREEN_1024 {
                        width: 200px;
                        height: 200px;
                        font-size: 22px;
                    }
                    @include SCREEN_736 {
                        font-size: 20px;
                    }
                    @include SCREEN_374 {
                        font-size: 16px;
                    }
                }
                >h3{
                    font-size: 30px;
                    text-align: center;
                    margin-top: 15px;
                    @include SCREEN_1024 {
                        font-size: 20px;
                    }
                    @include SCREEN_736 {
                        font-size: 16px;
                    }
                }
                >h4{
                    font-size: 30px;
                    text-align: center;
                    margin-top: 6px;
                    @include SCREEN_1024 {
                        font-size: 20px;
                    }
                    @include SCREEN_736 {
                        font-size: 16px;
                    }
                }
                table{
                    margin: 0 auto;
                    margin-top: 25px;
                    
                    >tr{
                        line-height: 30px;
                        @include SCREEN_736 {
                            line-height: 20px;
                        }

                        >td{
                            vertical-align:text-top;
                            font-size: 20px;
                            color: #1c1917;
                            // text-align: left;
                            // margin-top: 15px;
                            // line-height: 24px;
                            letter-spacing: 1px;
                            &:nth-child(1){
                                width: 25%;
                                @include SCREEN_374 {
                                    width: 30%;
                                }
                            }
                            &:nth-child(2){
                                width: 75%;
                                text-align: justify;
                                @include SCREEN_374 {
                                    width: 70%;
                                }

                            }
                            @include SCREEN_1024 {
                                font-size: 16px;
                            }
                            @include SCREEN_736 {
                                font-size: 12px;
                                letter-spacing: 0.5px;
                            }
                        }
                    }
                }
                .signUpBox{
                    width: 180px;
                    height: auto;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    @include SCREEN_736 {
                        width: 120px;
                    }
                    >a{
                        width: 180px;
                        height: 50px;
                        display: block;
                        border-radius: 5px;
                        border: 1px solid #594132;
                        color: #f1f1f1;
                        font-size: 25px;
                        text-align: center;
                        line-height: 50px;

                        background: -moz-linear-gradient(top, #705944 0%, #563a29 100%);
                        background: -webkit-linear-gradient(top, #705944 0%,#563a29 100%);
                        background: linear-gradient(to bottom, #705944 0%,#563a29 100%);
                        @include SCREEN_736 {
                            width: 120px;
                            height: 30px;
                            font-size: 16px;
                            line-height: 30px;
                        }
                        &:hover{
                            background: #563a29;
                        }
                    }
                }
            }
        }      
    }

    .cloud{
        z-index: 2;
        height: 918px;
    }
    .cloud01{
        background-image: url("~page6_cloud.png");
    }
</style>
