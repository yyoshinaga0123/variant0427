// 12x12 の掛け算表を生成してコンソールに出力する
function printMultiplicationTable(size) {
    for (let i = 1; i <= size; i++) {
        let row = ''; // 行の文字列を初期化
        for (let j = 1; j <= size; j++) {
            row += (i * j).toString().padStart(4, ' '); // 数値を文字列に変換し、4文字分の幅で右揃え
        }
        console.log(row); // 行を出力
    }
}

// 12x12 の掛け算表を出力
printMultiplicationTable(12);
