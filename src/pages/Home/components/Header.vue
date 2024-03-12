<template>
    <header class="flex justify-center items-center pt-8 pb-4 space-x-4 text-gray-400">
        <a class="w-24" href="">
            <img src="@/assets/images/logo2x.png" alt="">
        </a>
        <div class="py-2 pr-56 text-sm">
            <a href="">
                <img class="mb-2 w-80" src="@/assets/images/title2x.png" alt="">
            </a>
            <p>教育部学历查询网站、教育部高校招生阳光工程指定网站、全国硕士研究生招生报名和调剂指定网站</p>
        </div>
        <ul class="flex mt-10">
            <li class="px-4 text-sm border-r border-gray-200"><a class="hover:border-b hover:border-b-gray-400" href="register.html">注册</a></li>
            <li class="px-4 text-sm border-r border-gray-200"><a class="hover:border-b hover:border-b-gray-400" href="login.html">登录</a></li>
            <!-- <li class="px-4 text-sm"><a class="hover:border-b hover:border-b-gray-400" href="">English</a></li> -->
        </ul>
    </header>

</template>

<script>
    export default {
        name: 'HomeHeader'
    }
</script>

<style>
</style>