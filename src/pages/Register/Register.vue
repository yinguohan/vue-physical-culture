<template>
    <div class="flex flex-col h-full font-serif">
        <nav class="py-4 h-24 text-gray-600">
            <div class="flex justify-between w-[1180px] mx-auto">
                <div class="flex justify-center py-4 space-x-4">
                    <a href="https://www.chsi.com.cn/" class="pr-4 border-r border-r-gray-300">
                        <img class="h-10" src="@/assets/images/register/logo_chsi_new2x.png" alt="">
                    </a>
                    <p class="text-2xl font-light leading-10">实名注册</p>
                </div>
                <div class="flex my-auto space-x-2 text-sm">
                    <p class="text-main-teal hover:underline">登录</p>
                    <p>|</p>
                    <p class="hover:underline">注册</p>
                </div>
            </div>
        </nav>
        <main class="bg-[#f5f5f5] main-container py-4 border-y border-y-gray-200">
            <div class="mx-auto w-[1180px]">
                <div class="px-24 py-4 space-y-2 text-white bg-[#2fafbc]">
                    <p>“学信网账号”可用于登录学信网各服务平台</p>
                    <p class="text-sm leading-6">
                        支持的平台有：学信档案（含图像校对、学籍信息核对等）、中国研究生招生信息网、高考特殊类型招生报名平台、全国征兵网、学信就业、内地（祖国大陆）高校面向港澳台招生信息网、学职平台、国家大学生就业服务平台、全国大学生创业服务网等。如果您在使用这些服务时注册过账号，则可凭此账号使用其他服务，例如：如果您进行过图像校对，则可凭此账号进行“研招网上报名”、“兵役登记”、“应征入伍”等，而无需再次注册账号。
                    </p>
                </div>
                <div class="space-y-2 bg-white">
                    <div class="px-4 pt-6 text-sm text-right text-blue-600 hover:underline">
                        <a href="https://account.chsi.com.cn/account/preregbymphone.action?from=account-realreg">简项注册</a>
                    </div>
                    <table class="w-full font-light text-gray-600 border-separate border-spacing-4">
                        <tbody>
                            <tr>
                                <th class="w-2/12"><span class="text-red-600">* </span>手机号</th>
                                <td class="w-3/12"><input class="w-full" type="text"></td>
                                <!-- <td class="w-6/12 text-sm text-left text-gray-400">请输入11位手机号码，仅支持大陆地区手机号。</td> -->
                            </tr>
                            <tr>
                                <th><span class="text-red-600">* </span>短信验证码</th>
                                <td class="flex space-x-2">
                                    <input class="w-1/2" type="text">
                                    <button class="w-1/2 bg-gray-100 rounded border hover:bg-white">免费获取</button>
                                </td>
                                <td class="text-sm text-left text-gray-400"></td>
                            </tr>
                            <tr>
                                <th><span class="text-red-600">* </span>密码</th>
                                <td class="">
                                    <input class="w-full" type="password">
                                </td>
                                <td class="text-sm text-left text-gray-400"></td>
                            </tr>
                            <tr>
                                <th><span class="text-red-600">* </span>密码确认</th>
                                <td class="">
                                    <input class="w-full" type="password">
                                </td>
                                <td class="text-sm text-left text-gray-400"></td>
                            </tr>
                            <tr>
                                <th><span class="text-red-600">* </span>姓名</th>
                                <td class="">
                                    <input class="w-full" type="text">
                                </td>
                                <!-- <td class="text-sm text-left text-gray-400">按本人有效身份证件填写。</td> -->
                            </tr>
                            <tr>
                                <th><span class="text-red-600">* </span>密码</th>
                                <td class="">
                                    <select class="w-full">
                                        <option value="">居民身份证</option>
                                        <option value="">港澳台身份证</option>
                                        <option value="">华侨身份证/护照(无身份证者可填护照号)</option>
                                        <option value="">其他</option>
                                    </select>
                                </td>
                                <td class="text-sm text-left text-gray-400">中国大陆地区用户推荐设置居民身份证。 </td>
                            </tr>
                            <tr>
                                <th><span class="text-red-600">* </span>证件号码</th>
                                <td class="">
                                    <input class="w-full" type="text">
                                </td>
                                <!-- <td class="text-sm text-left text-gray-400">请认真核对您的证件号码，证件号码一经提交不能修改。</td> -->
                            </tr>
                            <tr>
                                <th></th>
                                <td class="h-10 text-xs" colspan="2">以下信息为选填项，忘记密码时可通过手机号找回密码</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>安全邮箱</th>
                                <td class="">
                                    <input class="w-full" type="text" placeholder="选填">
                                </td>
                                <td class="text-sm text-left text-gray-400"></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td class="h-10 text-xs" colspan="2">
                                    <div class="flex space-x-1 leading-10">
                                        <input v-model="is_recvmsg_checked" type="checkbox" name="" id="">
                                        <span>我已阅读并同意《用户协议》、《隐私政策》</span>
                                        <input type="checkbox" checked>
                                        <span>接收学信网微信消息提醒</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <button :disabled="is_recvmsg_checked" :class="{
                                        'bg-gray-100': !is_recvmsg_checked,
                                        'text-gray-300': !is_recvmsg_checked,
                                        'bg-main-teal': is_recvmsg_checked,
                                        'text-white': is_recvmsg_checked,
                                        'border': !is_recvmsg_checked,
                                        'border-gray-300': !is_recvmsg_checked
                                    }" class="flex justify-center items-center w-full h-16 rounded">立即注册</button>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td class="text-sm text-blue-600 hover:underline"><a
                                        href="https://account.chsi.com.cn/account/password!retrive">找回密码</a></td>
                            </tr>
                            <tr>
                                <th></th>
                                <td class="text-sm">注册时遇到问题？进入
                                    <span class="text-blue-600 hover:underline">
                                        <a href="https://account.chsi.com.cn/account/help/index.jsp">帮助中心</a>
                                    </span>
                                </td>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
        <footer class="flex justify-center py-6 space-x-8 text-sm text-gray-600 h-[72px]">
            <a href="https://www.chsi.com.cn/" class="hover:underline">学信网</a>
            <a href="https://account.chsi.com.cn/account/help/index.jsp" class="hover:underline">帮助中心</a>
            <a href="https://www.chsi.com.cn/about/contact.shtml" class="hover:underline">联系我们</a>
            <p>Copyright ©2003-2023 学信网 All Rights Reserved</p>
            <select class="rounded border border-gray-800" name="" id="">
                <option value="zh_CN">简体中文</option>
                <option value="en_US">English</option>
            </select>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            is_recvmsg_checked: false
        }
    }
}
</script>

<style scoped>
.main-container {
    background-image: url('@/assets/images/register/bg.jpg');
    background-repeat: no-repeat;
    background-position: center top 5vh;
}

th {
    font-weight: 300;
    text-align: right;
    font-size: small;
}

input,
select {
    padding-left: 0.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border-width: 1px;
    border-color: lightgray;
}

input:focus-visible {
    outline: none;
}
</style>