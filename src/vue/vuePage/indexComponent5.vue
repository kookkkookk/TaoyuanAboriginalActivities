<script>
export default {
    props:["desktopDisplayPassMainVal","mobileDisplayPassMainVal","toComponentScrollTop"],
    data(){
        return {
            swiper     : null,
            page5Title_top:99999,
            page5STitle_top:false
        };
    },
    computed: {

    },
    methods:{
        toCompScrollTop(val){
            //console.log("toComponentScrollTop:",val);
            if(val > this.page5Title_top){
                this.page5STitle_top = true;
            }
        }
        // swClick(){
        //     this.swiper.update();
        // }
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
            let page5Top = document.querySelector("#page5").offsetTop;
            this.page5Title_top = document.querySelector(".page5Title").offsetTop + page5Top;
            //console.log("page5Title_top:",this.page5Title_top)

            this.swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 30
            });
        },500)


    },
    updated(){
        
        
    }
};
</script>

<template>
    <div id='page5'>
        <div :class="{'page1-bg picfx picfloat':desktopDisplayPassMainVal,'page1-mobile-bg':mobileDisplayPassMainVal}">
            <img src="~index_picSlideArea_mobile1.png" alt="" v-if="mobileDisplayPassMainVal" />
            <h2 class="linksTitle page5Title" :class="{movingDownFirst:true,on:page5STitle_top}">樂信瓦旦紀念公園落成典禮及特展開展記者會</h2>
        </div>
        <div class="linksStyle" :class="{'page1-mobile-bg':mobileDisplayPassMainVal,'linksDesktop':desktopDisplayPassMainVal}">
            <img src="~index_picSlideArea_mobile2.png" alt="" v-if="mobileDisplayPassMainVal" />
            <div class="slidePic">
                <div class="slidePicWrap">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><img src="~index_picSlideArea_pic1.jpg" alt="" /></div>
                            <div class="swiper-slide"><img src="~index_picSlideArea_pic2.jpg" alt="" /></div>
                            <div class="swiper-slide"><img src="~index_picSlideArea_pic3.jpg" alt="" /></div>
                            <div class="swiper-slide"><img src="~index_picSlideArea_pic4.jpg" alt="" /></div>
                            <div class="swiper-slide"><img src="~index_picSlideArea_pic5.jpg" alt="" /></div>
                            <div class="swiper-slide"><img src="~index_picSlideArea_pic6.jpg" alt="" /></div>
                            <div class="swiper-slide"><img src="~index_picSlideArea_pic7.jpg" alt="" /></div>
                            <div class="swiper-slide"><img src="~index_picSlideArea_pic8.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
                
                <div class="swiper-pagination slidePicPagination"><span></span></div>
                <div class="swiper-button-next slidePicBtn slidePicBtnL"></div>
                <div class="swiper-button-prev slidePicBtn slidePicBtnR"></div>
                
            </div>
        </div>

        <div class="cloud cloud01" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page5S_top,movingDelay2:true}"></div>
        <div class="cloud cloud02" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page5S_top,movingDelay3:true}"></div>

    </div>
</template>
<style lang='css'>
    .swiper-pagination-bullet{
        width: 12px;
        height: 12px;
        margin: 10px;
        background-color: #515151;
        opacity: 1;
    }
    @media screen and (max-width: 736px) {
        .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            margin: 4px;
            margin-top: 8px;
        }
    }
    .swiper-pagination-bullet-active{
        background-color: #cc9a9a;
    }
</style>
<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_scrollAnimation.scss';

    .picfx{
        width: 100%;
        min-height: 804px;
        background-size: cover;
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

    #page5{
        width: 100%;
        height: 804px;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
        }
        .page1-bg{ background-image: url("~index_picSlideArea_desktop.png"); z-index: 1;}

        .page1-mobile-bg{
            font-size: 0;
            @include SCREEN_1024 {
                position: relative;
            }
            >img{
                max-width: 100%;
            }
        }
    }
    .linksTitle{
        font-size: 40px;
        color: #573223;
        text-align: center;
        display: block;
        position: absolute;
        bottom: 640px;
        left: 50%;
        margin-left: -256.9px;
        width: 513.8px;
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
    .linksDesktop{
        position: absolute;
        top: 200px;
        left: 50%;
        margin-left: -512px;
        z-index: 2;
    }
    .slidePic{
        width: 1024px;
        height: 550px;
        @include SCREEN_1024 {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 20px;
            .slidePicWrap{
                max-width: 80%;
                margin: 0 auto;
                img{
                   max-width: 100%;
                }  
            } 
        }
        .slidePicBtn{
            @include boxSizingOriginal;
            top: 21px;
            width: 30px;
            padding: 0 15px;
            height: 100%;
            // background-size: contain;
            @include SCREEN_1024 {
                width: 20px;
                top: 0;
                padding: 0 10px;
            }
            @include SCREEN_736 {
                width: 15px;
                padding: 0 5px;
                background-size: 70%;
            }
        }
        .slidePicBtnR{
            background-image: url("~array2.png");
            left: -60px;
            @include SCREEN_1024 {
                left: 10px;
            }
        }
        .slidePicBtnL{
            background-image: url("~array.png");
            right: -60px;
            @include SCREEN_1024 {
                right: 10px;
            }
        }
        
    }
    .slidePicPagination{
        width: 100%;
    }
    .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color:#000;
        opacity: 1;
        background: rgba(0,0,0,0.2);
    }
    .swiper-pagination-bullet-active {
        color:#fff;
        background: #007aff;
    }


    .cloud{
        height: 746px;
    }
    .cloud01{
        background-image: url("~page5_cloud1.png");
    }
    .cloud02{
        background-image: url("~page5_cloud2.png");
    }
    
</style>
