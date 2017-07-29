<template>
    <div data-am-widget="intro" class="am-intro am-cf am-intro-default">
        <div class="am-intro-hd">
            <h2 class="am-intro-title">功效</h2>
        </div>
        <div v-for="(val,index) in arr" :key="val._id" class="am-g am-intro-bd">
            <router-link :to="{name:'text',params:{uuid:val._id}}">
                <div class="am-intro-left am-u-sm-3"><img src="../assets/images/p.png" /></div>
            </router-link>
            <div class="am-intro-right am-u-sm-9">
                <h2>{{val.title}}</h2>
                <p>{{val.subtitle}}</p>
                <div class="text">
                    <span class="fl">{{val.date}}</span>
                </div>
            </div>
            <span v-on:click="ente(index)" class="fr">点赞<i class="am-icon-thumbs-o-up"></i>{{val.zan}}</span>
        </div>
    </div>
</template>
<script type="text/javascript">
var listText = {
    data() {
        return {
            arr: [],
            num: 0
        }
    },
    methods: {
        // ente(index) {
        //     this.$http({
        //         url: 'http://localhost:8001/enter',
        //         method: 'POST'
        //     }).then((res) => {
        //         alert()
        //             // this.arr[index].zan++;
        //             // console.log(this.arr[index].zan)
        //     }, (res) => {})
        // }

    },
    mounted() {
        this.$http({
                url: 'http://localhost:8001/enter',
                method: 'POST'
            }).then((res) => {
                alert(res.data)
                    // this.arr[index].zan++;
                    // console.log(this.arr[index].zan)
            }, (res) => {}),
            this.$http({
                url: 'http://localhost:8001/list',
                method: 'GET'
            }).then((res) => {
                console.log(res.data)
                this.arr = res.data;
            }, (res) => {})
    }
}
export default listText;
</script>
