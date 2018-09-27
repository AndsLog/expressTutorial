## node.js express 範例

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

- 點擊 "home"，會出現 "this is home page" 字串

- 點擊 "home"，會出現 "this is demo page" 字串

- 點擊 "users"，為所有會員的列表
  - 輸入```http://localhost:3000/users/{會員id}```，能觀看該會員詳細資訊
  - 輸入```http://localhost:3000/users/create?name={姓名}&age={年齡}&hight={身高}&width={寬}&feature={特色}```，能以query的方式新增會員

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
