<template>
    <div>
        <div class="h50"></div>
        <div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default footer " id="">
            <ul class="am-navbar-nav am-cf am-avg-sm-4">
                <li>
                    <router-link to="/home">
                        <span class=""><img src="../assets/images/nav.png"/></span>
                        <span class="am-navbar-label">点餐</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/say">
                        <span class=""><img src="../assets/images/nav2.png"/></span>
                        <span class="am-navbar-label">客说</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/we">
                        <span class=""><img src="../assets/images/nav3.png"/></span>
                        <span class="am-navbar-label">我们</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/my">
                        <span class=""><img src="../assets/images/nav4.png"/></span>
                        <span class="am-navbar-label">我的</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
