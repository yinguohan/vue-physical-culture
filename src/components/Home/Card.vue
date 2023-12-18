<template>
    <div class="relative rounded w-[373px] h-[330px] bg-white">
        <div class="bg-[#aad7de] h-[30%] shadow-lg shadow-cyan-300/30 rounded-t">
        </div>
        <div class="absolute rounded w-[90%] top-5 left-1/2 -translate-x-1/2 bg-white h-28 shadow-sm p-4">
            <div class="flex space-x-4">
                <div class="w-[51px] h-[51px] rounded-full border border-gray-200 card-img" :style="{'background-position-y': icon_offset}"></div>
                <div class="flex items-center text-lg hover-teal-text">
                    <a :href="title_url" target="_blank">
                        {{ title }}
                    </a>
                </div>
            </div>
            <span class="text-sm text-gray-400">{{ subtitle }}</span>
        </div>
        
        <div class="mt-16 w-[90%] mx-auto grid gap-x-5 gap-y-7" :class="calcGridByLinkCount(links.length)">
            <div class="text-center hover-teal-text" v-for="(item, index) in links" :class="calcEleColsByLength(item.text.length)" :key="index">
                <a :href="item.url" target="_blank">{{ item.text }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeCard',
    props: {
        title: String,
        subtitle: String,
        title_url: String,
        icon_offset: Number,
        links: Array
    },
    methods: {
        calcGridByLinkCount(count) {
            if (count <=6) {
                return "grid-cols-2"
            } else {
                return "grid-cols-3"
            }
        },
        calcEleColsByLength(length) {
            if (length > 8 && length <=15) {
                return "col-span-2"
            } else if (length > 15) {
                return "col-span-3"
            } else {
                return ""
            }
        }
    }
}
</script>

<style>
.card-img {
    background-image: url('@/assets/home/part2-icon.png')
}
</style>