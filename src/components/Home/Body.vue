<template>
    <HomeHeader />
    <HomeNav />
    <main>
        <div class="py-[2vh] w-[1180px] mx-auto">
            <HomeSlide />
            <HomeNews />
            <MiddleNav />
        </div>
        <div class="bg-slate-100 py-[4vh]">
            <HomeCards />
        </div>
    </main>
</template>

<script>
// import HomeFooter from './Footer.vue';
import HomeHeader from './Header.vue';
import HomeNav from './Nav.vue';
import HomeSlide from './Slide.vue'
import HomeNews from './News.vue';
import MiddleNav from './MiddleNav.vue';
import HomeCards from './CardSet.vue'
export default {
    name: 'HomeBody',
    components: {
        HomeHeader,
        HomeNav,
        HomeSlide,
        HomeNews,
        MiddleNav,
        HomeCards
    }
}
</script>



<style></style>