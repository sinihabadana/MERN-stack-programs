// Import the built-in 'http' module
const http = require('http');
// Create a web server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // Display the workflow message
  res.write('<h3>Workflow of JavaScript code execution in Node.js:</h3>');
  res.write('<ol>');
  res.write('<li>Write JavaScript code.</li>');
  res.write('<li>Use Node.js to execute the code.</li>');
 


 
res.write('<li>Node.js creates a server using the HTTP module.</li>');
  res.write('<li>The server listens for client requests.</li>');
  res.write('<li>When a request is received, the JavaScript code runs and sends a      response.</li>');
  res.write('<li>The browser displays the response.</li>');
  res.write('</ol>');
  // End the response
  res.end('<p><b>Server execution completed successfully!</b></p>');
  });
// Start the server and listen on port 5000
server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});
