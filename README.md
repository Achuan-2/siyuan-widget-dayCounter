[中文](./README_zh_CN.md)

## 💌 Origin

I have always been envious of the dynamic calendar icon in Wolai, but unfortunately, there are no related widgets in Obsidian. With the help of GPT, I developed a countdown widget.

Due to my weak front-end skills and lack of familiarity with Obsidian's API calls, I managed to piece things together successfully, and I have to admit, I am quite impressed with myself.

## ✨ Interface Preview
![17123494514451712349450900.png](https://fastly.jsdelivr.net/gh/Achuan-2/PicBed@pic/assets/17123494514451712349450900.png)

![17123494224531712349422113.png](https://fastly.jsdelivr.net/gh/Achuan-2/PicBed@pic/assets/17123494224531712349422113.png)

## 🐯 Main Features

* Supports specifying a date for dynamic countdown and count-up calculations, relies on JavaScript code, does not depend on the network, and allows adding specific event names.
  
  * If the specified date is earlier than today's date, it counts up.
  * If the specified date is later than today's date, it counts down.
* Supports setting background color for some beautification.
* Configuration supports automatic saving to block attributes in Obsidian, ensuring permanent retention in notes.
* Supports exporting templates for loading configurations, facilitating repeated calls for specific countdown/count-up dates.

## 🐛 Known Issues

* The text is designed to be relatively large, so the widget block is not suitable if resized too small.
* The Color Picker for setting colors does not support pasting colors.
* To ensure that the widget and template can be saved and read block attributes correctly during the initial load, a delay of 500ms is added, resulting in slower display.

> If anyone knows how to solve the above issues, please feel free to let me know. Your help is greatly appreciated.

## ❤ Acknowledgements

* ChatGPT and Google Gemini: Writing the main code.
* [Zuoqiu-Yingyi/widget-query](https://github.com/Zuoqiu-Yingyi/widget-query): Learning how to set default width and height for widgets.
* [OpaqueGlass/progressBarT-sywidget](https://github.com/OpaqueGlass/progressBarT-sywidget): Learning how widgets save and load configurations.

## ☎️ Feedback

Feel free to raise an issue on [GitHub](https://github.com/Achuan-2/siyuan-widget-dayCounter) or contact me via email.
