import express, { NextFunction, Request, Response } from "express";
import router from "./router";
require('date-utils');

const app = express(); // express 객체 받아옴
const PORT = 3000; // 사용할 port를 3000번으로 설정


const requestTime = (req: Request, res: Response, next: NextFunction) => {
  req.requestTime = (new Date()).toFormat('YYYY-MM-DD HH24:MI:SS');
  //req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.use(express.json()); // express 에서 request body를 json 으로 받아오겠다.


app.use("/", router); // use -> 모든 요청
// localhost:8000/api -> api 폴더
// localhost:8000/api/user -> user.ts

//* HTTP method - GET
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  var responseText = 'Hello World! ';
  responseText += 'Requested at: ' + req.requestTime + '';
  //res.send(responseText);
  res.send(responseText);
});

app.listen(PORT, () => {
  console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}); // 8000 번 포트에서 서버를 실행하겠다!
