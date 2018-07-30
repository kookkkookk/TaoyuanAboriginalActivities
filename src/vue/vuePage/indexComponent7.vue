<script>
export default {
    props:["desktopDisplayPassMainVal","mobileDisplayPassMainVal","toComponentScrollTop"],
    data(){
        return {
            page7Title_top:99999,
            page7STitle_top:false,
        };
    },
    computed: {

    },
    methods:{
        toCompScrollTop(val){
            //console.log("toComponentScrollTop:",val);
            if(val > this.page7Title_top){
                this.page7STitle_top = true;
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
            let page7Top = document.querySelector("#page7").offsetTop;
            this.page7Title_top = document.querySelector(".page7Title").offsetTop + page7Top;
        },500)
    }
};
</script>

<template>
    <div id='page7'>

        <div :class="{'page1-bg picfx picfloat':desktopDisplayPassMainVal,'page1-mobile-bg':mobileDisplayPassMainVal}">
            <img src="~index_linksArea_mobile1.png" alt="" v-if="mobileDisplayPassMainVal" />
            <h2 class="linksTitle page7Title" :class="{movingDownFirst:true,on:page7STitle_top}">相關連結</h2>
        </div>

        <div :class="{'page2-bg picfx picfloat':desktopDisplayPassMainVal,'page2-mobile-bg':mobileDisplayPassMainVal}">
            <!-- <img src="~index_linksArea_mobile2.png" alt="" v-if="mobileDisplayPassMainVal" /> -->
            <ul class="linksGroup">
                <li :class="{movingVertical:true,on:page7STitle_top,movingDelay1:true}"><a href="http://www.tycg.gov.tw/" target="_blank"><span><img src="~index_linksArea_linkBtn1-1.png" alt="" /></span><h1>桃園市政府官網</h1></a></li>
                <li :class="{movingVertical:true,on:page7STitle_top,movingDelay2:true}"><a href="http://ipb.tycg.gov.tw/" target="_blank"><span><img src="~index_linksArea_linkBtn2-1.png" alt="" /></span><h1>原住民族行政局官網</h1></a></li>
                <li :class="{movingVertical:true,on:page7STitle_top,movingDelay3:true}"><a href="https://www.facebook.com/ipbtycg2/" target="_blank"><span><img src="~index_linksArea_linkBtn3-1.png" alt="" /></span><h1>原住民族行政局FB</h1></a></li>
                <li :class="{movingVertical:true,on:page7STitle_top,movingDelay4:true}"><a href="https://www.facebook.com/tyindigenousday" target="_blank"><span><img src="~index_linksArea_linkBtn4-1.png" alt="" /></span><h1>原住民族日活動FB</h1></a></li>
                <li :class="{movingVertical:true,on:page7STitle_top,movingDelay5:true}"><a href="http://ebook.tycg.gov.tw/book/content.php?id=117" target="_blank"><span><img src="~index_linksArea_linkBtn5-1.png" alt="" /></span><h1>台灣原住民族權利運動特刊</h1></a></li>
            </ul>
        </div>

        <div :class="{'page1-mobile-bg':mobileDisplayPassMainVal}">
            <img src="~index_linksArea_mobile2.png" alt="" v-if="mobileDisplayPassMainVal" />
        </div>

        <div class="cloud cloud01" v-if="desktopDisplayPassMainVal" :class="{movingOpacity:true,on:page7STitle_top,movingDelay2:true}"></div>
        <div class="music" v-if="desktopDisplayPassMainVal"></div>
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

    #page7{
        width: 100%;
        height: 468px;
        position: relative;
        @include SCREEN_1024 {
            width: 100%;
            height: auto;
        }
        .page1-bg{ background-image: url("~index_linksArea_desktop1.png"); z-index: 1; min-height: 202px;}
        .page2-bg{ background-image: url("~index_linksArea_desktop2.png"); z-index: 1; min-height: 266px; top:202px;}

        .page1-mobile-bg{
            font-size: 0;
            position: relative;
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
        bottom: 0;
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
    ul.linksGroup{
        width: 700px;
        height: auto;
        overflow: hidden;
        display: flex;
        position: absolute;
        top: 70px;
        left: 50%;
        margin-left: -350px;
        @include SCREEN_1024 {
            position: static;
            top: 0;
            left: 0;
            margin: 0 auto;
            margin-top: 20px;
        }
        /*@include SCREEN_736 {
            width: 80%;
            margin-left: 10%;
            left: 0;
            text-align: center;
            display: table;
        }*/
        @include SCREEN_736 {
            width: 100%;
            margin-left: 0;
            left: 0;
            top: 10px;
            text-align: center;
            display: table;
        }
        >li{
            display: block;
            width: (100%/5);
            float: left;
            background-size: 100px 100px;
            background-repeat: no-repeat;
            background-position: 50% 0%;
            /*@include SCREEN_736 {
                width: (100%/3);
                margin-bottom: 20px;
            }*/
            @include SCREEN_736 {
                width: (100%/3);
                height: 90px;
                margin-bottom: 10px;
                background-size: 50px 50px;

            }
            
            &:nth-child(1){ background-image: url("~index_linksArea_linkBtn1-2.png"); }
            &:nth-child(2){ background-image: url("~index_linksArea_linkBtn2-2.png"); }
            &:nth-child(3){ background-image: url("~index_linksArea_linkBtn3-2.png"); }
            &:nth-child(4){ background-image: url("~index_linksArea_linkBtn4-2.png"); }
            &:nth-child(5){ background-image: url("~index_linksArea_linkBtn5-2.png"); }
            
            &:hover:nth-child(1) >a >span{ opacity: 1; } 
            &:hover:nth-child(2) >a >span{ opacity: 1; }
            &:hover:nth-child(3) >a >span{ opacity: 1; }
            &:hover:nth-child(4) >a >span{ opacity: 1; }
            &:hover:nth-child(5) >a >span{ opacity: 1; }
            @include SCREEN_1024 {
                display: inline-block;
            }
           >a{
                display: block;
                width: 100%;
                height: auto;
                overflow: hidden;
               
                >span{
                    transition: all .3s;
                    opacity: 0;
                    display: block;
                    font-size: 0;
                    margin: 0 auto;
                    >img{
                        display: block;
                        width: 100px;
                        height: 100px;
                        margin: 0 auto;
                        @include SCREEN_736 {
                            width: 50px;
                            height: 50px;
                        }
                    }
                }
                >h1{
                   display: block;
                   width: 80%;
                   height: auto;
                   overflow: hidden;
                   text-align: center;
                   color: #573223;
                   padding: 0 2px;
                   margin: 0 auto;
                   font-size: 16px;
                   @include SCREEN_736 {
                       font-size: 12px;
                       padding: 0;
                   }
                }
           } 
        }
    }
    
    .cloud{
        height: 467px;
    }
    .cloud01{
        z-index: 0;
        background-image: url("~page7_cloud.png");
    }

    .music{
        width: 100%;
        height: 202px;
        position: absolute;
        top: 0px;
        left: 0;
        background-size: cover;
        background-position: 50% 0%;
        background-repeat: no-repeat;
        margin: 0 auto;
        background-image: url("~page7_music.gif");
        z-index: 1;
    }

</style>