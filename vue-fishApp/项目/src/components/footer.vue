<template>
	 <div class="tabs tabs-positive tabs-icon-top">
        <a class="tab-item active" href="javascript:;">
            <i class="icon ion-ios-home-outline"></i>
            <router-link to="/index">首页</router-link>
                
        </a>
        <a class="tab-item"  href="javascript:;">
            <i class="icon ion-ios-paper-outline"></i>
            <router-link to="/shopping">商场</router-link>
        </a>
        <a class="tab-item has-badge active" href="javascript:;">
            <i class="icon ion-ios-eye-outline"></i>
            <router-link to="/more">更多</router-link>
        </a>
        <a class="tab-item" href="javascript:;">
            <i class="icon ion-ios-person-outline"></i>
            <router-link to="/my">我</router-link>
        </a>
         
    </div>
</template>