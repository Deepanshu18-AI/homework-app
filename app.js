const http = require('http');

// This prints out your exercise output directly into the Render logs
console.log("----------------------------------------");
console.log("Hello MOOC! This is my Exercise 1.15 Homework app running inside Docker!");
console.log("----------------------------------------");

// This dummy server keeps the container alive so Render stays happy
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Exercise 1.15/1.16 is running successfully live on Render!\n');
});

// Render automatically assigns a port, or defaults to 10000
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});