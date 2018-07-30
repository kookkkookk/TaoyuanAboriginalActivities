<script>
export default {
    props:["desktopDisplayPassMainVal","mobileDisplayPassMainVal","toComponentScrollTop"],
    data(){
        return {
            page2:99999,
            page2S_top:false,

        };
    },
    computed: {

    },
    methods:{
        toCompScrollTop(val){
            // console.log("toComponentScrollTop:",val);
            if(val > this.page2){
                this.page2S_top = true;
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
            this.page2 = document.querySelector("#page2").offsetTop;
            //console.log("page2:",this.page2)
        },500)
        
    }

};
</script>

<template>
    <div id='page2'>
        <div :class="{'page1-bg picfx picfloat':desktopDisplayPassMainVal ,'page1-mobile-bg':mobileDisplayPassMainVal}">
            <img src="~index_TV_mobile3.png" alt="" v-if="mobileDisplayPassMainVal">
        </div>

        <div :class="{'page2-bg picfx picfloat':desktopDisplayPassMainVal ,'page2-mobile-bg':mobileDisplayPassMainVal}" >
            <img src="~index_TV_mobile2.png" alt="" v-if="mobileDisplayPassMainVal">
            <div class="youtubeDiv">
                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/kPd_jH0oiHA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        
        <div :class="{'page3-bg picfx picfloat':desktopDisplayPassMainVal ,'page3-mobile-bg':mobileDisplayPassMainVal}">
            <img src="~index_TV_mobile1.png" alt="" v-if="mobileDisplayPassMainVal">
        </div>

        <div class="cloud cloud01" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page2S_top,movingDelay1:true}"></div>
        <div class="music" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page2S_top}"></div>

        <div class="cloud_mobile" v-if="mobileDisplayPassMainVal"><img src="~page2_cloud_mobile.png" alt="" /></div>

    </div>
</template>

<style lang='scss' scoped>
    @import '../../css/scss/_mixin.scss';
    @import '../../css/scss/_scrollAnimation.scss';
    .picfx{
        width: 100%;
        min-height: 728px;
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

    #page2{
        width: 100%;
        height: 728px;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
        }
        .page1-bg{ background-image: url("~index_TV_desktop3.png"); z-index: 1; min-height: 251px; }
        .page2-bg{ background-image: url("~index_TV_desktop2.png"); z-index: 2; min-height: 226px; top:251px;}
        .page3-bg{ background-image: url("~index_TV_desktop1.png"); z-index: 1; min-height: 251px; top:477px;}

        .page1-mobile-bg ,.page2-mobile-bg, .page3-mobile-bg{
            position: relative;
            font-size: 0;
            >img{
                max-width: 100%;
            }
        }
        .youtubeDiv{
            width: 405px;
            height: 0;
            padding-bottom: 227px;
            z-index: 1;
            position: relative;
            display: block;
            margin: 0 auto;
            @include SCREEN_1024 {
                width: 46%;
                height: 0;
                padding-bottom: 26.25%;
                z-index: 1;
                position: absolute;
                top: 0;
            }
            >iframe{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                margin-left: 15px;
                @include SCREEN_1024 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    margin-left: 59%;
                }
            }
        } 
    }
    .cloud{
        height: 622px;
    }
    .cloud01{
        background-image: url("~page2_cloud1.png");
    }
    .music{
        width: 100%;
        height: 622px;
        position: absolute;
        top: 106px;
        left: 0;
        z-index: 1;
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        margin: 0 auto;
        background-image: url("~page2_cloud.gif");
    }
</style>
