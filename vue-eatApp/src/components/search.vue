<template>
    <div>
        <header data-am-widget="header" class="am-header am-header-default header">
            <div class="am-header-left am-header-nav">
                <a href="javascript:window.history.back();" class="">
                    <i class="am-header-icon am-icon-angle-left"></i>
                </a>
            </div>
            <h1 class="am-header-title"> <a href="#title-link" class="" style="color: #333;">厨房妈妈</a></h1>
            <div class="am-header-right am-header-nav">
                <a href="#right-link" class=""> </a>
            </div>
        </header>
        <div class="search-input">
            <input type="text" placeholder="请输入您搜索的内容" />
        </div>
        <ul class="paixu">
            <li><a href="">默认</a></li>
            <li><a href="">销量</a></li>
            <li><a href="">价格</a></li>
        </ul>
        <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
            <li v-for="(val,index) in arr" :key="val._id">
                <div class="am-gallery-item">
                    <router-link to="details">
                        <!-- <img :src="" alt="" /> -->
                        <h3 class="am-gallery-title">{{val.title}}</h3>
                        <div class="am-gallery-desc">
                            <em>{{val.price}}</em><i class="am-icon-cart-plus"></i>
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    var search={
        data(){
            return {
                arr:[]
            }
        },
        mounted(){
            this.$http({
                url:'http://localhost:8001/list',
                method:'GET'
            }).then((res)=>{
                console.log(res.data)
                this.arr=res.data;
            },(res)=>{})
        }
    }
    export default search;
</script>
