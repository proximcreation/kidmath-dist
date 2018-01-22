const serve = require('serve')

const server = serve(__dirname, {
  port: process.env.PORT,
  ignore: ['node_modules']
})