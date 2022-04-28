# Useful CMD

将一个本地创建好的repo推到GitHub

1. 在GitHub创建一个repo，并获取https的URL
2. 进入本地的项目文件根目录
3. `git init` 将其初始化成一个git repository
4. （可选）运行 `git add .` 添加文件
5. （可选）运行 `git commit -m 'any message'` 进行commit
6. 运行 `git remote add origin <URL>` 将本地目录和远程的GitHub repository关联
7. 运行 `git push -u origin master` 将本地目录内容推送到GitHub



# 脚手架中的文件说明

## PUBLIC文件夹

- 其他的在html文件中都有注释说明
- robots.txt文件是爬虫配置文件，用于规定爬虫脚本可以获取的网站的哪些信息


## src文件夹

- reportWebVitals文件是用于监测页面性能，引用了web-vitals库
- setupTests.js和测试相关，引用了jest-dom的测试库


# 开始MUI

## 安装

- 根据网站的说明使用npm安装packages
- 根据网站说明将Roboto font粘贴到 `index.html` 文件中用于引入这个字体，也可以通过运行 `npm install @fontsource/roboto` 来安装，可以参考[MUI官方文档](https://mui.com/material-ui/react-typography/)的说明
- 如果要使用MUI的icon，需要在 `index.html` 中手动引入icon的连接
