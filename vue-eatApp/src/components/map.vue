<template>
    <div>
        <slot name='a'></slot>
        <div style="width:100%;height:150px;border:#ccc solid 1px;font-size:12px" id="allmap"></div>
    </div>
</template>
<script type="text/javascript">
var map = {
        data() {
            return {}
        },
        mounted() {
            //创建和初始化地图函数：
            var map = new BMap.Map("allmap"); // 创建Map实例
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            var local = new BMap.LocalSearch(map, {
                renderOptions: {
                    map: map,
                    autoViewport: true
                }
            });
            local.searchNearby("小吃", "前门");

        }
        }
        export default map;
</script>
