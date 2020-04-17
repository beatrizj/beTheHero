const crypto = require('crypto') //gerar um texto aleatório

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX')
}