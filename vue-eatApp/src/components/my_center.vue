<template>
    <div>
        <div class="member">
            <div class="member-pic">
                <img src="../assets/images/default_photo.png" />
            </div>
            <div class="member-infor">157****8547</div>
        </div>
        <ul class="member-nav">
            <li>
            <router-link to="/my/addres">
            <i class="am-icon-map-marker"></i><span>收货地址</span>
            </router-link>
   
            </li>
            <li>
            <router-link to="/my/dingdan">
          <i class="am-icon-newspaper-o"></i><span>我的订单</span>
          </router-link>
          </li>
            <li><a href="javascript:;"><i class="am-icon-cart-arrow-down"></i><span>购物车</span></a></li>
            <li><a href="javascript:;"><i class="am-icon-bell-o"></i><span>系统通知</span></a></li>
            <li><a href="javascript:;"><i class="am-icon-credit-card"></i><span>会员卡</span></a></li>

            <li>
            <router-link to="/my/discount">
            <i class="am-icon-cc-mastercard"></i><span>优惠券</span>
            </router-link>
            </li>

            <li><a href="javascript:;"><i class="am-icon-dollar"></i><span>积分</span></a></li>
        </ul>
        <ul class="member-nav mt">
            <li><a href="javascript:;"><i class="am-icon-phone"></i>联系我们</a></li>
        </ul>
    </div>
</template>
