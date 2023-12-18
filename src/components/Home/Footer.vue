<template>
    <div class="flex justify-center py-6 space-x-12 text-sm text-center text-slate-300">
        <a :href="item.url" v-for="(item, index) in footer_nav" :key="index">
            {{ item.text }}
        </a>
    </div>
    <div class="grid grid-cols-3 px-64 pb-10 text-sm text-slate-200">
        <div class="px-2 space-y-2 border-r border-r-slate-300">
            <p>客服热线：010-67410388</p>
            <p>客服邮箱：kefu#chsi.com.cn（将#替换为@）</p>
        </div>
        <div class="px-4 space-y-2 border-r border-r-white">
            <p>主办单位：
                <a target="_blank" href="https://chesicc.chsi.com.cn/">教育部学生服务与素质发展中心
                </a>
            </p>
            <p>
               Copyright © 2003-2023
               <a target="_blank" href="https://www.chsi.com.cn/">学信网</a> 
               All Rights Reserved 
            </p>
        </div>
        <div class="px-4 space-y-2">
            <p><a target="_blank" href="https://beian.miit.gov.cn/">京ICP备19004913号-1</a></p>
            
            <p class="flex space-x-1">
                <img src="@/assets/home/jgwab.png" alt="">
                <a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202009747">京公网安备11010202009747号</a>
                
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeFooter',
    data() {
        return {
            footer_nav: [
                { 'text': '中心简介', 'url': 'https://chesicc.chsi.com.cn/zxgw/zxjs/201604/20160418/1529506207.html' },
                { 'text': '网站简介', 'url': 'https://www.chsi.com.cn/about/about_site.shtml' },
                { 'text': '版权声明', 'url': 'https://www.chsi.com.cn/about/copyright.shtml' },
                { 'text': '网站宣传', 'url': 'https://www.chsi.com.cn/ad/index.shtml' },
                { 'text': '联系我们', 'url': 'https://www.chsi.com.cn/about/contact.shtml' },
                { 'text': '招聘信息', 'url': 'https://www.chsi.com.cn/zhaopin/index.jsp' },
                { 'text': '帮助中心', 'url': 'https://www.chsi.com.cn/help' },
                { 'text': '学信十周年', 'url': 'https://www.chsi.com.cn/z/tenyears/index.jsp' },
                { 'text': '大事记', 'url': 'https://www.chsi.com.cn/about/ct16.shtml' },
            ]
        }
    }
}
</script>
<style>
a:hover {
    text-decoration-line: underline;
}
</style>