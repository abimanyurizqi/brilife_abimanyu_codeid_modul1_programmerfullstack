'use strict';

module.exports = function (app) {
    const todoList = require('./controller.js');

    app.route('/')
        .get(todoList.index);

    app.route('/api/kontrasepsi')
        .get(todoList.kontrasepsiList);

    app.route('/api/kontrasepsi/:Id_Kontrasepsi')
        .get(todoList.findKontrasepsi);

    app.route('/api/propinsi')
        .get(todoList.propinsiList);

    app.route('/api/propinsi/:Id_Propinsi')
        .get(todoList.findPropinsi);

    app.route('/api/jumlah')
        .get(todoList.listJumlahPemakai);

    app.route('/api/form')
        .post(todoList.createListPemakai);

    app.route('/api/rekapitulasi')
        .get(todoList.listRekapitulasi);

    app.route('/api/rekapitulasi/propinsi')
        .get(todoList.listRekapitulasiPropinsi);

    app.route('/api/rekapitulasi/report')
        .get(todoList.rekapitulasi);


};