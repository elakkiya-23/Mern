const http = require('http');
const PORT = 3000;

const server = http.createServer(
    (req, res) => {
        if (req.url == '/') {
            res.write("Hello world");
            res.end();
        }
        if (req.url == '/api/users') {
            res.write(JSON.stringify([{ id: 1, name: 'Elakkiya' }, { id: 2, name: 'Kaviya' }, { id: 3, name: 'Elango' }]));
        }
    }
);


server.listen(PORT);

// server.on('connection', (socket) => {
//     console.log('New connection...');
// });

console.log(`Listening to port ${PORT}`);