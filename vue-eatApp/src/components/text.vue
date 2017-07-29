<template>
    <div>
        <header data-am-widget="header" class="am-header am-header-default header">
            <div class="am-header-left am-header-nav">
                <!--  <a href="#left-link" class="">  -->
                <i v-on:click="back()" class="am-header-icon am-icon-angle-left"></i>
                </a>
            </div>
            <h1 class="am-header-title"> <a href="javascript:;" class="" style="color: #333;">厨房妈妈</a></h1>
        </header>
        <div class="content">
            <h1>{{arr.title}}</h1>
            <div class="text"><span class="fl">{{arr.date}}</span><span class="fr"><i class="am-icon-thumbs-o-up"></i>&nbsp;点赞{{arr.zan}}</span></div>
            <div v-html='arr.content'></div>
           <!--  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。</p>
            <p>  排毒排便－香蕉牛奶汁</p>
            <p>  适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！</p>
            <br />
            <br />
            <p>  止咳防晕－芒果汁</p>
            <p>  退火利尿－椰子汁</p>
            <p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p>
            <p>  水果之王－奇异果汁</p> -->
        </div>
        <div data-am-widget="duoshuo" class="am-duoshuo am-duoshuo-default" data-ds-short-name="amazeui">
            <div class="ds-thread">
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
var text = {
    data() {
        return {
            arr:[]
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    },
    mounted() {
        this.$http({
            url: 'http://localhost:8001/list',
            method: 'GET'
        }).then((res) => {
            // console.log(res.data[this.$route.params.uuid-1])
            this.arr = res.data[this.$route.params.uuid-1];
            console.log(this.arr)
        }, (res) => {})
    }
}
export default text;
</script>
