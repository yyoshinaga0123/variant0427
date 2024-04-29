const express = require('express');
const app = express();
const port = 3000;

// 12x12 の掛け算表を生成する関数
function generateMultiplicationTable(size) {
    let table = '';
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            table += (i * j).toString().padStart(4, ' ') + ' ';
        }
        table += '\n'; // 行ごとに改行を加える
    }
    return table;
}

// ルートパスへのGETリクエストに対する応答
app.get('/', (req, res) => {
    const table = generateMultiplicationTable(12);
    res.send(`<pre>${table}</pre>`); // preタグを使ってフォーマットを保持
});

// サーバをポート3000で起動
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

