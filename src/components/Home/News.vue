<template>
    <div class="flex justify-center my-4 space-x-2">
        <div class="grid grid-cols-8 gap-x-4">
            <div class="col-span-5 p-4 space-y-4 rounded bg-slate-50">
                <div class="text-xl text-red-600 hover:underline">
                    <a target="_blank" href="https://yz.chsi.com.cn/yzwb/">2024年研招《准考证》下载：12月13日至12月25日</a>
                </div>
                <div class="flex justify-start space-x-2">
                    <a target="_blank" href="https://yz.chsi.com.cn/kyzx/zt/cxky2024.shtml">
                        <span
                            class="pr-2 border-r border-gray-300 hover-teal-text">2024考研：遵纪守法，诚信考试，切莫以身试法</span>
                    </a>
                    <a target="_blank" href="https://yz.chsi.com.cn/kyzx/jybzc/202309/20230915/2293123516.html">
                        <span
                            class="pr-2 border-r border-gray-300 hover-teal-text">研招管理规定</span>
                    </a>
                    <a target="_blank" href="https://yz.chsi.com.cn/kyzx/kydt/202312/20231212/2293173986.html">
                        <span class="hover-teal-text">考场规则</span>
                    </a>
                </div>
                <div class="flex justify-start space-x-2">
                    <a target="_blank" href="https://www.chsi.com.cn/jyzx/202102/20210208/2028106580.html">
                        <span
                            class="pr-2 border-r border-gray-300 hover-teal-text">套号学历涉嫌违法</span>
                    </a>
                    <a target="_blank" href="https://www.chsi.com.cn/zhaopin/index.jsp">
                        <span
                            class="pr-2 border-r border-gray-300 hover-teal-text">学信网招聘</span>
                    </a>
                    <a target="_blank" href="https://www.chsi.com.cn/jyzx/xmt.shtml">
                        <span
                            class="pr-2 border-r border-gray-300 hover-teal-text">新媒体矩阵</span>
                    </a>
                    <a target="_blank" href="https://www.chsi.com.cn/news/">
                        <span
                            class="pr-2 border-r border-gray-300 hover-teal-text">【新闻】</span>
                    </a>
                    <a target="_blank" href="https://www.chsi.com.cn/zthz/">
                        <span class="pr-2 hover-teal-text">专题汇总</span>
                    </a>
                </div>
                <div class="text-xl text-main-teal hover:underline">
                    <a target="_blank" href="https://www.chsi.com.cn/jyzx/202312/20231206/2293174137.html">教育部部署做好2024届全国普通高校毕业生就业创业工作</a>
                </div>
                <div class="flex justify-start space-x-2">
                    <a target="_blank" href="https://yz.chsi.com.cn/kyzx/jybzc/202309/20230915/2293123516.html">
                        <span
                            class="pr-2 border-r border-gray-300 hover-teal-text">做好冬季学校流行性疾病防控工作</span>
                    </a>
                    <span>2024高考:</span>
                    <a target="_blank" href="https://yz.chsi.com.cn/kyzx/kydt/202312/20231212/2293173986.html">
                        <span class="hover-teal-text">高水平运动队报考指南</span>
                    </a>
                    <a target="_blank" href="https://yz.chsi.com.cn/kyzx/kydt/202312/20231212/2293173986.html">
                        <span class="hover-teal-text">艺术类招生报考指南</span>
                    </a>
                </div>
                <div class="flex justify-start space-x-2">
                    <a target="_blank" href="https://yz.chsi.com.cn/kyzx/jybzc/202309/20230915/2293123516.html">
                        <span
                            class="pr-2 border-r border-gray-300 hover-teal-text">京津冀地区面向2024届高校毕业生网上双选月</span>
                    </a>
                    <a target="_blank" href="https://yz.chsi.com.cn/kyzx/kydt/202312/20231212/2293173986.html">
                        <span class="hover-teal-text">全国教育系统2024届高校毕业生网上招聘会</span>
                    </a>
                </div>
            </div>
            <div class="col-span-3 p-4 space-y-2 rounded bg-slate-50">
                <div class="flex justify-between items-center">
                    <div class="text-xl font-bold text-gray-600">
                        教育资讯
                    </div>
                    <div class="w-60 h-3 border-b border-b-gray-300"></div>
                    <a target="_blank" href="https://www.chsi.com.cn/news/" class="hover-teal-text">
                        更多
                    </a>
                </div>
                <ul class="space-y-3">
                    <li v-for="(item, index) in news_items" :key="index">
                        <a target="_blank" :href="item.url" class="flex hover-teal-text info-list-node">
                            <div class="truncate">{{ item.text }}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeNews",
    data() {
        return {
            news_items: [
                {'text': '关于做好2023年同等学力人员申请硕士学位外国语水平和学科综合水平全国统一考试工作的通知', 'url': 'https://www.chsi.com.cn/jyzx/202302/20230209/2256612160.html'},
                {'text': '教育部办公厅关于印发《“十四五”普通高等教育本科国家级规划教材建设实施方案》的通知', 'url': 'https://www.chsi.com.cn/jyzx/202312/20231214/2293205482.html'}, 
                {'text': '教育部与陕西省举行部省会商会议并签署战略合作协议', 'url': 'https://www.chsi.com.cn/jyzx/202312/20231214/2293205481.html'}, 
                {'text': '科技创新赋能希望的田野', 'url': 'https://www.chsi.com.cn/jyzx/202312/20231211/2293173071.html'}, 
                {'text': '“小支点”撬动大产业——湖南娄底大力发展职业教育纪实', 'url': 'https://www.chsi.com.cn/jyzx/202312/20231211/2293173070.html'}, 
                {'text': '加强医工学科融通 激励医疗器械创新', 'url': 'https://www.chsi.com.cn/jyzx/202312/20231207/2293172739.html'}, 
            ]
        }
    }
}
</script>

<style>
    .info-list-node {
        position: relative;
        margin-left: 1rem;
    }

    .info-list-node::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 0.5rem;
        width: 6px;
        height: 6px;
        background-color: orange;
        border-radius: 50%;
    }
</style>