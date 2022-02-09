#!/usr/bin/env node

const axios = require('axios')
const chalk = require('chalk');

const url = "const url = "https://docs.github.com/en/rest"

// make a get request to the url
axios({
  method: 'get',
  url: url,
  headers: { 'Accept': 'application/json' }, // this api needs this header set for the request
}).then(res => {
  const UserName = res.data.contents.user[0].UserName
  const Name = res.data.contents.user[0].Name
  const date = res.data.contents.user[0].date
  const numofStars = res.data.contents.user[0].numStr
  const Release = res.data.contents.user[0].release
  const log = chalk.green(`${quote} - ${UserName}`) 
   const log = chalk.green(`${quote} - ${Name}`) 
   const log = chalk.green(`${quote} - ${date}`) // use chalk to set the color green on successful response
  console.log(log)
}).catch(err => {
  const log = chalk.red(err) // set the color red here for errors.
  console.log(log)
})
