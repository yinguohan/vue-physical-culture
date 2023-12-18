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
        <div class="bg-[#403e3f]">
            <HomeFooter />
        </div>
    </main>
</template>

<script>
import HomeFooter from './Footer.vue';
import QRCode from './QRCode.vue';
import HomeHeader from './Header.vue';
import HomeNav from './Nav.vue';
import HomeSlide from './Slide.vue'
import HomeNews from './News.vue';
import MiddleNav from './MiddleNav.vue';
import HomeCards from './CardSet.vue'
import SedMenu from './SedMenu.vue';
import PartnerLinks from './PartnerLinks.vue';
export default {
    name: 'HomeBody',
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