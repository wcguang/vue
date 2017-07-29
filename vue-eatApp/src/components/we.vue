<template>
    <div>
        <banner></banner>
        <div class="am-tabs qiehuan" data-am-tabs>
            <ul class="am-tabs-nav am-nav am-nav-tabs">
                <li class="am-active"><a href="javascript:;">店铺介绍</a></li>
            </ul>
            <div class="am-tabs-bd">
                <div class="am-tab-panel am-fade am-in am-active" id="tab1">
                    妈妈厨房是一家24小时经营以港式粤菜为基础的中西融合菜，特聘香港融合菜大师主理，打造新派主题时尚餐厅。它专业的厨师团队，开发和研究新派融合菜，定期推出特色菜品，聘请专业艺术团队研发造型，让茉莉每一款菜品成为一件艺术品，让客人感受别样的饮食文化。
                    <maps>
                        <iframe slot="a" width="100%" height="100%"></iframe>
                    </maps>
                </div>

            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import banner from './banner.vue'
import maps from './map.vue'
var we = {
    data() {
        return {}
    },
    components: {
        banner,
        maps
    }
}
export default we
</script>
