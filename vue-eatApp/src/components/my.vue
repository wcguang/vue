<template>
    <div>
        <center v-show="getUser"></center>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
import center from './my_center.vue'
import {mapActions,mapGetters} from 'vuex'
    var my={
        data(){
            return {}
        },
        mounted(){
            console.log(this.$route.path)
            this.show(this.$route.path)
        },
        watch:{
            $route(to){
                this.show(to.path)
                console.log(to)
            }
        },
        methods:{
            show(path){
                if(path.indexOf('addres')!=-1||path.indexOf('discount')!=-1||path.indexOf('dingdan')!=-1){

                    this.$store.dispatch('hideUser')
                    this.$store.dispatch('hideFoot')

                }else{
                    this.$store.dispatch('showUser')
                    this.$store.dispatch('showFoot')
                }
            }
        },
        computed:mapGetters(['getUser']),
        components:{
            center
        }
    }
    export default my;
</script>   