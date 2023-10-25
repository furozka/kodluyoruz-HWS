const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    const url = ctx.url
    if(url === "/"){
        // ctx.type = 'html';
        ctx.body = "<h1>Index Page</h1>"
    }else if(url==="/about"){
        ctx.body = "<h1>About Page</h1>"
    }else if(url==="/contact"){
        ctx.body = "<h1>Contact Page</h1>"
    }
});

app.listen(3000, ()=>{
    console.log("server is up")
});