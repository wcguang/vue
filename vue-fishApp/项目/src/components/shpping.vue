<template>
    <div class="ppp">
        <!--顶部-->
        <div class="bar bar-header bar-positive  ">
            <h1 class="title">正品商场</h1>
            <a class="button button-clear icon ion-android-cart" href="shopcart.html"></a>
        </div>
        <!--内容-->
        <div>
            <div style="margin-top: 42px;">
                <table width="100%" style="border:1px;">
                    <tr>
                        <td>
                            <div style="margin:10px auto;width:50px;height:50px;">
                                <img src="../assets/img/3.jpg" style="margin:0;width:100%;height:100%;border-radius:50px;overflow:hidden;">
                            </div>
                            <p style="text-align:center">鱼竿</p>
                        </td>
                        <td>
                            <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                                <img src="../assets/img/3.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">浮漂</p>
                        </td>
                        <td>
                            <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                                <img src="../assets/img/4.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">饵料</p>
                        </td>
                        <td>
                            <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                                <img src="../assets/img/9.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">鱼线鱼钩</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                                <img src="../assets/img/55.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">装备</p>
                        </td>
                        <td>
                            <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                                <img src="../assets/img/66.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">鞋袜</p>
                        </td>
                        <td>
                            <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                                <img src="../assets/img/77.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">配件</p>
                        </td>
                        <td>
                            <div style="margin:10px auto;width:50px;height:50px;border-radius:50px;overflow:hidden;">
                                <img src="../assets/img/66.jpg" style="margin:0;width:100%;height:100%;">
                            </div>
                            <p style="text-align:center">配件售后</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div style="width:100%;height:2px;background-color:#E6E6FA;margin-bottom:4px"></div>
            <shoppingList></shoppingList>
        </div>
        <div style="height:50px;width:100%;clear:all"></div>
    </div>
</template>
<script type="text/javascript">
import shoppingList from "./shpiingList.vue"
var shopping = {
    data() {
        return {}
    },
    components: {
        shoppingList
    }
}
export default shopping;
</script>
<style type="text/css"></style>
