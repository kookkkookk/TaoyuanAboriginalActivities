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
        <div class="people movingVertical" :class="{on:sertimeoutval}"><img src="~awakening/awakeningPeople02.png" alt="" /></div>
        <h1 class="movingVertical movingDelay1" :class="{on:sertimeoutval}">臺灣原住民族權利運動</h1>
        <div class="content">
            <div class="contentText movingVertical movingDelay2" :class="{on:sertimeoutval}">
                <p>臺灣原住民族權利運動（簡稱原運），簡單而言是長期以來，原住民族受到各種侵害壓迫，所產生出來的反抗結果。近四百年來，臺灣遭受各外來族群統治，包括西班牙、荷蘭、鄭氏、清朝、日本及中華民國等，族群之間發生多次衝突，引起多次原住民族抗爭事件。整個原住民族爭取權利過程，大致上可分為「原住民族早期的抗爭」、「以三大訴求為主的原運時期」、「回歸部落主體時期」三個階段。</p>
                <p>國際原住民人權風潮漸趨成熟，加上原住民族人面臨到的現實困境加劇，些困境具體而言包括：原住民雛妓問題、童工問題、勞工問題、就業問題、教育、醫療、保留地非法買賣問題、原住民地區經濟問題等等迫切急難的問題。揭發了長期被隱藏的傷口，而這些傷口隨著燎原之火，迅速蔓延開來，原住民族權利運動的狼煙已緩緩飄散，儘管來自不同族群，但受到的壓迫及遭遇是所有原住民族人感同身受的悲劇。</p>
                <p>由於法令執行上的嚴重缺失，加上族人移居至都會後，面臨許多就業限制、生活品質不佳，或因原住民身分而遭受歧視等現象。台灣原住民權利促進會在1984年成立之初，一方面以有限的人力、物力受理原住民的求助，進行個案的服務性工作，另一方面即以原住困難處境的報導或探討為活動重點。此時期的原住民運動者已經察覺到原住民個人所遭遇的生活困境，運用了「原住民基本權利」作為立論基礎，從保障個人權利、解決社會問題的角度對國家發聲。</p>
                <p>1987年「原住民權利促進會」更名為「原住民族權利促進會」，進入原住民族權利運動的新階段。最主要是希望能更凸顯「原住民問題是一個族群問題」，原運從「原住民運動」到「原住民族運動」，象徵運動的主要訴求從個人權利轉向「集體權」，從向國家要求平等對待、消除歧視，轉向要求原住民族自決，最根本能夠改善的做法，就是必須改善原住民的集體處境。原住民族運動在這個階段開始一連串的抗爭活動，包括：打破吳鳳神話、反核運動、恢復傳統姓氏及原住民族正名運動、還我土地運動及自治訴求運動。</p>
                <p>原住民族運動呈現出，「原住民族」作為集體權主體與其他集體權利主體之間的差異，因為台灣原住民族的歷史經驗、社會文化、民族性與地域性的結合關係、個人與民族的普遍困境，都是其他形態「社群」所沒有的。1987年發表之「臺灣原住民族權利宣言」宣示原住民擁有基本保障權(生 存、土地、工作、財產、教育)，以及自治權與文化認同權，並提出體制外抗爭與憲 政改革方向，至此原運便朝著正名、土地、自治這三個方向持續推進。</p>
            </div>
            <!-- <div class="picGroup movingVertical movingDelay3" :class="{on:sertimeoutval}">
                <div class="pic pic1"><img src="~awakening/awakeningPic02-1.jpg" width="100%" alt="" /></div>
                <div class="pic pic2"><img src="~awakening/awakeningPic02-2.jpg" width="100%" alt="" /></div>
            </div> -->
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
            background-color: #946b3e;
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
                color: #fff;
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
                padding-bottom: 30%;
                @include SCREEN_1024 {
                    padding-bottom: 15%;
                }
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
                height: 10%;
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
