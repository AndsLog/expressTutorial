## node.js express 練習題─query url

### 目的
熟悉router的應用、了解前端表單如何將資訊傳送至後端及從url 的 query 中記得資料

### 使用須知

- 安裝[node.js](https://nodejs.org/en/)

- 將專案clone至本機

- 開啟命令提示字元(cmd) / 終端機(terminal)
```
cd {存放專案的路徑}\expressToturial
npm install
npm start
```
- 開啟瀏覽器，輸入http://localhost:3000/

### 檔案架構
```
├─bin
│  │
│  └─www  //程式入口點，設定偵聽的port號及錯誤處理
│
├─public
│  │
│  ├─images
│  │
│  ├─javascripts
│  │
│  └─stylesheets
│     │
│     └─style.css
│
├─routes  //網站路由處理
│  │
│  ├─index.js
│  │
│  └─users.js
│
├─views  //呈現網頁
│  │
│  ├─error.ejs
│  │
│  └─index.ejs
│
├─app.js  //中介軟體(middleware)及程式運行流程的總管
│
├─package.json  //重要
```
