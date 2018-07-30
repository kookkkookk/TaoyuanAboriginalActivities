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
        <div class="people movingVertical" :class="{on:sertimeoutval}"><img src="~awakening/awakeningPeople03.png" alt="" /></div>
        <h1 class="movingVertical movingDelay1" :class="{on:sertimeoutval}">母體的意識</h1>
        <div class="content">
            <div class="contentText movingVertical movingDelay2" :class="{on:sertimeoutval}">
                <p>原住民族對於大地、人與自然間的母體思維與當代社會強調的許多思考方式是具有落差甚至衝突的，「以啟山林」與「土地是血」(註1)呈現出不同的價值信仰，尊重與永續是原住民族人思考與環境互動的重要精神。</p>
                <p>「母體的意識」展間以白色為基調，在脫去一切意識形態及有色眼光後，我們希望回到最初的母體意識來討論原住民族權利。</p>
                <p>個人，乃至整個族群的命名或稱呼都乘載了文化、價值及精神信仰的折射，取得自我命名的權利，是原運的重要訴求，本展間從「找回自己名字」開始，喚醒自我認同的思考開始，請大家思考在當代社會下，原住民族會以何種方式自我凝視？</p>
                <p>此外本展間亦討論到與桃園市切身相關的「都會原住民族」人文環境議題，本市已成為都會原住民族人口最多的直轄市，除了思考各族群語言傳承不流失，祭儀延綿永續，營造文化生活環境外，還需與原鄉部落探討對話，都會原住民族歲時祭儀文化活動社會議題，理出新共識。</p>
                <p>此外亦佈展過去復興區部落地圖，呈現傳統的社群聚落位置與當代行政區域劃分的對照，並延伸思考與過去命名系統的關聯，提出在地名的回復與保存之間的議題。</p>
                <p>展間最後展區為全球視野觀點，呈現世界各國對於轉型正義的討論。最後，並取用臺灣固有種也是魯凱族崇高象徵的百合花的意象，留下對原住民族權利的期許。</p>
                <p class="noIndent">-----<br/>註1：土地是血，山林是家（Dxgal o dara, Maaw o Sapah）為太魯閣族（Truku）祖訓。</p>
            </div>
            <div class="picGroup movingVertical movingDelay3" :class="{on:sertimeoutval}">
                <div class="pic pic1"><img src="~awakening/awakeningPic03-1.jpg" width="100%" alt="" /></div>
                <div class="pic pic2"><img src="~awakening/awakeningPic03-2.jpg" width="100%" alt="" /></div>
            </div>
            <div class="picGroup picGroupNoTop movingVertical movingDelay4" :class="{on:sertimeoutval}">
                <div class="pic pic1"><img src="~awakening/awakeningPic03-3.jpg" width="100%" alt="" /></div>
                <div class="pic pic2"><img src="~awakening/awakeningPic03-4.jpg" width="100%" alt="" /></div>
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
            background-color: #fff;
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
                color: #333333;
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
                        color: #333333;
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
