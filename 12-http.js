const { read } = require('fs');
const http = require('http');
const server = http.createServer((reg,res)=>{
if(reg.url==='/'){
    res.end('Welcome to our home page')
}
if(reg.url==='/about'){
    res.end('This is about page')
}
res.end(`
<h1>Oops!</h1>
<p>can't find the page</p>`)

})

server.listen(5000)