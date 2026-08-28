const furina = require('express')
const server = furina()
const PORT = 1013
const HOSTNAME = '0.0.0.0'
furina.listen(PORT, HOSTNAME() => {
console.log(`Server is running in ${HOSTNAME}:${PORT}`)
})