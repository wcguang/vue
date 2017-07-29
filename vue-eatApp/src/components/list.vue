<template>
    <div>
        <div data-am-widget="titlebar" class="am-titlebar am-titlebar-default title">
            <h2 class="am-titlebar-title ">   积分菜品 </h2>
            <nav class="am-titlebar-nav">
                <a href="javascript:;" class="">more &raquo;</a>
            </nav>
        </div>
        <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
            <li v-for="(val,index) in arr">
                <div class="am-gallery-item">
                    <router-link to="/details">
                        <img :src="val.img" alt="" />
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
    var list={
        data(){
            return {
                arr:[]
            }
        },
        mounted(){
            this.$http({
                url: 'http://localhost:8001/listimg',
                method: 'GET',
                headers: {
                    "Content-Type": "http://localhost:8001/listimg"
                }
            }).then((res) => {
                console.log(res.data);
                this.arr=res.data

            }, (res) => {
                // alert(req)
                console.log(res)
            })
        }
    }
    export default list;
</script>
