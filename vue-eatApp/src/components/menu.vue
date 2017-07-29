<template>
	<ul class="nav">
            <li>
                <router-link tag="p" to="/search">
                    <img src="../assets/images/icon.jpg" />
                    <p>最新推荐</p>
                    </router-link>
            </li>
            <li>
               <router-link tag="p" to="/search">
                    <img src="../assets/images/icon1.jpg" />
                    <p>热门菜谱</p>
                </router-link>
               
            </li>
            <li>
                <router-link tag="p" to="/search">
                    <img src="../assets/images/icon2.jpg" />
                    <p>人气菜肴</p>
                </router-link>
            </li>
            <li>
                 <router-link tag="p" to="/discount">
                    <img src="../assets/images/icon3.jpg" />
                    <p>优惠券</p>
                    </router-link>
            </li>
        </ul>
</template>