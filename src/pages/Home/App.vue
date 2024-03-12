<template>
  <HomeHeader />
  <HomeNav />
  <main style="padding-left: 10%; padding-right: 10%">
    <div class="py-[2vh] mx-auto">
      <div class="module-2nd flex">
        <div class="module-2nd__left flex-1 pl-[6px] pr-[6px]">
          <HomeSlide />
        </div>
        <div class="module-2nd__middle flex-1 bg-black">module-2nd__middle</div>
        <div class="module-2nd__rgiht flex-1 bg-[#403e3f]">
          module-2nd__rgih
        </div>
      </div>
      <HomeNews />
    </div>
    <div class="py-[8vh] w-[1180px] mx-auto">
      <SedMenu />
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
import HomeFooter from "./components/Footer.vue";
import HomeHeader from "./components/Header.vue";
import HomeNav from "./components/Nav.vue";
import HomeSlide from "./components/Slide.vue";
import HomeNews from "./components/News.vue";
import SedMenu from "./components/SedMenu.vue";
import PartnerLinks from "./components/PartnerLinks.vue";
export default {
  name: "HomePage",
  components: {
    HomeHeader,
    HomeNav,
    HomeSlide,
    HomeNews,
    SedMenu,
    PartnerLinks,
    HomeFooter,
  },
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
