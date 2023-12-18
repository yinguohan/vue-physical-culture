<template>
    <div class="flex justify-between space-x-2 rounded bg-slate-100">
        <div class="inline-flex px-6 py-4 w-48 rounded bg-main-teal nav-icon">
            <img src="@/assets/home/ksrk.png" class="w-auto" alt="快速入口">
        </div>
        <div class="flex flex-wrap px-5 py-2 text-sm">
            <div class="py-2 mr-4 hover-teal-text" v-for="(item, index) in nav_items" :key="index">
                <a target="_blank" :href="item.url">{{ item.text }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeMiddleNav',
    data() {
        return {
            nav_items: [
                { 'text': '学籍学历信息管理平台', 'url': 'https://xjxl2.chsi.com.cn/htgl/' },
                { 'text': '来华留学生学籍学历管理平台', 'url': 'https://sic.chsi.com.cn/' },
                { 'text': '学位授予信息报送（备案）系统', 'url': 'https://xw.chsi.com.cn/' },
                { 'text': '全国同等学力人员申请硕士学位管理工作信息平台', 'url': 'https://tdxl.chsi.com.cn/tdxlsqxt/index.html' },
                { 'text': '电子成绩单验证', 'url': 'https://www.chsi.com.cn/cjdyz/index' },
                { 'text': '全国万名优秀创新创业导师库', 'url': 'https://gxjx.chsi.com.cn/dsk/' },
                { 'text': '毕业论文查重', 'url': 'https://chsi.wanfangtech.net/' },
                { 'text': '师范生管理信息系统', 'url': 'https://sfs.chsi.com.cn/' },
                { 'text': '第二学士学位招生信息平台', 'url': 'https://exwzs.chsi.com.cn/' },
                { 'text': '全国大学生职业规划大赛', 'url': 'https://zgs.chsi.com.cn/' },
                { 'text': '安全家——职场安全早班车', 'url': 'https://www.hsehome.com/student/welcome' },
            ]
        }
    }
}
</script>

<style>
.nav-icon::after {
    position: relative;
    display: block;
    content: "";
    height: 0;
    width: 0;
    border-left: 8px solid #00bac7;
    border-right: 8px solid transparent;
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-bottom-width: 13px;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    transform: translate(22px, 60%);
}
</style>