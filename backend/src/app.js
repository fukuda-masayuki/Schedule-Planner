const express = require('express');
const app = express();
const port = 3000;

// ルートエンドポイント
app.get('/', (req, res) => {
    res.send('Hello World from the backend!');
});

// サーバーの起動
app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});