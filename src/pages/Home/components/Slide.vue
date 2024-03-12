<template>
    <div >
        <div class="w-[600px] h-[300px] relative overflow-hidden">
            <div class="absolute left-0 flex transform duration-300 z-auto"
                :style="{ transform: 'translateX(' + (-currentIndex * 600) + 'px)' }">
                <div class="w-[600px] h-[300px]" v-for="(slide, index) in slides" :key="index">
                    <a :href="slide.url" target="_blank">
                        <img class="rounded" style="height: 100%;" :src="slide.image" :alt="slide.caption" />
                    </a>
                </div>
            </div>
            <!-- 向左翻图片 -->
            <button @click="prevSlide">
                <svg class="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 opacity-30 text-white hover:opacity-80" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <!-- 向右翻图片 -->
            <button @click="nextSlide">
                <svg class="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 opacity-30 text-white hover:opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <!-- 图片下方的几个选择点点 -->
            <div class="absolute bottom-5 flex w-full justify-center space-x-2">
                <div class="rounded-full w-2 h-2 hover:bg-white" v-for="index in slides.length" :key="index"
                    :class="{'bg-white': currentIndex === index - 1, 'bg-black': currentIndex !== index - 1, 'opacity-20': currentIndex !== index - 1 }"
                    @click="currentIndex = index - 1">
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'HomeSlide',
    data() {
        return {
            slides: [
                { image: require('@/assets/images/home/2293172688.jpg'), caption: 'Image 3', url: 'https://gaokao.chsi.com.cn/gkzt/gspydd2024' },
                { image: require('@/assets/images/home/45698465131.jpg'), caption: 'Image 7', url: 'https://yz.chsi.com.cn/kyzx/zt/tydxs.shtml' },
                { image: require('@/assets/images/home/20240305152.jpg'), caption: 'Image 8', url: 'https://yz.chsi.com.cn/kyzx/zt/tydxs.shtml' },
                { image: require('@/assets/images/home/20240305152358.jpg'), caption: 'Image 9', url: 'https://yz.chsi.com.cn/kyzx/zt/tydxs.shtml' },
                { image: require('@/assets/images/home/20240305152348.jpg'), caption: 'Image 10', url: 'https://yz.chsi.com.cn/kyzx/zt/tydxs.shtml' },
                
            ],
            currentIndex: 0,
            timer: null
        };
    },
    mounted() {
        this.startAutoSlide();
    },
    methods: {
        prevSlide() {
            this.currentIndex = (this.currentIndex + this.slides.length - 1) % this.slides.length;
            this.resetAutoSlide();
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.resetAutoSlide();
        },
        startAutoSlide() {
            this.timer = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            }, 6000);
        },
        // 如果主动切换图片则重置自动切换时间
        resetAutoSlide() {
            clearInterval(this.timer);
            this.startAutoSlide();
        }
    },
}
</script>

<style></style>