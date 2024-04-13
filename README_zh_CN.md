[英文](./README.md)

## 🚀 更新日志

见 [CHANGELOGS.md](./CHANGELOGS.md)

## 💌 缘起

一直都很馋wolai的动态日历图标，苦于思源笔记没有相关挂件，于是在GPT的帮助下，我开发了一个倒数日挂件

由于前端基础很薄弱，对思源笔记的API调用也不熟悉，到处拼贴竟然成功了哈哈哈，还是很佩服自己的。

## ✨界面预览
![17123494514451712349450900.png](https://fastly.jsdelivr.net/gh/Achuan-2/PicBed@pic/assets/17123494514451712349450900.png)  

结合分栏，可以集合多个倒数日  

![17123494224531712349422113.png](https://fastly.jsdelivr.net/gh/Achuan-2/PicBed@pic/assets/17123494224531712349422113.png)

## 🐯主要功能

* 支持指定日期，动态进行倒数和正数日计算，依赖js代码，不依赖网络，支持添加具体事件名称

  * 如果指定日期早于当天日期，则正数
  * 如果指定日期晚于当天日期，则倒数
* 支持周期设置

  * 年：指定每年几月几号的事件

    * 注：如果设置日期为闰年的2月29日，则下一周期为四年后的2月29日
  * 月：指定每月几号的事件（只支持每月1-28号和月末设置）

    * 注：如果设置日期为当月的月末，则自动为每月月末，例如设置日期为2024年2月29日，则自动改为2024年4月30日；如果超过28号，经过几次更新会设置为月末，例如如果设置日期为2024年1月29日，到2024年的4月事件就变为了4月30日。
  * 周：指定每周几的事件
* 支持设置背景色，进行一定美化
* 支持配置自动保存到思源笔记的块属性，永久保留在笔记里
* 支持导出模板后加载配置，方便重复调用特定倒数日/正数日


![1712748092566Clip_2024-04-10_19-21-21.png](https://fastly.jsdelivr.net/gh/Achuan-2/PicBed@pic/assets/1712748092566Clip_2024-04-10_19-21-21.png)



## ❤ 致谢

* GPT 4：主体代码的编写
* [Zuoqiu-Yingyi/widget-query](https://github.com/Zuoqiu-Yingyi/widget-query)：学习挂件加载设置默认宽度和高度
* [OpaqueGlass/progressBarT-sywidget](https://github.com/OpaqueGlass/progressBarT-sywidget)：学习挂件如何保存和读取配置。

## ☎️意见交流

欢迎在[Github](https://github.com/Achuan-2/siyuan-widget-dayCounter)提issue或是通过邮箱联系我

如果你喜欢这个挂件，欢迎在[爱发电](https://afdian.net/a/achuan-2)给我买包辣条，这会激励我更新和完善挂件