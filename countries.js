const { db } = require('./database')
const express = require('express')

const getAll = () => {
    return db.manyOrNone('SELECT * FROM countries')
}

const getOne = (id) => {
    return db.one('SELECT * FROM countries WHERE country_id=$1', id)
}

const create = (country) => {
    return db.none('INSERT INTO countries(country_name, capital) VALUES(${country_name}, ${capital})', country)
}

const update = (country) => {
    return db.none('UPDATE TABLE countries SET capital=${capital}, country_name=${country_name} WHERE country_id=${id}', country)
}

const deleteCountry = (id) => {
    return db.none('DELETE FROM countries WHERE country_id=$1', id)
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteCountry
}