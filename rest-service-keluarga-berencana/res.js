'use strict';

exports.ok = function(values, res) {
    const data = {
      'status': 200,
      'data': values
  };
  res.json(data);
  res.end();
};

exports.entityNotFound = function(res, id) {
    const data = {
      'status': 200,
      'message': `there is no data with id ${id}`
  };
  res.json(data);
  res.end();
};

exports.error = function(err, res) {
    const data = {
        'status': res.status(err.status || 500),
        'data': err.message
    };
    res.json(data);
    res.end();
  };
  