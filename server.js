const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// ファイルモジュールを読み込む
var fs = require('fs');

// ファイル読み込み
const indexPage = fs.readFileSync('./index.html', 'UTF-8');
const bootstrapCss = fs.readFileSync('./css/bootstrap.css', 'UTF-8');
const jqueryCsvJs = fs.readFileSync('./jquery.csv.js', 'UTF-8');
const readcsvJs = fs.readFileSync('./readcsv.js', 'UTF-8');
const wirteJs = fs.readFileSync('./write.js', 'UTF-8');
const csvFile = fs.readFileSync('./itemlist.csv', 'UTF-8');

const url = require('url');

var server = http.createServer(routeSetting);

// リクエストの処理
function routeSetting(req, res) {
    const url_parts = url.parse(req.url)
    switch(url_parts.pathname) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(indexPage);
            res.end();
            break;
        
        case '/css/bootstrap.css':
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(bootstrapCss);
            res.end();
            break;

        case '/jquery.csv.js':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(jqueryCsvJs);
            res.end();
            break;

        case '/readcsv.js':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(readcsvJs);
            res.end();
            break;
        
        case '/write.js':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(wirteJs);
            res.end();
            break;

        case '/itemlist.csv':
            res.write(csvFile);
            res.end();
            break;

    }
}
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});