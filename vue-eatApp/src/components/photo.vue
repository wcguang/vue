<template>
    <div>
        <center></center>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
import center from './my_center.vue'
    var my={
        data(){
            return {}
        },
        components:{
            center
        }
    }
    export default my;
</script>   