const http = require('http');
const fs = require('fs');
const path = require('path');

// Port number for the server
const PORT = 3000;

// MIME types for common file types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml'
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Serve the "index.html" file if the root path is requested
  let filePath = req.url === '/' ? 'index.html' : req.url.substring(1);

  // Normalize the file path
  filePath = path.resolve(__dirname, filePath);

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found, respond with a 404 error
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    // Determine the MIME type based on the file extension
    const ext = path.extname(filePath);
    const mimeType = mimeTypes[ext] || 'application/octet-stream';

    // Read and serve the file
    fs.readFile(filePath, (error, content) => {
      if (error) {
        // Handle any errors while reading the file
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      } else {
        // Successfully serve the file
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(content);
      }
    });
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

