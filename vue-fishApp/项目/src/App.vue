<template>
    <div id="app">
    <!-- <loading v-show="getLoading"></loading> -->
        <!--内容-->
        <router-view></router-view>
        <!-- 底部--><!--  v-show="$root.$data.aa" -->
        <foot v-show="getFoot"></foot>
    </div>
</template>
<script>
import foot from './components/footer.vue';
import {mapActions,mapGetters} from 'vuex';
export default {
    name: 'app',
    data() {
        return {
            msg: ''
        }
    },
    methods:{
        changeRoute(path){
            if(path.indexOf('details')!=-1){
                this.$store.dispatch('hideFoot')
            }
            if(path.indexOf('details')==-1){
                this.$store.dispatch('showFoot');
            }
        }
    },
     watch:{
        $route(to){
             this.changeRoute(to.path)
        }
    },
    computed:mapGetters([
        'getFoot'
        ]),
    components: {
        foot
    },
    mounted() {
             this.changeRoute(this.$route.path)
    }
}
</script>
<style scoped>
.slider {
    height: 34%;
}

.slider-slide {
    color: #000;
    text-align: center;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
}

.a {
    background-image: url(./assets/img/55.jpg);
    background-size: 100% 100%;
}

.b {
    background-image: url(./assets/img/66.jpg);
    background-size: 100% 100%;
}

.c {
    background-image: url(./assets/img/66.jpg);
    background-size: 100% 100%;
}

.box {
    height: 100%;
}

.box h3 {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
</style>
