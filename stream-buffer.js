const http = require('http');
const fs = require('fs');
const path = require('path');

// creating a server using raw node.js
const server = http.createServer();

// listener
server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET') {
        // console.log(req.url, req.method);

        // streaming file reading
        const readableStream = fs.createReadStream(path.join(process.cwd(), 'texts', 'readbju.txt'));


        readableStream.on('data', (buffer) => {
            res.statusCode = 200;
            res.write(buffer)
        })
        readableStream.on('end', () => {
            res.statusCode = 200;
            res.end('Hello from world!')
        })
        readableStream.on('error', (error) => {
            console.log(error);
            res.statusCode = 500;
            res.end('Something went Wrong!')
        })

        // ================
        /* Chat Gpt solve */
        // ==============
        // // Error handling
        // readableStream.on('error', (err) => {
        //     console.error('Error reading file:', err);
        //     res.statusCode = 500;
        //     res.end('Internal Server Error');
        // });

        // // Stream the file content to response
        //     readableStream.pipe(res);
        // } else {
        //     res.statusCode = 404;
        //     res.end('Not Found');
    }
});

server.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
});