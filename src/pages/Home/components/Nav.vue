<template>
    <nav class="bg-[#00bac7]">
        <ul class="flex justify-center items-center space-x-2 h-12 text-white">
            <li class="flex mx-3 h-[100%] px-2 items-center justify-center hover:bg-[#00aab7]" v-for="item in nav_items"
                :key="item"><a href="#">{{ item }}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'HomeNav',
    data() {
        return {
            nav_items: ["首页", "学籍查询", "学历查询", "学位查询", "在线验证", "出国教育背景信息服务", "图像校对", "学信档案", "高考", "研招", "港澳台招生", "征兵", "就业", "学职平台"],
        }
    }
}

</script>

<style></style>