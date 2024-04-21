# **白泽工具箱开源规范**

主页地址：[https://baize.plume.vip](https://baize.plume.vip)

下载地址：[https://github.com/sulgweb/baize-toolbox/releases](https://github.com/sulgweb/baize-toolbox/releases)

github地址：[https://github.com/sulgweb/baize-toolbox](https://github.com/sulgweb/baize-toolbox)

# 一、通用规范

## vscode插件规范

![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=MDY4ZDZjMzJjMDQyNWQ1YjM5ZTUyNzY3Mjc0N2YzZjBfTUExQmNaMURSb0V4YmxYTVFVZURXbVRjSGdqeXVZakRfVG9rZW46THQ2b2JLa1RYb3MxZHl4NW1ld2NGcHhWbkhlXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)

![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=OGVkMjk4ODI2YjcxYjZkNWY4ZmY1NjRmOWMyMTQ0NjNfRmhxcXgwOVM5dzNJdHRiTUhCRVdLc29ZRDRHZlgzc0hfVG9rZW46RW1DR2JidjU3b3BGeEh4bExvUGNjN3JZbmhlXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)

![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=NzNhNWFiMTViYmE1MGVjZjdiMWFjNDc5OGMzZmVhYWNfbjNlNGR5UVZlN0FhQVpWVjlwbmFrdEZuUjAxbWo5VmJfVG9rZW46SEg0eWJ5eDE2b0pFbFF4VVhqbmNlRHUzbmRiXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)

## commit提交规范

emoji + commit文案，如图

![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWM1ZDc2MGIwOTI3MzkxMTc0NzkwYTU0NzUzNTdjOGFfUFR3SHZUMWkyOUs4dEVJVGdyUWttcENnczRUaWhvcnpfVG9rZW46UVM0eGJseWpjb0NsZmJ4eWdTZmM0aXBFbmdkXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)

## pr规范

待补充。。。

# 二、代码规范

## 结构规范

项目主要分为三个模块main(主进程)、preload(预加载)、renderer(渲染进程)

- 主进程：主要是node层的操作，比如文件的存储、ffmepg/tts调用等
- 预加载：主要是将部分electron、主线程的api注册给渲染进程使用（如非必须，目前基本够用）
- 渲染进程：主要是前端相关页面的渲染

![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=NmViMGRiYTJiMTdiMDg5ODMyYTM2MzgwN2UwMjkxNDdfZmZ6dW8wdW9HNHNJWEFqVHl4V0c0SjUyb202R2NwbEZfVG9rZW46TVZPQ2JDaU44b0p6bEJ4QkJhN2N5ZFp2bkdmXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)

### 主进程结构

主进程主要分为index.ts、utils、plugin三个模块

- index.ts:主进程入口
- utils:存放各种辅助工具类的方法
- plugin:将主线程划分各种对应的模块

ps：src/main/helper.ts本来想放入utils中，并命名为winHelper.ts，但是迁移进入后会报错，暂时放在外层，后续有时间再处理。

### 渲染进程结构

渲染进程则和常规的前端开发无太大的区别

- assets:公共资源
- compoents:公共组件
- i18n:国际化（语言包）
- utils:辅助工具类
- siteXXX:站点（多入口）

> - src/main.tsx:站点下的入口文件
> - src/components:站点下的公共组件
> - src/pages:站点下的页面
> - src/router:站点下的路由

![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=NTNhNTIyNzQ2MDdkZWViZjI0NzUyNzlmMTczZjJiOGZfeW16UEFWeW52bjBzWkEzc2N2TzlmcTkwOTZlZkF6WHFfVG9rZW46R3IxSmJKM0p0b1B6WEt4cklPUWN6Rm1Ubk1kXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)

## 开发须知

### 通用代码规范须知

- 为了更加容易协作，原则上单个文件建议**不要超过300行，超过500行则需要进行拆分or重构**（语言包除外）。
- 需要按照ts规范，尽量少使用any

### 主进程开发须知

主进程中需要根据模块来新增，如现存模块中无合适的，可以新增对应的模块。

### 渲染进程开发须知

#### i18n规范

所有页面中文案相关的内容需要根据i18n规范，如果没有对应文案，则需要自己添加并完善所有语言包中对应的文案字段（只需要处理自己写的文案即可，antd默认文案已统一处理）。

![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGZmNWFmZGMyZDk1NzlhZDgyNjQ4Njc3NmYxNGE5MjhfREFrb0xnelN4aE81QWF6MEh4N3pFN2RTbDdyYkg5Q1JfVG9rZW46UHd6UWJuNlkwb2t2Mml4M3BPZWNIeEdpbmpnXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)

#### 组件开发规范

- 样式上，建议使用xxx.module.less + styleName（即默认css module）。
- 如果使用了自定义的一些背景色，需要注意主题的适配
- 组件拆分，在当前文件夹下新增components(如果是通用组件，则存放到公共组件处)，在components中新增对应的组件文件夹。
- 组件内部规范：均使用函数式组件开发，原则上按props、useState、useRef、其他hooks、方法/函数/变量、useEffect的顺序，其中useCallback和useMemo两个hooks不进行限制，可自由发挥。

![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=MGI3NTBhOGRhZDZmNDQwYTg4NTEzZWExOTg0ODVkNThfTjZkajY0ZG5WbzZPWHdNbjY4YXdtaU5hZHNHSlBLWTdfVG9rZW46WjIwTmJNUEVSb0F6bUx4cW9KSWNFOVFvbnhkXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)![img](https://xhmq1hae02.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2JiZjAwYTEyMGRmMTljNGVlMjViMTI4M2UzODAwNGNfdjNOY0xOMHpzeHROT0hQTThHd3J4eVNuUktmQVdVcFZfVG9rZW46U2l1RmJXYVJXbzVpQ3d4TUFrT2NyZ0VxblRiXzE3MTM3MTU2NTU6MTcxMzcxOTI1NV9WNA)

# 三、生产规范

## 命名规范

类似v0.0.1-beta、v0.0.1

## 版本规范

beta版本：主要以完成功能为主，可以存在少量已知的错误、异常不处理

test版本：需要尽可能修复已知的错误和异常

release版本：需要修复所有已知错误和异常，如无法修复需要标明或者进行降级处理。

## 发布规范

每个release版本都需要完成win、mac、linux系统的安装包打包，并且在发布前需要在git添加对应版本的tag。
