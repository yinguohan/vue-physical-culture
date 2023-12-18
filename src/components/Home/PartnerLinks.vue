<template>
        <div class="w-56 h-20 text-3xl font-medium pl-title">
            友情链接
        </div>
        <div class="grid grid-cols-6 gap-6">
            <div class="w-[180px] h-[50px] link-item shadow" :style="{'background-position-y': -51*index+'px'}" v-for="(item, index) in links_data" :key="index">
                <a :href="item" class="w-[100%] h-[100%]">
            </a>
            </div>
        </div>
</template>
<script>
export default {
    name: 'PartnerLinks',
    data() {
        return {
            img: require('@/assets/home/yq-links.png'),
            links_data: [
                'https://www.moe.gov.cn/', 
                'https://www.moe.gov.cn/s78/A15/', 
                'https://www.cedf.org.cn/', 
                'https://www.ctdf.org.cn/', 
                'https://www.xszz.edu.cn/', 
                'http://edu.people.com.cn/', 
                'https://www.hsehome.com/', 
                'https://portal.dsedj.gov.mo/webdsejspace/site/chinaenroll/home.html'
            ]
        }
    }
}
</script>

<style>
.pl-title {
    background-image: url('@/assets/home/index-tit-bg.png');
    background-position-y: 26px;
    background-repeat: no-repeat;
}
.link-item {
    background-image: url('@/assets/home/yq-links.png');
    background-repeat: no-repeat;
}
</style>