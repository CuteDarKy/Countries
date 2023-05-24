const pg = require('pg-promise')(/* options */)
const db = pg('postgres://postgres:password@postgres:5432/cuontries')

module.exports = {
    db
}