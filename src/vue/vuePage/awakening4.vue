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
        <div class="people movingVertical" :class="{on:sertimeoutval}"><img src="~awakening/awakeningPeople04.png" alt="" /></div>
        <h1 class="movingVertical movingDelay1" :class="{on:sertimeoutval}">原鄉的赫茲</h1>
        <div class="content">
            <div class="contentText movingVertical movingDelay2" :class="{on:sertimeoutval}">
                <p>臺灣的原住民經歷近十幾個政權更迭，國家政策主導下切斷了族人與文化的連結，離開原居地的族人，在自己的土地上流浪，進20年的原住民族權利運動，在《原住民族基本法》制定後暫時取得階段成功，然而制度的建立與理念落實仍有段漫長的路要走。</p>
                <p>美麗島的歌詞是這麼唱著的「篳路藍縷，以啟山林」，然而在如此以主流視野所陳述的故事裡，充滿原住民族人顛沛流離的黑歷史。在主流思維下紀錄的歷史長書裡，有許多被忽視或無人記載的黑暗角落在等待微光與改變。</p>
                <p>「原鄉的赫茲」展間以「黑色」做為主色調，試圖讓我們經常忽略的畫面以需要定睛及凝視才能看見的手法呈現。在還我土地運動的挫敗，當土地都失去了，文化的根該在何處發芽？被開發的山林，遭分贓的土地，每割出一塊土地，都在文化網絡上多剪斷一根與族群的文化織線，遠離祖靈的生命跡線。「我們知道， 大地不屬於人類， 而人類屬於大地。」西雅圖酋長的話言猶在耳，失去土地的原住民族，面臨到的不只是文化斷裂、傳統智慧失傳及經濟困頓等生存問題，在氣候變遷加劇的當代情境，土地更牽引著族人的生命與居住問題，土地議題的智慧揉合不僅是取得與返還，隱含的更是全人類與這塊島嶼對於永續未來的解答。</p>
                <p>此外，「聲音」也是展間串連的重要元素，當我們讚美原住民族天籟嘹亮時，可曾聽到那旋律之外的嗚咽？淺白的歌詞，唱著只能無奈後的自嘲；歡樂的弦律，說著無法被理解的故事，在原鄉的赫茲裡，我們用另一種方式，聽見原住民族的故事。</p>
            </div>
            <div class="picGroup movingVertical movingDelay3" :class="{on:sertimeoutval}">
                <div class="pic pic1"><img src="~awakening/awakeningPic04-1.jpg" width="100%" alt="" /></div>
                <div class="pic pic2"><img src="~awakening/awakeningPic04-2.jpg" width="100%" alt="" /></div>
            </div>
            <div class="picGroup picGroupNoTop movingVertical movingDelay4" :class="{on:sertimeoutval}">
                <div class="pic pic1"><img src="~awakening/awakeningPic04-3.jpg" width="100%" alt="" /></div>
                <div class="pic pic2"><img src="~awakening/awakeningPic04-4.jpg" width="100%" alt="" /></div>
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
            background-color: #333333;
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
                color: #ededed;
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
                        color: #fff;
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
            .noIndent{
                text-indent: 0;
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
