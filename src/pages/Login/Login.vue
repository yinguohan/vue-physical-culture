<template>
    <div class="flex h-[100vh]">
        <div class="bg-[#8dd8d9] flex items-center justify-center pl-8 pr-20 w-[30%]">
            <img class="bg-[#8dd8d9]" src="@/assets/images/login/bg.png" alt="">
        </div>
        <main class="w-full">
            <nav class="flex justify-between p-8 h-[10%]">
                <a href="https://www.chsi.com.cn/" class="flex space-x-2 h-6">
                    <img src="@/assets/images/logo2x.png" alt="">
                    <img src="@/assets/images/title2x.png" alt="">
                </a>
                <div class="flex justify-center items-center text-sm text-center text-gray-500">
                    <div class="px-2 border-r border-r-gray-500">
                        <a href="https://www.chsi.com.cn/">首页</a>
                    </div>
                    <div class="px-2 border-r border-r-gray-500">
                        <a href="https://account.chsi.com.cn/account/help/index.jsp">帮助中心</a>
                    </div>
                    <div class="px-2 border-r border-r-gray-500">
                        <a href="https://kl.chsi.com.cn/robot/index.action?system=account">学信机器人</a>
                    </div>
                    <div class="px-2">
                        <a href="https://kl.chsi.com.cn/robot/index.action?system=account">联系我们</a>
                    </div>
                </div>
            </nav>
            <div class="h-[85%] flex items-center">
                <div class="mx-auto text-center w-[400px] space-y-6">
                    <div class="text-4xl font-bold">登录</div>
                    <div class="flex justify-center mb-8 space-x-1 text-gray-400">
                        <p>请使用</p>
                        <a class="text-gray-500 hover:underline"
                            href="https://account.chsi.com.cn/account/help/index.jsp?keywords=%E5%AD%A6%E4%BF%A1%E7%BD%91%E8%B4%A6%E5%8F%B7%E5%8F%AF%E4%BB%A5%E5%81%9A%E4%BB%80%E4%B9%88">
                            学信网账号
                        </a>
                        <p>登录</p>
                    </div>
                    <div class="p-2 flex items-center space-x-2 border border-gray-300 hover:border-main-teal rounded w-[400px] h-11"
                        type="text" name="" id="">
                        <svg width="17.1428571px" height="17.1428571px" viewBox="0 0 17.1428571 17.1428571" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>头像备份</title>
                            <defs>
                                <circle id="path-1" cx="8" cy="8" r="8" />
                            </defs>
                            <g id="11111" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="登陆页（后台）2" transform="translate(-1012.428571, -418.428571)">
                                    <g id="编组-3" transform="translate(420.000000, 174.000000)">
                                        <g id="图文" transform="translate(0.000000, 76.000000)">
                                            <g id="文字" transform="translate(480.000000, 0.000000)">
                                                <g id="编组-7" transform="translate(100.000000, 77.000000)">
                                                    <g id="编组-2" transform="translate(0.000000, 80.000000)">
                                                        <g id="头像备份" transform="translate(13.000000, 12.000000)">
                                                            <g id="椭圆形备份-4">
                                                                <mask id="mask-2" fill="white">
                                                                    <use xlink:href="#path-1" />
                                                                </mask>
                                                                <use id="蒙版" stroke="#D5D7DB" stroke-width="1.14285714"
                                                                    xlink:href="#path-1" />
                                                                <ellipse fill="#D5D7DB" mask="url(#mask-2)" cx="8"
                                                                    cy="14.6666667" rx="6" ry="4.66666667" />
                                                            </g>
                                                            <circle id="椭圆形备份-3" fill="#D5D7DB" cx="8" cy="6.66666667"
                                                                r="3.33333333" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <input class="w-full focus-visible:outline-none" type="text" name="" id="" placeholder="手机号/邮箱">
                    </div>
                    <div class="p-2 flex items-center space-x-2 border border-gray-300 hover:border-main-teal rounded w-[400px] h-11"
                        type="text" name="" id="">
                        <svg width="14.3886403px" height="16px" viewBox="0 0 14.3886403 16" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>编组</title>
                            <g id="11111" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="登陆页（后台）2" transform="translate(-1013.000000, -483.000000)" fill="#D5D7DB"
                                    fill-rule="nonzero">
                                    <g id="编组-3" transform="translate(420.000000, 174.000000)">
                                        <g id="图文" transform="translate(0.000000, 76.000000)">
                                            <g id="文字" transform="translate(480.000000, 0.000000)">
                                                <g id="编组-7" transform="translate(100.000000, 77.000000)">
                                                    <g id="编组-4" transform="translate(0.000000, 144.000000)">
                                                        <g id="编组" transform="translate(13.000000, 12.000000)">
                                                            <path
                                                                d="M12.2303443,6.67136487 L12.2303443,4.6729426 C12.2249757,3.3721213 11.6798422,2.13190156 10.7250908,1.24837761 C9.77033933,0.364853658 8.49165681,-0.0826801603 7.19432015,0.0126218778 C5.89698349,-0.0826801603 4.61830097,0.364853658 3.66354953,1.24837761 C2.70879809,2.13190156 2.16366459,3.3721213 2.15829604,4.6729426 L2.15829604,6.67136487 L0,6.67136487 L0,16 L14.3886403,16 L14.3886403,6.67136487 L12.2303443,6.67136487 M7.91375216,11.8193006 L7.91375216,14.0015777 L6.47488813,14.0015777 L6.47488813,11.8193006 C6.03963486,11.5992926 5.76248713,11.1558563 5.75545612,10.6682094 C5.76999993,10.3013352 5.92984197,9.95530399 6.19974908,9.70638965 C6.4696562,9.45747531 6.82747026,9.32611256 7.19432015,9.341257 C7.56117004,9.32611256 7.9189841,9.45747531 8.18889121,9.70638965 C8.45879833,9.95530399 8.61864037,10.3013352 8.63318418,10.6682094 C8.62615317,11.1558563 8.34900544,11.5992926 7.91375216,11.8193006 L7.91375216,11.8193006 Z M10.7914802,6.67136487 L3.59716007,6.67136487 L3.59716007,4.6809363 C3.57405103,3.7428842 3.95510127,2.84012084 4.64336163,2.20233291 C5.33162199,1.56454498 6.26073872,1.25322027 7.19432015,1.34756796 C8.12648377,1.25341785 9.05424642,1.56370114 9.74221925,2.1996938 C10.4301921,2.83568645 10.8122579,3.7362668 10.7914802,4.6729426 L10.7914802,6.67136487"
                                                                id="形状" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <input class="w-full focus-visible:outline-none" type="password" name="" id="" placeholder="密码">
                    </div>
                    <button
                        class="items-center p-2 text-center bg-main-teal rounded w-[400px] h-11 text-white hover:brightness-105">
                        登录
                    </button>
                    <div class="flex justify-between text-sm text-gray-600">
                        <a class="hover:underline" href="https://account.chsi.com.cn/account/password!retrive">找回密码</a>
                        <a class="hover:underline"
                            href="https://account.chsi.com.cn/account/preregister.action?from=account-login">注册</a>
                    </div>
                    <div class="relative mt-8 text-xs text-gray-400">
                        <p class="lined-title">其他登录方式</p>
                    </div>
                    <div class="flex justify-center items-center space-x-10">
                        <a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx48c86c599b9add59&redirect_uri=https%3A%2F%2Faccount.chsi.com.cn%2Fpassport%2Flogin%3Fclient_name%3Dwechat&response_type=code&scope=snsapi_login&state=FeO2PuSQN5#wechat_redirect">
                        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>微信LOGO_方形@2x</title>
                            <g id="20230919" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="远程面试" transform="translate(-1172.000000, -730.000000)" fill-rule="nonzero">
                                    <g id="微信LOGO_方形@2x" transform="translate(1172.000000, 730.000000)">
                                        <rect id="Rectangle" fill="#06C160" x="0" y="0" width="32" height="32" rx="16" />
                                        <g id="Group" transform="translate(6.888136, 8.623729)" fill="#FFFFFF">
                                            <path
                                                d="M13.0434821,4.63270792 C12.870531,4.61954607 12.6953643,4.61282119 12.5183251,4.61282119 C9.34894845,4.61282119 6.77966102,6.7680499 6.77966102,9.42665925 C6.77966102,9.97488862 6.88891276,10.5017132 7.09014932,10.9926487 C6.91615978,11.0042552 6.7402592,11.0101695 6.56271186,11.0101695 C5.70083954,11.0101695 5.14720406,10.8554485 4.39322034,10.6021151 C4.19984099,10.5458997 3.56048574,10.8687249 2.47515459,11.5705909 C2.39518217,11.6103126 2.31457084,11.6029845 2.23332059,11.5486065 C2.15207035,11.4942285 2.130433,11.4112994 2.16840853,11.2998191 C2.46040217,10.3483653 2.54340354,9.82027092 2.41741262,9.71553584 C0.8763232,8.70816515 0,7.27093424 0,5.50508475 C0,2.46471039 2.93822619,0 6.56271186,0 C9.8332973,0 12.5450953,2.00689251 13.0434821,4.63270792 Z M4.39322034,4.66440678 C4.9024456,4.66440678 5.31525424,4.25159814 5.31525424,3.74237288 C5.31525424,3.23314762 4.9024456,2.82033898 4.39322034,2.82033898 C3.88399508,2.82033898 3.47118644,3.23314762 3.47118644,3.74237288 C3.47118644,4.25159814 3.88399508,4.66440678 4.39322034,4.66440678 Z M8.78644068,4.66440678 C9.29566595,4.66440678 9.70847458,4.25159814 9.70847458,3.74237288 C9.70847458,3.23314762 9.29566595,2.82033898 8.78644068,2.82033898 C8.2772154,2.82033898 7.86440678,3.23314762 7.86440678,3.74237288 C7.86440678,4.25159814 8.2772154,4.66440678 8.78644068,4.66440678 Z"
                                                id="Combined-Shape" />
                                            <path
                                                d="M12.7623929,14.2622748 C12.0407948,14.2622748 11.5772664,14.1327355 10.9459975,13.9206333 C10.7840916,13.8735673 10.2487948,14.1438511 9.34010696,14.7314846 C9.27315043,14.7647414 9.20565901,14.758606 9.13763271,14.7130783 C9.06960635,14.6675506 9.05149055,14.5981187 9.08328537,14.5047824 C9.32775555,13.7081827 9.397248,13.2660384 9.29176277,13.1783495 C8.00149369,12.3349336 7.26779666,11.1316196 7.26779666,9.65317125 C7.26779666,7.10763374 9.7278112,5.0440678 12.7623929,5.0440678 C15.7969746,5.0440678 18.2569892,7.10763374 18.2569892,9.65317125 C18.2569892,12.1987088 15.7969746,14.2622748 12.7623929,14.2622748 Z M10.9459975,8.94931802 C11.3723436,8.94931802 11.7179656,8.60369616 11.7179656,8.17734997 C11.7179656,7.75100377 11.3723436,7.40538191 10.9459975,7.40538191 C10.5196513,7.40538191 10.1740294,7.75100377 10.1740294,8.17734997 C10.1740294,8.60369616 10.5196513,8.94931802 10.9459975,8.94931802 Z M14.6241983,8.94931802 C15.0505445,8.94931802 15.3961663,8.60369616 15.3961663,8.17734997 C15.3961663,7.75100377 15.0505445,7.40538191 14.6241983,7.40538191 C14.1978521,7.40538191 13.8522302,7.75100377 13.8522302,8.17734997 C13.8522302,8.60369616 14.1978521,8.94931802 14.6241983,8.94931802 Z"
                                                id="Combined-Shape-Copy-4"
                                                transform="translate(12.762393, 9.898305) scale(-1, 1) translate(-12.762393, -9.898305) " />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        </a>
                        <a href="https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2018120362389757&redirect_uri=https%3A%2F%2Faccount.chsi.com.cn%2Fpassport%2Flogin%3Fclient_name%3Dalipay&state=BgSCMX3scH&scope=auth_user">
                        <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <title>支付宝</title>
                            <defs>
                                <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-1">
                                    <stop stop-color="#1677FF" offset="0%" />
                                    <stop stop-color="#1677FF" offset="100%" />
                                </linearGradient>
                            </defs>
                            <g id="20230919" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="远程面试" transform="translate(-1236.000000, -730.000000)" fill="url(#linearGradient-1)"
                                    fill-rule="nonzero">
                                    <g id="支付宝" transform="translate(1236.000000, 730.000000)">
                                        <path
                                            d="M7.21159419,18.0173913 C6.81739128,18.3188406 6.42318837,18.7594203 6.30724637,19.3391304 C6.14492753,20.1043478 6.28405797,21.0782609 7.00289856,21.8434783 C7.90724637,22.7478261 9.27536234,23.0028985 9.87826088,23.0492754 C11.4782609,23.1652174 13.1942029,22.3536232 14.4927536,21.4724638 C15.0028986,21.1246377 15.8608696,20.4057971 16.6956522,19.2927536 C14.8405797,18.342029 12.5217392,17.2753623 10.0637681,17.3681159 C8.76521741,17.4144928 7.86086956,17.6695652 7.21159419,18.0173913 L7.21159419,18.0173913 Z M30.7246377,22.2608696 C31.5362319,20.3362319 32,18.226087 32,16 C32,7.18840581 24.8115942,0 16,0 C7.18840581,0 0,7.18840581 0,16 C0,24.8115942 7.18840581,32 16,32 C21.3333333,32 26.0405797,29.3797102 28.9623188,25.3681159 C26.2028986,24.0231884 21.6811594,21.7507246 18.8753623,20.4057971 C17.5536232,21.9362319 15.5826087,23.4434782 13.3565217,24.0927536 C11.9652174,24.5101449 10.6898551,24.6724638 9.39130434,24.3942029 C8.06956522,24.115942 7.11884056,23.5130435 6.56231884,22.9101449 C6.28405797,22.5855072 5.95942028,22.2144928 5.70434781,21.7275362 C5.72753622,21.7507246 5.72753622,21.7971014 5.72753622,21.8202898 C5.72753622,21.8202898 5.58840578,21.5884058 5.49565219,21.2173913 C5.44927537,21.0318841 5.40289856,20.8463768 5.37971016,20.6608696 C5.35652175,20.5217391 5.35652175,20.3826087 5.37971016,20.2666667 C5.35652175,20.0347826 5.37971016,19.7797101 5.42608697,19.5246377 C5.56521741,18.8753623 5.82028987,18.1565217 6.53913044,17.484058 C8.06956522,15.9768116 10.1333333,15.9072464 11.2,15.9072464 C12.7768116,15.9304348 15.5130435,16.6028986 17.8318841,17.4376812 C18.4811594,16.0695652 18.8985507,14.6318841 19.1536232,13.6347826 L9.53043478,13.6347826 L9.53043478,12.5913043 L14.4695652,12.5913043 L14.4695652,10.5043478 L8.51014494,10.5043478 L8.51014494,9.43768116 L14.4695652,9.43768116 L14.4695652,7.35072463 C14.4695652,7.07246375 14.5391304,6.84057969 14.9797102,6.84057972 L17.3217391,6.84057972 L17.3217391,9.43768116 L23.7913043,9.43768116 L23.7913043,10.4811594 L17.3217391,10.4811594 L17.3217391,12.5681159 L22.4927536,12.5681159 C22.4927536,12.5681159 21.9594203,15.4666667 20.3594203,18.3188406 C23.9536232,19.5942029 29.0318841,21.5884058 30.7246377,22.2608696 Z"
                                            id="形状" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex p-4 space-x-2 w-full justify-center text-gray-400 h-[5%]">
                <p>Copyright © 2003-2023</p>
                <p><a href="https://www.chsi.com.cn/" class="hover:underline">学信网</a></p>
                <p>All Rights Reserved </p>
            </div>

        </main>

    </div>
</template>

<script>
export default {
    name: 'LoginPage'
}
</script>

<style>
.lined-title::before,
.lined-title::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 150px;
    height: 0.5px;
    background-color: lightgray;
}

.lined-title::before {
    left: 0;
}

.lined-title::after {
    right: 0;
}</style>