<template>
    <div class="py-2 h-32 text-center rounded duration-150 menu-item w-68 hover:-translate-y-2">
        <a target="_blank" class="space-y-2 hover-teal-text" :href="url" v-if="url">
            <div class="w-[50px] h-[50px] card-img-2 mx-auto" :style="{ 'background-position-x': icon_offset }">
            </div>
            <p>{{ title }}</p>
            <p class="text-sm text-gray-400">{{ subtitle }}</p>
        </a>
        <div class="space-y-2" v-else>
            <div class="w-[50px] h-[50px] card-img-2 mx-auto" :style="{ 'background-position-x': icon_offset }">
            </div>
            <p>{{ title }}</p>
            <p class="text-sm text-gray-400">{{ subtitle }}</p>
            <div class="text-white font-medium space-x-4 flex absolute w-[271px] h-[128px] -top-2 left-0 justify-center items-center bg-gray-800 bg-opacity-50 rounded opacity-0 hover:opacity-100">
                <a target="_blank" class="hover:underline" :href="hovered_link[0].url">{{ hovered_link[0].text }}</a>
                <a target="_blank" class="hover:underline" :href="hovered_link[1].url">{{ hovered_link[1].text }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MenuItem",
    props: {
        title: String,
        icon_offset: Number,
        subtitle: String,
        url: String,
        // 鼠标悬停时显示的链接
        hovered_link: Array
    }
}
</script>
<style>
.card-img-2 {
    background-image: url('@/assets/images/home/part3-icon.png');
}
.menu-item {
    box-shadow: 0 0 15px 0 rgba(206,224,229,.8);
}
</style>