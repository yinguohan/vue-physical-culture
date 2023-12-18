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
        <div class="py-[8vh] w-[1180px] mx-auto">
            <SedMenu />
        </div>
        <div class="py-[8vh] mx-auto bg-slate-100">
            <QRCode />
        </div>
        <div class="mx-auto py-[6vh] w-[1180px]">
            <PartnerLinks />
        </div>

    </main>

    <div class="bg-[#403e3f]">
        <HomeFooter />
    </div>
</template>

<script>
import HomeFooter from './components/Footer.vue';
import QRCode from './components/QRCode.vue';
import HomeHeader from './components/Header.vue';
import HomeNav from './components/Nav.vue';
import HomeSlide from './components/Slide.vue'
import HomeNews from './components/News.vue';
import MiddleNav from './components/MiddleNav.vue';
import HomeCards from './components/CardSet.vue'
import SedMenu from './components/SedMenu.vue';
import PartnerLinks from './components/PartnerLinks.vue';


export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        HomeNav,
        HomeSlide,
        HomeNews,
        MiddleNav,
        HomeCards,
        SedMenu,
        QRCode,
        PartnerLinks,
        HomeFooter
    }
}
</script>