<template>
<div>
	<banner></banner>
   <navbar></navbar>
   <listText></listText>
</div>
</template>
<script type="text/javascript">
import banner from './banner.vue'
import navbar from './menu.vue'
import listText from './listText.vue'
    var say={
        data(){
            return {}
        },
        components:{
            banner,
            navbar,
            listText
        }
    }
    export default say;
</script>