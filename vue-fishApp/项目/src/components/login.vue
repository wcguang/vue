<template>
    <div class="scroll-content padding" id="index_login">
        <div class="list list-borderless">
            <div class="item item-thumbnail-left item-positive">
                <img src="../assets/img/9.jpg" style="margin:0;width:100%;height:100%;border-radius:50px;overflow:hidden;">
                <h1 class="light">login</h1>
            </div>
        </div>
        <form action="http://localhost:8080/login" method="get">
        <div class="list list-inset">
            <label class="item item-input">
                <i class="icon ion-android-person positive"></i>
                <input type="text" name="username" placeholder="用户名">
            </label>
            <label class="item item-input">
                <i class="icon ion-ios-unlocked-outline positive"></i>
                <input name="password" type="password" placeholder="密码">
            </label>
            <label class="item item-checkbox">
                <label class="checkbox">
                    <input type="checkbox" checked>
                </label>
                记住密码
            </label>
        </div>
        <input v-on:click="show" class="button button-block button-positive" type="submit" value="登录" name="">
        <router-link class="button button-block button-positive" to="reg">注册</router-link>
        </form>
    </div>
</template>
<script type="text/javascript">
    var login={
        data(){
            return{}
        },  
        methods:{
            show(){
                this.$store.dispatch('showUser')
                alert(this.$store.state.user)
            }
        }
    }
    export default login;
</script>
