const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // CORSを有効化

app.use(express.static(__dirname)); // 静的ファイルのサービング

app.get('/api/multiplication', (req, res) => {
    const size = parseInt(req.query.size) || 12;
    const table = [];
    for (let i = 1; i <= size; i++) {
        const row = [];
        for (let j = 1; j <= size; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    res.json({ size: size, table: table });
});

app.listen(port, () => {
    console.log("Server running at http://localhost:${port}");
});
