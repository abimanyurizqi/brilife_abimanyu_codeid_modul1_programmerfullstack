'use strict';

const response = require('./res');
const connection = require('./conn');
const { BadRequest } = require('./utils/error');

exports.kontrasepsiList = function (req, res) {
    connection.query('SELECT * FROM LIST_KONTRASEPSI', function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findKontrasepsi = function (req, res) {
    const Id_Kontrasepsi = req.params.Id_Kontrasepsi;
    connection.query('SELECT * FROM LIST_KONTRASEPSI WHERE Id_Kontrasepsi = ?', [Id_Kontrasepsi], function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            if (!rows.length) {
                response.entityNotFound(res, Id_Kontrasepsi);
            } else {

                response.ok(rows, res)
            }
        }
    });
};

exports.propinsiList = function (req, res) {
    connection.query('SELECT * FROM LIST_PROPINSI', function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.findPropinsi = function (req, res) {
    const Id_Propinsi = req.params.Id_Propinsi;
    connection.query('SELECT * FROM LIST_PROPINSI WHERE Id_Propinsi = ?', [Id_Propinsi], function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            if (!rows.length) {
                response.entityNotFound(res, Id_Propinsi);
            } else {

                response.ok(rows, res)
            }
        }
    });
};

exports.listJumlahPemakai = function (req, res) {
    connection.query('SELECT * FROM LIST_PEMAKAI_KONTRASEPSI', function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.createListPemakai = function (req, res, next) {
    const Id_Propinsi = req.body.Id_Propinsi;
    const Id_Kontrasepsi = req.body.Id_Kontrasepsi;
    const Jumalah_Pemakai = req.body.Jumlah_Pemakai;

    try {
        if (!Id_Kontrasepsi || !Id_Kontrasepsi || !Jumalah_Pemakai) {
            throw new BadRequest('Missing required fields');
        }
        connection.query('INSERT INTO LIST_PEMAKAI_KONTRASEPSI (Id_Propinsi, Id_Kontrasepsi, Jumlah_Pemakai) VALUES (?, ?, ?)', [Id_Propinsi, Id_Kontrasepsi, Jumalah_Pemakai], function (error, rows, fields) {
            if (error) {
                response.error(error)
            } else {
                response.ok('Berhasil Ditambahkan!', res)
            }
        });

    } catch (err) {
        next(err)
    }

};

exports.listJumlahPemakai = function (req, res) {
    connection.query('SELECT * FROM LIST_PEMAKAI_KONTRASEPSI', function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.listRekapitulasi = function (req, res, next) {
    connection.query('SELECT LIST_PROPINSI.Nama_Propinsi as Propinsi, LIST_KONTRASEPSI.Nama_Kontrasepsi as Kontrasepsi, SUM(LIST_PEMAKAI_KONTRASEPSI.JUMLAH_PEMAKAI) as jumlah_kontrasespsi FROM LIST_PEMAKAI_KONTRASEPSI JOIN LIST_KONTRASEPSI ON LIST_PEMAKAI_KONTRASEPSI.Id_Kontrasepsi = LIST_KONTRASEPSI.Id_Kontrasepsi JOIN LIST_PROPINSI ON LIST_PEMAKAI_KONTRASEPSI.Id_Propinsi = LIST_PROPINSI.Id_Propinsi GROUP BY Nama_Kontrasepsi, Nama_Propinsi', function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.listRekapitulasiPropinsi = function (req, res, next) {
    connection.query('SELECT LIST_PROPINSI.Nama_Propinsi as Propinsi, SUM(LIST_PEMAKAI_KONTRASEPSI.JUMLAH_PEMAKAI) as jumlah_kontrasespsi FROM LIST_PEMAKAI_KONTRASEPSI JOIN LIST_KONTRASEPSI ON LIST_PEMAKAI_KONTRASEPSI.Id_Kontrasepsi = LIST_KONTRASEPSI.Id_Kontrasepsi JOIN LIST_PROPINSI ON LIST_PEMAKAI_KONTRASEPSI.Id_Propinsi = LIST_PROPINSI.Id_Propinsi GROUP BY Nama_Propinsi', function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            response.ok(rows, res)
        }
    });
};


exports.rekapitulasi = function (req, res, next) {
    connection.query('SELECT A.Propinsi, SUM(IF(Kontrasepsi = Pil)) AS Pil, SUM(IF(Id_Kontrasepsi = )) AS Kondom, SUM(IF(Id_Kontrasepsi = 3)) AS IUD FROM (SELECT LIST_PROPINSI.Nama_Propinsi as Propinsi, LIST_KONTRASEPSI.Nama_Kontrasepsi as Kontrasepsi, SUM(LIST_PEMAKAI_KONTRASEPSI.JUMLAH_PEMAKAI) as jumlah_kontrasespsi FROM LIST_PEMAKAI_KONTRASEPSI JOIN LIST_KONTRASEPSI ON LIST_PEMAKAI_KONTRASEPSI.Id_Kontrasepsi = LIST_KONTRASEPSI.Id_Kontrasepsi JOIN LIST_PROPINSI ON LIST_PEMAKAI_KONTRASEPSI.Id_Propinsi = LIST_PROPINSI.Id_Propinsi GROUP BY Nama_Kontrasepsi, Nama_Propinsi) A GROUP BY A.Propinsi', function (error, rows, fields) {
        if (error) {
            response.error(error)
        } else {
            response.ok(rows, res)
        }
    });
};


exports.index = function (req, res) {
    response.ok("Hello World rest service!", res)
};