// http://www.codewars.com/kata/mongodb-objectid

const Mongolão = {
  'isValid': s => {
    return s.length === 24 && /^[0-9a-f]{24}$/.test(s);
  },
  'getTimestamp': s => {
    return Mongolão.isValid(s) ? new Date(parseInt(s.slice(0, 8), 16) * 1000) : false;
  }
}

const Mongo = Mongolão;