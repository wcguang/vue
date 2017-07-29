<template>
    <div>
        <!--顶部-->
        <div class="bar bar-header bar-positive item-input-inset ">
            <h1 class="title">我的信息</h1>
            <a class="button button-clear icon ion-person-stalker" href="myinfo.html"></a>
        </div>
        <!--内容-->
        <div>
            <div style="width:70px;height:70px;"></div>
            <div style="margin:10px auto;width:100px;height:100px;border-radius:50px;overflow:hidden;">
                <img src="../assets/img/3.jpg" style="margin:0;width:100%;height:100%;">
            </div>
            <p style="text-align:center">无</p>
            <router-link v-show="getReg" to="login">登录</router-link>
            <router-link v-show="getReg" to="reg">注册</router-link>
            <a v-show='getUser' v-on:click="hide" href="javascript:;">退出登录</a>
            <div>
                <hr style="height:2px;background-color:#E6E6FA;border:0px">
                <table width="95%" border="1" cellpadding="1" cellspacing="1">
                    <tr>
                        <td>
                            <p style="text-align:center">0</P>
                            <p style="text-align:center">帖子</p>
                        </td>
                        <td>
                            <p style="text-align:center">10</P>
                            <p style="text-align:center">关注</p>
                        </td>
                        <td>
                            <p style="text-align:center">12</P>
                            <p style="text-align:center">粉丝</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <ul class="list">
                    <li style="background-color:#E6E6FA;border:0px" class="item item-toggle item-button-right icon ion-ios-calendar-outline">
                        我的订单
                        <a class="button button-clear icon ion-ios-arrow-right"></a>
                    </li>
                </ul>
                <table width="100%" border="1" cellpadding="1" cellspacing="1">
                    <tr>
                        <td>
                            <div style="margin:0px auto;width:35px;height:35px;overflow:hidden;">
                                <img src="../assets/img/11.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">待付款</p>
                        </td>
                        <td>
                            <div style="margin:0px auto;width:40px;height:40px;overflow:hidden;">
                                <img src="../assets/img/22.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">待发货</p>
                        </td>
                        <td>
                            <div style="margin:0px auto;width:40px;height:40px;overflow:hidden;">
                                <img src="../assets/img/33.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">待收货</p>
                        </td>
                        <td>
                            <div style="margin:0px auto;width:40px;height:40px;overflow:hidden;">
                                <img src="../assets/img/44.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">待评价</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <ul class="list">
                    <li class="item item-toggle item-button-right icon ion-ios-folder-outline">
                        每日签到
                        <a class="button button-clear icon ion-ios-arrow-right"></a>
                    </li>
                    <li class="item item-toggle item-button-right icon ion-ios-star-outline">
                        金币商场
                        <a class="button button-clear icon ion-ios-arrow-right"></a>
                    </li>
                    <li class="item item-toggle item-button-right icon ion-ios-person-outline">
                        我的钓场
                        <a class="button button-clear icon ion-ios-arrow-right"></a>
                    </li>
                </ul>
            </div>
        </div>
        <div style="height:50px;width:100%;clear:all"></div>
    </div>
</template>
<script type="text/javascript">
import {
    mapActions,
    mapGetters
} from 'vuex'
var user = {
    data() {
        return {

        }
    },
    methods:{
        hide(){
            this.$store.dispatch('hideUser')
            this.$store.dispatch('showReg')
        }
    },
    computed: mapGetters(['getUser','getReg']),
    mounted() {
        // if (this.getUser) {
        if (this.$cookie.get('name')) {
            this.$store.dispatch('hideReg')
            this.$store.dispatch('showUser')
            // alert(this.$store.state.reg)
            this.$http.get('http://localhost:8080/user').then((res) => {
                console.log(res.data)
                alert(res.data)
            }, (res) => {})
        }
    }
}
export default user;
</script>
