<template>
    <div class="scroll-content padding" id="index_login">
        <div class="list list-borderless">
            <div class="item item-image">
                <img src="../assets/img/9.jpg" style="background-size:100%;">
            </div>
        </div>
        <form action="http://localhost:8080/reg" method="post">
            <div class="list list-inset">
                <label class="item item-input">
                    <input name="username" type="text" placeholder="用户名">
                </label>
                <label class="item item-input">
                    <input name="password" type="password" placeholder="密码">
                </label>
                <label class="item item-input">
                    <input name="nextpassword" type="password" placeholder="确认密码">
                </label>
            </div>
            <input class="button button-block button-royal" type="submit" value="注册" name="">
        </form>
    </div>
</template>
