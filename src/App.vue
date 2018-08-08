<template>
<div class="app-layout">
      <header>
        <router-link class="rout" tag="li" :to="{name: 'home'}">home</router-link>
        <router-link class="rout" tag="li":to="{name: 'about'}" >about</router-link>
        <router-link class="rout" tag="li" :to="{name: 'we'}" >what ever</router-link>
    </header>
    <router-view></router-view>
</div>
</template>
<script>
    import tiles from './components/tiles.vue'
    import elem from './components/elem.vue'
    import page from './components/page.vue'
export default {
        components:{
            tiles,
            elem,
            page
        },
    name: 'app'
};
</script>
<style>
.active{
    font-weight:bold;
}
    .rout:hover{
        background: #786b59;
        color: #ffe;
    }
.rout{
    margin: 10px;
}

header{
        list-style-type: none;
        width: 90%;
        padding: 20px;
        border: 1px solid black;
        display: inline-flex;
    }

</style>
