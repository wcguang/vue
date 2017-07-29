<template>
    <div id="app">
    <router-view></router-view>
      <foot v-show='getFoot'></foot>
    </div>
</template>
<script>
import foot from './components/footer.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed:mapGetters(['getFoot']),
    mounted(){
         console.log(this.$route.path)
        this.show(this.$route.path)
    },
    watch:{
        $route(to){
            this.show(to.path)
        }
    },
    methods:{
        show(path){
            if(path=='/text'||path=='/details'||path=='/search'){
                this.$store.dispatch('hideFoot')
            }
            if(path=='/home'||path=='/say'||path=='/we'||path=='/my'){
                this.$store.dispatch('showFoot')
            }
        }
    },
    components:{
      foot
    }
}
</script>
<style>
</style>
