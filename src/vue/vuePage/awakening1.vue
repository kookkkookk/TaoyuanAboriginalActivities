<script>
export default {
    props:["mainScrollTop"],
    data(){
        return {
            screenWidth: null,
            isDesktopDisplay: true,
            isMobileDisplay: false,
            isIndexClose:true,
            isOtherOpen:false,
            sertimeoutval: false,
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
            this.$emit("isHideIndexChird",this.isIndexClose);
            this.$emit("isShowOtherChird",this.isOtherOpen);
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
            this.sertimeoutval = true;
        },500)

        
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    }
};
</script>


<template>
    
    <div class="contentGroup">
        <div class="people movingVertical" :class="{on:sertimeoutval}"><img src="~awakening/awakeningPeople01.png" alt="" /></div>
        <h1 class="movingVertical movingDelay1" :class="{on:sertimeoutval}">策展概念</h1>
        <div class="content">
            <div class="contentText movingVertical movingDelay2" :class="{on:sertimeoutval}">
                <p>臺灣是一座揉合海風與泥土記憶的島嶼，而台灣島上原住民族的南島文化，則是臺灣給世界的禮物。然而原住民族在近代的社會呈現的視角，往往被貼上弱勢、偏鄉、少數等帶有意識形態的標籤，綜觀臺灣歷史，經歷了近十個不同政權更迭變化，唯一不變的是原住民族遭受欺凌的處境，之所以會有如此框架或標籤的原因有許多，因過去到現今殖民或統治者握有權力卻未重視，造成族群處境邊緣及不利發展。當執政者經由政治社會化所得教育系統，讓原住民族遠離傳統脈絡，主流霸權閹割了原住民族與自身文化的鏈結，不利的語言環境，強佔的土地政策，甚至是刻意地忽略主權等等，都讓原住民族除了處於社會結構上不利位置外，更失去了延續傳統文化命脈的機會。</p>
                <p>近30年來國際原住民族權利運動方興未艾，1980年代的原運風潮，讓積壓於主流社會鏡頭外的原住民族議題浮上檯面，原運之火在《高山青》雜誌的文字串聯間燃起，這把烈火搭著80年代社會改革風潮燃燒到街頭，80年代原運以正名為主軸，土地和自治為橫貫，亟欲建立起原住民族權利基石。歷經十餘年努力，1994年8月1日，使用近半世紀的「山胞」終正名「原住民」更於1997年於憲法內改以「原住民族」稱之，至此原住民族權利完成階段性任務。</p>
                <p>原住民族權利建構是當代國家為政者不可忽視的重要政策，適逢解嚴30周年的時刻，我們希望透過展覽，回顧過去原運前輩投身運動留下的汗水及歷史，並誠實地看見當代原權尚待理解之討論。</p>
                <p>本展以「覺醒」兩字作為主軸貫穿，適逢解嚴30周年的時刻，希望讓更多人對於原住民族權利有新的體悟及思考。當原住民族權利由街頭抗爭走向政策落實，當族人對於自身權益及族群意識喚醒的時刻，我們還有多少未竟之業必須去努力，有諸多轉型正義工程尚待建立，覺醒是第一步，覺醒後的每個議題如何發酵激盪出新的可能或合作，都是臺灣人必須面對且刻不容緩的議題，在閱讀原運歷史，思考原權理念，吸納過去並涵養未來。</p>

                <p class="noIndent">-----------<br/>展覽時間◢<br/>106年8月1日 ─ 106年9月15日</p>
                <p class="noIndent">展覽地點◢<br/><a href="https://www.google.com.tw/maps/place/%E6%A1%83%E5%9C%92%E5%B8%82%E5%8E%9F%E4%BD%8F%E6%B0%91%E6%96%87%E5%8C%96%E6%9C%83%E9%A4%A8/@24.8963021,121.2799204,17z/data=!4m13!1m7!3m6!1s0x34681814313ec7cd:0x5fc41bbc67565d8a!2zMzM15qGD5ZyS5biC5aSn5rqq5Y2A5ZOh5p6X6Lev5LiA5q61Mjnlt7cxMDHomZ8!3b1!8m2!3d24.8963021!4d121.2821091!3m4!1s0x346818142f29b7d1:0xb023b57691da449b!8m2!3d24.896142!4d121.2819708" target="_blank">桃園市原住民族文化會館（桃園市大溪區員林路一段29巷101號）</a><img style="margin-left:8px;" src="~awakening/map_icon.png" alt="" /></p>
                <p class="noIndent">展覽開放時間◢<br/>週二至週日　上午8點 至 下午5點 （周一休館）</p>
            </div>
            <div class="picGroup movingVertical movingDelay3" :class="{on:sertimeoutval}">
                <div class="pic pic1"><img src="~awakening/awakeningPic01-1.jpg" width="100%" alt="" /></div>
                <div class="pic pic2"><img src="~awakening/awakeningPic01-2.jpg" width="100%" alt="" /></div>
            </div>
        </div>
        
        <div class="yelloColorBg">
            <div class="backBtnGroup backBtnGroupBottom">
                <div class="backBtn" @click="backFn('/index')">
                    <a href="javascript:;"><img src="~newpolicy/backBtn.png" alt="" /></a>
                </div>
            </div>
            <div class="topGroup" @click="toTopFn()">
                <div class="topBtn" v-if="isMobileDisplay">
                    <a href="javascript:;"><img src="~index_footer_topBtn_desktop.png" alt="" /></a>
                </div>
            </div>
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

        .contentGroup{
            width: 100%;
            height: auto;
            position: absolute;
            top: 693px;
            left: 0;
            background-color: #d16363;
            padding-bottom: 200px;
            @include SCREEN_1024 {
                position: static;
                height: auto;
                padding-bottom: 150px;
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
                margin-top: 20px;
                
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
            .content{
                width: 100%;
                margin-top: 20px;
                position: relative;
                z-index: 2;
                // padding-bottom: 30%;
                // @include SCREEN_1024 {
                //     padding-bottom: 15%;
                // }
                .contentText{
                    width: 700px;
                    margin: 0 auto;
                    @include SCREEN_736 {
                        width: 100%;
                    }
                    >p{
                        display: block;
                        font-size: 20px;
                        line-height: 30px;
                        color: #ededed;
                        // margin: 0 auto;
                        text-align: justify;
                        margin-bottom: 30px;
                        text-indent: 40px;
                        @include SCREEN_1024 {
                            width: 90%;
                            font-size: 16px;
                            line-height: 24px;
                            margin: 0 auto;
                            margin-top: 20px;
                            text-indent: 32px;
                        }
                        @include SCREEN_736 {
                            font-size: 14px;
                            line-height: 20px;
                            margin-top: 15px;
                            text-indent: 28px;
                        }
                        >a{
                            color: #fff;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        img{
                            max-width: 100%;
                            @include SCREEN_736 {
                                width: 15px;
                                height: 23px;
                            }
                        }
                    }
                    .midPic{
                        width: 100%;
                        margin: 0 auto;
                        margin-bottom: 30px;
                        font-size: 0;
                        @include SCREEN_1024 {
                            width: 90%;
                            margin-bottom: 0;
                            margin-top: 20px;
                        }
                        @include SCREEN_736 {
                            >img{
                                max-width: 100%;
                                display: block;
                                margin: 0 auto;
                                margin-top: 15px;
                            }
                        }
                    }
                    .noIndent{
                        text-indent: 0;
                    }
                }
                .picGroup{
                    width: 1210px;
                    height: auto;
                    margin: 0 auto;
                    margin-top: 30px;
                    overflow: hidden;
                    text-align: center;
                    font-size: 0;
                    //@include SCREEN_1024 {
                    @media screen and (max-width: 1210px) {
                        width: 95%;
                        height: auto;
                        margin: 0 auto;
                        margin-top: 30px;
                    }
                    @include SCREEN_736 {
                        margin-top: 25px;
                    }
                    .pic{
                        width: 600px;
                        display: inline-block;
                        font-size: 0;
                        // @include SCREEN_1024 {
                        @media screen and (max-width: 1210px) {
                            width: 49.5%;
                            
                            margin: 0 0.25%;
                            float: left;
                            display: block;
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
                    .pic1{
                        margin-right: 5px;
                        @media screen and (max-width: 1210px) {
                            margin-right: 0;
                        }
                    }
                }
                .picGroupNoTop{
                    margin-top: 5px;
                    @include SCREEN_736 {
                        margin-top: 0;
                    }
                }
            }
        }
        .yelloColorBg{
            width: 100%;
            height: 25%;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #e6ddcd;
            z-index: 0; 
            @include SCREEN_1024 {
                height: 15%;
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
        height: 100%;
        .backBtn{
            top: initial;
            bottom: 50px;
        }
    }
    .topGroup{
        width: 1024px;
        height: 100%;
        position: absolute;
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
            left: 50%;
            margin-left: -30px;
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
                margin-left: -20px;
            }
            img{
                max-width: 100%;
            }
        }
    }
</style>
