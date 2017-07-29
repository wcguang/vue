<template>
    <div>
        <banner></banner>
        <navBar></navBar>
        <listHome></listHome>
    </div>
</template>
<script type="text/javascript">
import banner from './banner.vue';
import navBar from './menu.vue';
import listHome from './list.vue';
var home = {
    data() {
        return {}
    },
    components: {
        banner,
        navBar,
        listHome
    }
}
export default home;
</script>
