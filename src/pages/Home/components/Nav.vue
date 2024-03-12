<template>
    <nav class="bg-[#00bac7]">
        <ul class="flex justify-center items-center space-x-2 h-12 text-white">
            <li class="flex mx-3 h-full px-2 items-center justify-center hover:bg-[#00aab7]" v-for="item in nav_items"
                :key="item"><a href="#">{{ item }}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'HomeNav',
    data() {
        return {
            nav_items: ["首页", "客服人力", "教练人力", "薪资计算", "考核公示", "素材管理", "考勤管理", "系统管理"],
        }
    }
}

</script>

<style></style>