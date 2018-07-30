<script>
import indexComponent1 from "indexComponent1";
import indexComponent2 from "indexComponent2";
import indexComponent3 from "indexComponent3";
import indexComponent4 from "indexComponent4";
import indexComponent5 from "indexComponent5";
import indexComponent6 from "indexComponent6";
import indexComponent7 from "indexComponent7";
import indexFooter from "indexFooter";
export default {
    components:{
        indexComponent1,
        indexComponent2,
        indexComponent3,
        indexComponent4,
        indexComponent5,
        indexComponent6,
        indexComponent7,
        indexFooter
    },
    props:["mainScrollTop"],
    data(){
        return {
            screenWidth: null,
            isDesktopDisplay: true,
            isMobileDisplay: false
        };
    },
    computed: {

    },
    watch:{
        mainScrollTop(val){
            // console.log("mainScrollTop:",val);
        },
        screenWidth (val) {

            // this.$router.push("/index/");
        }
    },
    methods:{
        handleResize(e){
            this.screenWidth = document.body.clientWidth;
            // console.log("this.screenWidth:",this.screenWidth);
            if(this.screenWidth < 1024){
                this.isDesktopDisplay = false;
                this.isMobileDisplay = true;
            }else{
                this.isDesktopDisplay = true;
                this.isMobileDisplay = false;
            }
        },
        isHideIndex(val){
            this.$emit("isHideIndex",val)
        },
        isShowOther(val){
            this.$emit("isShowOther",val)
        },
    },
    created(){

    },
    mounted(){ 
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    }
};
</script>

<template>
    <section>
        <index-component1
            :desktopDisplayPassMainVal="isDesktopDisplay"
            :mobileDisplayPassMainVal="isMobileDisplay"
            :toComponentScrollTop="mainScrollTop"
        ></index-component1>

        <index-component2
            :desktopDisplayPassMainVal="isDesktopDisplay"
            :mobileDisplayPassMainVal="isMobileDisplay"
            :toComponentScrollTop="mainScrollTop"
        ></index-component2>

        <index-component3
            :desktopDisplayPassMainVal="isDesktopDisplay"
            :mobileDisplayPassMainVal="isMobileDisplay"
            :toComponentScrollTop="mainScrollTop"
            @isIndexHTML="isHideIndex"
            @isIndexOther="isShowOther"
        ></index-component3>

        <index-component4
            :desktopDisplayPassMainVal="isDesktopDisplay"
            :mobileDisplayPassMainVal="isMobileDisplay"
            :toComponentScrollTop="mainScrollTop"
            @isIndexHTML="isHideIndex"
            @isIndexOther="isShowOther"
        ></index-component4>

        <index-component5
            :desktopDisplayPassMainVal="isDesktopDisplay"
            :mobileDisplayPassMainVal="isMobileDisplay"
            :toComponentScrollTop="mainScrollTop"
        ></index-component5>

        <index-component6
            :desktopDisplayPassMainVal="isDesktopDisplay"
            :mobileDisplayPassMainVal="isMobileDisplay"
            :toComponentScrollTop="mainScrollTop"
        ></index-component6>

        <index-component7
            :desktopDisplayPassMainVal="isDesktopDisplay"
            :mobileDisplayPassMainVal="isMobileDisplay"
            :toComponentScrollTop="mainScrollTop"
        ></index-component7>

        <index-footer
            :desktopDisplayPassMainVal="isDesktopDisplay"
            :mobileDisplayPassMainVal="isMobileDisplay"
        ></index-footer>
        
    </section>
</template>

<style lang='scss' scoped>
    //@import '../../css/scss/_mixin.scss';
    section{
        width: 100%;
        height: auto;
        // background-color: #555;
    }
</style>
