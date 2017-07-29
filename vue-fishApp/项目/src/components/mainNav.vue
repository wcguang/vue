<template>
<div>
      <!--顶部-->
    <div class="bar bar-header bar-positive item-input-inset ">
        <a class=" button button-clear icon ion-location"></a>苏州&nbsp;
        <label class="item-input-wrapper ">
            <i class="icon ion-ios-search  placeholder-icon"></i>
            <input type="search" placeholder="搜索钓场/技巧/关键字">
        </label>
        <a class="button button-clear icon ion-navicon"></a>
    </div>
    <table width="100%" border="1" cellpadding="1" cellspacing="1">
        <tr>
            <td>
                <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                    <img src="../assets/img/1.png" style="margin:0;width:100%;height:100%;">
                </div>
                <p style="text-align:center">钓场</p>
            </td>
            <td>
                <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                    <img src="../assets/img/2.png" style="margin:0;width:100%;height:100%;">
                </div>
                <p style="text-align:center">渔具店</p>
            </td>
            <td>
                <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                    <img src="../assets/img/3.png" style="margin:0;width:100%;height:100%;">
                </div>
                <p style="text-align:center">技巧</p>
            </td>
            <td>
                <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                    <img src="../assets/img/4.png" style="margin:0;width:100%;height:100%;">
                </div>
                <p style="text-align:center">饵料</p>
            </td>
        </tr>
        <tr>
            <td>
                <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                    <img src="../assets/img/5.png" style="margin:0;width:100%;height:100%;">
                </div>
                <p style="text-align:center">渔获</p>
            </td>
            <td>
                <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                    <img src="../assets/img/6.png" style="margin:0;width:100%;height:100%;">
                </div>
                <p style="text-align:center">问答</p>
            </td>
            <td>
                <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                    <img src="../assets/img/7.png" style="margin:0;width:100%;height:100%;">
                </div>
                <p style="text-align:center">装备</p>
            </td>
            <td>
                <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                    <img src="../assets/img/8.png" style="margin:0;width:100%;height:100%;">
                </div>
                <p style="text-align:center">展会</p>
            </td>
        </tr>
    </table>
    <contenta></contenta>

    </div>
</template>
<script>
import contenta from './content.vue'
    var mainNav={
        data(){
            return {}
        },
        components:{
            contenta
        }
    }
    export default mainNav;
</script>
<style type="text/css"></style>