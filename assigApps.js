// server setup
const http = require('http');
const fp = require('fs');
const server =   http.createServer(console.log("server running"),(req,res)=>{
        const url = req.url;
        const method = req.method;
        
        if(url ==='/'){
          // setting hearder in the website
           res.setHeader('content-type','text/html');
            res.write('<html>');
            res.write('<head><title>Main page</title></head>');
            res.write('<body><h1>Welcome to Main page</h1><body>');
            res.write('<body><h2>Please sent massage to me</h2><body>');
            // box 
            res.write('<form method="POST" action="/create-user"><input type="text" name="username"><button type="submit">Send</button> </form>');
            res.write('</html>');
            return res.end();
        };
        if(url === '/create-user' && method === 'POST'){
            const body = []
            // event
            req.on('data',(chunk)=>{
                body.push(chunk);
            });
            req.on('end', () =>{
                const parsedBody = Buffer.concat(body).toString();
                console.log(parsedBody.split('=')[1]);
                res.statusCode = 302;
                res.setHeader('location','/');
                res.end();
            });
        };
         
        if(url === '/users'){
             res.setHeader('content-type','text/html');
            res.write('<html>');
            res.write('<head> <title> Assigment 1</title> </head>');
            res.write('<body>');
            //localhost:3000/users
            res.write('<ul><li><a href="/user1"> User 1</a></li> <li><a href="/user2"> User 2</a></li>    <li><a href="/user3"> User 3</a></li>     </ul>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
         };

 });
 // localhost port for website
server.listen(3000);