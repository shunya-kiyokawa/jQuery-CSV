main();

function main() {
    export_csv();
}

function export_csv() {
    $('.csv').click(function () {
        const fs = require("fs");

        // 書き込むデータ準備
        const data = "Hello Node";
        
        // 書き込み
        fs.writeFile("file1.txt", data, (err) => {
          if (err) throw err;
          console.log('正常に書き込みが完了しました');
        });
        
    })
}