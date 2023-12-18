<template>
    <div class="grid grid-cols-4 gap-8">
    <div v-for="(item, index) in menu_info" :key="index">
        <SedMenuItem :title="item.title" :subtitle="item.subtitle" :url="item.url" :hovered_link="item.hovered_link" :icon_offset="index*-51+'px'" />
    </div>
    </div>
</template>

<script>
import SedMenuItem from './SedMenuItem.vue';
export default {
    name: "SedMenu",
    components: {
        SedMenuItem
    },
    data() {
        return {
            menu_info: [
                { 'title': '在线考试系统', 'subtitle': '在线笔试及视频考试', 'url': 'https://bm.chsi.com.cn/yszp/stu/judge', 'hovered_link': null },
                { 'title': '远程面试系统', 'subtitle': '高校招生远程面试', 'url': 'https://bm.chsi.com.cn/ycms/stu/', 'hovered_link': null },
                { 'title': '毕业生论文查重', 'subtitle': '毕业论文相似性检测（本科、硕士、博士）', 'url': 'https://chsi.wanfangtech.net/', 'hovered_link': null },
                { 'title': '电子成绩单验证', 'subtitle': '高校学生在校成绩单验证', 'url': 'https://www.chsi.com.cn/cjdyz/index', 'hovered_link': null },
                { 'title': '教育部人才服务网', 'subtitle': '教育部直属单位公开招聘平台', 'url': 'https://jybzp.chsi.com.cn/home/index', 'hovered_link': null },
                { 'title': '第二学士学位招生', 'subtitle': '全国普通高校第二学士学位招生信息平台', 'url': 'https://exwzs.chsi.com.cn/', 'hovered_link': null },
                { 'title': '导师人才库', 'subtitle': '全国万名优秀创新创业导师人才库', 'url': null, 'hovered_link': [{ 'text': '名单查询', 'url': 'https://gxjx.chsi.com.cn/dsk/publish/mentor/index.action' }, { 'text': '证书查询', 'url': 'https://gxjx.chsi.com.cn/dsk/zs/index.action' }] },
                { 'title': '“校企行”创业就业导师', 'subtitle': '导师人才库-“校企行”创业就业导师', 'url': null, 'hovered_link': [{ 'text': '名单查询', 'url': 'https://gxjx.chsi.com.cn/dsk/publish/mentoryq/index.action' }, { 'text': '证书查询', 'url': 'https://gxjx.chsi.com.cn/dsk/publish/mentoryq/index.action' }] },
            ]
        }
    }
}
</script>

<style></style>