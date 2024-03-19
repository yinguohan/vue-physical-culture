<script>
import HomeFooter from "./components/Footer.vue";
import HomeHeader from "./components/Header.vue";
import HomeNav from "./components/Nav.vue";
import HomeSlide from "./components/Slide.vue";
import SedMenu from "./components/SedMenu.vue";
import InfoShow from "./components/InfoShow.vue";
export default {
  name: "HomePage",
  components: {
    HomeHeader,
    HomeNav,
    HomeSlide,
    SedMenu,
    HomeFooter,
    InfoShow
  },
};
</script>
<template>
  <HomeHeader />
  <HomeNav />
  &nbsp;
  <main style="padding-left: 10%; padding-right: 10%">
    <div class="grid-content ep-bg-purple" />
    <el-row>
      <el-col :span="21">
        <el-row :gutter="20">
          <el-col :span="7"><HomeSlide /></el-col>
          <el-col :span="7" class="two_div"><InfoShow/></el-col>
          <el-col :span="10" class="three_div"><InfoShow/></el-col>
        </el-row>
      </el-col>
      <el-col :span="3" class="for_div">客服</el-col>
    </el-row>
    &nbsp;
    <el-row>
      <el-col :span="21">
        <el-row :gutter="20">
          <el-col :span="14"><InfoShow/></el-col>
          <el-col :span="10" class="three_div"><InfoShow/></el-col>
        </el-row>
      </el-col>
      <el-col :span="3" class="for_div">用户</el-col>
    </el-row>
    &nbsp;
    <el-row>
      <el-col :span="21">
        <InfoShow/>
      </el-col>
      <el-col :span="3" class="for_div">教练</el-col>
    </el-row>
    <div class="py-[8vh] w-[1180px] mx-auto">
      <SedMenu />
    </div>
  </main>

  <div class="bg-[#403e3f]">
    <HomeFooter />
  </div>
</template>

<style>
.el-col {
  border-radius: 4px;
}
.for_div {
  background-color: rgb(241, 125, 79);
}
</style>
