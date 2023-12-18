<template>
    <div class="w-[1180px] mx-auto">
        <div class="flex justify-between">
            <div class="w-56 h-20 text-3xl font-medium qr-title">
                官方微博&nbsp;·&nbsp;微信
            </div>
            <a class="hover-teal-text" href="https://www.chsi.com.cn/jyzx/xmt.shtml">更多</a>
        </div>
        <div class="grid grid-cols-5 gap-8">
            <div class="pt-4 space-y-2 w-52 h-36 text-center bg-white rounded shadow-sm qr-item" v-for="(item, index) in qr_data" :key="index">
                <img class="mx-auto" :src="item.qr" alt="">
                <p>{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeQR",
    data() {
        return {
            qr_data: [
                {'title': '学信网', 'qr': require('@/assets/home/chsi-ewm.jpg')},
                {'title': '阳光高考', 'qr': require('@/assets/home/gk-ewm.jpg')},
                {'title': '研招网', 'qr': require('@/assets/home/yz-ewm.jpg')},
                {'title': '国家大学生就业服务平台', 'qr': require('@/assets/home/xzy-ewm.jpg')},
                {'title': '学职平台', 'qr': require('@/assets/home/xz-ewm.jpg')}
            ]
        }
    }
}
</script>
<style>
.qr-title {
    background-image: url('@/assets/home/index-tit-bg.png');
    background-position-y: 26px;
    background-repeat: no-repeat;
}

.qr-item {
    background-image: url('@/assets/home/wx-bg.png');
    background-repeat: no-repeat;
    background-position: right bottom;
}
</style>