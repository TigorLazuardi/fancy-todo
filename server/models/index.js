const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const output = {}


fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .map(file => {
        file = file.replace('.js', '')
        output[file] = require(('./' + file))
    }
    )

module.exports = output