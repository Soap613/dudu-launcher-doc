---
title: 常见问题
---

## 登陆失败

- 检查网络是否连接
- QQ 登陆扫码无反应，尝试更换扫码设备，IOS QQ 的扫码功能有几率出现 BUG
- 如果提示证书过期，请检查系统时间是否准确，如果准确，可能是系统问题，和桌面关系不大

## 实时服务没有行程推送

- 检查车是否联网
- 是否有过手机登陆(可能会顶掉车机)
- 查看托盘是否有实时服务连接图标，行程开始图标

## 自定义桌面插件问题

- 部分吉利车机的桌面组件功能被阉割了，会提示 <车机系统的这项功能被删掉了!!!!>
- 想要更换自定义组件，可到实验室更换

## 默认桌面问题

- 安装无法设置默认桌面，请点击 home 键后选择嘟嘟桌面，并选择始终
- 系统设置->默认主页，默认桌面，主页面
- 嘟嘟桌面设置->系统设置->默认桌面选择(部分车机无法使用 )
- 秒启无法唤醒嘟嘟桌面，建议寻找原生桌面的切入点(比如某些诺威达车机每次启动都会发出启动广播，桌面可以使用这个广播唤醒)

## 首页时间格式问题

时间格式参照 java 时间格式规范:<br/>
yyyy 代表年，如果位数不够，从后向前取值，比如 2019 年，使用 yy 就是 19<br/>
MM 代表月，MMM 代表中文月 11 月的话，MM 就是 11，MMM 就是十一月<br/>
dd 代表日<br/>
HH 代表小时，24 小时制<br/>
mm 代表分钟<br/>
ss 代表秒<br/>
农历年 代表农历的年份(如:乙亥猪年)<br/>
农历月 代表农历的月份(如:正月初一)<br/>
aaa 代表上午或者下午<br/>
EEEE 代表星期几<br/>
默认是:yyyy 年 MMMdd 日 EEEE HH:mm

## 首页音乐插件问题

注意，音乐插件所有信息都是音乐 APP 提供的，不要在群里一直讨论为什么没有歌词，为什么没有封面，为什么????，如果不知道为什么，就去问问做播放器的

#### 没有音乐信息

选音乐插件，选音乐插件，选音乐插件!!!!!!!!!!!!!!!!!重要的事情说三遍，不要问为什么不自己识别或者之类的问题，选就是了

#### 音乐信息不全，无歌词

某些音乐插件，无法显示进度(极豆音乐)，歌词(大部分音乐播放器)，等信息<br/>
解决方式:桌面设置->插件设置->换个支持全的播放器(支持多少看播放器名称后面的支持内容)

#### 酷我音乐无法显示信息，无法控制

首先检查插件是否正确，其次检查是否为正版音乐 APP，尤其是酷我破解版，无法保证支持<br/>

#### 酷狗插件无法使用

酷狗插件必须选择酷狗 4\*1 插件，而且由于没有酷狗 SDK，信息就那么多，不推荐使用<br/>
酷狗切歌慢也是酷狗对于公用协议的响应速度问题，这个开发者是解决不了的，请大家熟知<br/>

## 搜索不到蓝牙设备问题

- 请检查车机是否支持蓝牙 4.0 设备
- 蓝牙外设是否打开
- 蓝牙外设是否已经连接到其他 APP(手机车机都有可能)
- 2.0 的蓝牙设备，需要到系统先进性绑定!
- 某些车机限制蓝牙功能，暂时无法解决
- 部分车机是精简版本蓝牙 4.0!!!
- 部分车机的蓝牙 4.0 被屏蔽了

## 应用内无法下载的问题

- 检查存储权限是否给到嘟嘟桌面，自行百度如何给予桌面权限
- 检查网络是否连接

## 替换默认桌面后，音量，方控等失效

经常出现在长安，吉利原厂车机上，由于车机桌面初始化了某些参数，嘟嘟桌面无法初始化这些参数所导致<br/>
解决方式:桌面设置->计划任务->快速添加->添加唤醒原车桌面的计划任务<br/>
