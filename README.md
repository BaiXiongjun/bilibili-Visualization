# bilibili-Visualization
bilibili视频可视化工具

## 使用方法


[bookmarklet](http://vis.h12345jack.me/bilibili-Visualization/src/index.html)


## Todolist
- [x] 解决进度框无法使用的问题=>去掉Jquery
- [x] 避免出现多个vis按钮
- [ ] 避免多次点击无效的情况
- [ ] 出现错误时button不显示，将错误打印到控制态

## 使用grunt

先装环境

    npm install -g grunt-cli
    npm install

监听sass，不要自己写css

    grunt watch

build，生成dist，会对js、css进行压缩

    grunt build

其他命令看gruntfile.js
