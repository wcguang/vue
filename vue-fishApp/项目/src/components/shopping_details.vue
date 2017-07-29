<template>
    <div>
        <div id="my_info">
            <div class="bar bar-header bar-positive  ">
                <a class="button button-clear icon ion-ios-arrow-left" v-on:click="back(-1)" href="javascript:;"></a>
                <h1 class="title">新闻详情</h1>
            </div>
            <div class="scroll-content has-header">
               {{arr.content}}
            </div>
        </div>
    </div>
    </div>
</template>
<script type="text/javascript">
var details = {
    data() {
        return {
            arr:{}
        }
    },
    methods: {
        back: function(n) {
            this.$router.go(n)
        }
    },
    mounted(){
        // this.$http({
        //         url: '/src/data/index.data',
        //         method: 'GET'
        //     }).then((res) => {
        //         // console.log(res.data[0]);
        //         this.arr = res.data[this.$route.params.uuid-1]

        //     }, (req) => {
        //         console.log(res.data.status)
        //     })

        this.$http({
            url:'http://localhost:8080/list',
            method:'GET'
        }).then((res)=>{
            console.log(this.$route.params)
            this.arr=res.data[this.$route.params.uuid-1]
        },(res)=>{})


    }

}
export default details;
</script>
