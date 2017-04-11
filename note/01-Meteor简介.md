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
- DDP：数据传输协议，基于websockets,实现了双全工通信的
数据传输。

#### 快速入门
##### 安装和卸载：
- 安装：见上文。
- 卸载：删除/usr/local/bin/meteor以及~/.meteor/

##### 项目结构
|____client<br/>
|&ensp;&ensp;&ensp;&ensp;&ensp;|<br/>
|&ensp;&ensp;&ensp;&ensp;&ensp;|____main.css<br/>
|&ensp;&ensp;&ensp;&ensp;&ensp;|____main.html<br/>
|&ensp;&ensp;&ensp;&ensp;&ensp;|___main.js<br/>
|____package.json<br/>
|____server<br/>
&ensp;&ensp;&ensp;&ensp;&ensp;|____main.js<br/>

- client/中的文件是运行在客户端的。
    - main.css：css样式文件。
    - main.html：默认的主页面。
    - main.js：配合main.html的js文件，含显示相关的逻辑代码
和事件处理代码。
- server/中的文件是运行在服务器端的。
    －main.js：服务器端js加载入口文件。
- package.json：包管理文件，项目需要用到的扩展包定义
在这里。

相关代码格式及说明:
- import是ES6标准中的新语法，用于模块的引用或者文件。
- {{}}表示此处要引用动态内容，>表示要把某个模板的内容
替换到当前位置。
- <template>用来定义一个模板，name指定模板的名称，
名称要求全局唯一且大小写敏感。
- Meteor启动时会解析所有的HTML文件，识别出所有模板，
进行统一管理，运行过程中将其放到所需要的位置。
- {{counter}},counter是一个函数，此处需要js文件的配合，
要注入一个名为counter的函数的返回值。
- 每个模板都可以有一个配对的js文件，用来处理模板中的
动态内容。
- Template.hello.Oncreated()：是指名为'hello'的模板在被创建
时执行的操作。此处定义的counter是一个响应式变量，this关键
字指向当前模板的实例对象。
- Template.hello.helpers()：每个模板都有一个helper，辅助
模板处理业务逻辑。此处定义的counter()函数，反回了变量
counter的值。
- Template.hello.events({...})：每个模板都有一个events函数，
其中可以定义各个事件的处理方法。
    - 'click button'(event, instance)用来定义事件处理函数，其
含义是监控button元素的单击事件，传递给事件处理函数两个
参数，event为事件对象，instance为模板实例对象，通过instance
可以访问此模板中的属性。


