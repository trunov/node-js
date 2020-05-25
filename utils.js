console.log('utils.js');



const notes = function (a) {
    return fs.readFileSync(a)
}

module.exports = notes;