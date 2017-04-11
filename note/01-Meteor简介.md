#### Meteor介绍
Meteor是一个开源的全栈JS开发平台，基于Node.js和MongoDB。
[官方网站](https://www.meteor.com)
#### 下载安装
[文档](https://www.meteor.com/install)
- linux：``curl https://install.meteor.com/ |sh``
- windows :下载安装包
#### 使用
- 创建新项目: ``meteor create myapp``
- 运行项目：
``
cd my app
meteor
``
- 访问：http://localhost:3000/

#### 核心技术
- mini数据库(miniMongo)：客户端使用，作用是缓存数据，
相当于服务器数据库的局部镜像，只缓存当前客户端用到的数据。
- Tracker：提供了响应式应用的基础功能。
- DDP：数据传输协议，基于websockets,实现了双全工通信的数据传输。

