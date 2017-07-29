<template>
    <div>
     <loading v-show="getLoading"></loading>
        <p style="background-color:#99BBFF  ">每天dd精彩部分</p>
        <ul class="list">
            <li v-for="(val,index) in arr" :key="val._id">
                <p>{{val.title}}</p>
                <!-- v-on:click.native="$root.$data.aa=false" -->
                <router-link class="item item-thumbnail-left" :to="{name:'details',params:{uuid:val._id}}">
                    <img src="../assets/img/3.jpg" />
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import {
    mapActions,
    mapGetters
} from 'vuex';
var content = {
    data() {
        return {
            arr: [],
        }
    },
    computed:mapGetters([
        'getFoot','getLoading'
        ]),
    mounted() {
        this.$store.dispatch('showLoading')
        setTimeout(()=>{
            this.$http({
                url: 'http://localhost:8080/list',
                method: 'GET',
                headers: {
                    "Content-Type": "http://localhost:8080/list"
                }
            }).then((res) => {
                console.log(res.data);
                this.arr = res.data
                this.$store.dispatch('hideLoading')

            }, (res) => {
                // alert(req)
                console.log(res)
            })
        }, 2000)


    }
}
export default content;
</script>
