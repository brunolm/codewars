// http://www.codewars.com/kata/what-dominates-your-array/solutions/javascript/me

const dominator = a => {
  let l = new Linq(a);
  let g = l.GroupBy(o => o);
  
  let sizes = g.Select(o => o.Elements.length).ToArray();
  let max = Math.max(...sizes);
  
  if (max <= (a.length / 2) || sizes.filter(s => s === max).length != 1)
    return -1;
  
  return g
    //.OrderByDescending(o => o.Elements.length)
    .Aggregate((x, y) => x.size > y.Elements.length ? x : { v: y.Key, size: y.Elements.length }, { v: -1, size: -Infinity }).v;
}


"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var LinqSharp = exports.LinqSharp = undefined;
(function (LinqSharp) {
    function GetHashCode(e) {
        if (e instanceof Number) return e.valueOf();
        var s = e instanceof Object ? StringifyNonCircular(e) : e.toString();
        var hash = 0;
        if (s.length === 0) return hash;
        for (var i = 0; i < s.length; ++i) {
            hash = (hash << 5) - hash + s.charCodeAt(i);
        }
        return hash;
    }
    LinqSharp.GetHashCode = GetHashCode;
    ;
    function StringifyNonCircular(obj) {
        var s = s || "";
        for (var i in obj) {
            var o = obj[i];
            if (o && (o instanceof Array || o.IsPlain())) {
                s += i + ":" + JSON.stringify(o);
            } else if (o && (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object") {
                s += i + ":" + "$ref#" + o;
            } else {
                s += i + ":" + o;
            }
        }
        return s;
    }
    LinqSharp.StringifyNonCircular = StringifyNonCircular;
    ;
})(LinqSharp || (exports.LinqSharp = LinqSharp = {}));

var Linq = (function () {
    function Linq() {
        var a = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _classCallCheck(this, Linq);

        this.a = a;
    }

    _createClass(Linq, [{
        key: "Aggregate",
        value: function Aggregate(func, initialValue) {
            var a;
            var current;
            if ((a = this.a).length === 0) throw "Aggregate of empty array";
            current = initialValue || a[0];
            for (var i = initialValue ? 0 : 1, n = a.length; i < n; ++i) {
                current = func(current, a[i]);
            }
            return current;
        }
    }, {
        key: "All",
        value: function All(predicate) {
            var a = this.a;
            for (var i = 0, n = a.length; i < n; ++i) {
                if (!predicate(a[i])) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: "Any",
        value: function Any(predicate) {
            var a = this.a;
            if ((typeof predicate === "undefined" ? "undefined" : _typeof(predicate)) === undefined) return this.a.length > 0;
            for (var i = 0, n = a.length; i < n; ++i) {
                if (predicate(a[i])) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "Average",
        value: function Average(selector) {
            var a = this.a;
            selector = selector || function (o) {
                return o;
            };
            var total = 0;
            var len = a.length;
            for (var i = 0; i < len; ++i) {
                total += selector(a[i]);
            }
            return total / len;
        }
    }, {
        key: "Concat",
        value: function Concat(array) {
            return new Linq(this.a.concat(array));
        }
    }, {
        key: "Contains",
        value: function Contains(value, comparer) {
            if (!comparer) return this.Any(function (o) {
                return o === value;
            });
            return this.Any(function (o) {
                return comparer.Equals(o, value);
            });
        }
    }, {
        key: "Count",
        value: function Count(selector) {
            if (selector) return this.Where(selector).Count();
            return this.a.length;
        }
    }, {
        key: "Distinct",
        value: function Distinct(comparer) {
            return this.DistinctBy(function (o) {
                return o;
            }, comparer);
        }
    }, {
        key: "DistinctBy",
        value: function DistinctBy(selector, comparer) {
            var a = this.a;
            var e;
            var keys = [],
                unique = [];
            for (var i = 0, n = a.length; i < n; ++i) {
                e = a[i];
                var objKey = selector(e);
                if (!new Linq(keys).Contains(objKey, comparer)) {
                    keys.push(objKey);
                    unique.push(e);
                }
            }
            return new Linq(unique);
        }
    }, {
        key: "ElementAt",
        value: function ElementAt(index) {
            if (index < 0 || index >= this.a.length) throw "Index was out of range. Must be non-negative and less than the size of the collection.";
            return this.a[index];
        }
    }, {
        key: "ElementAtOrDefault",
        value: function ElementAtOrDefault(index, defaultValue) {
            if (index >= this.a.length || index < 0) return defaultValue;
            return this.a[index];
        }
    }, {
        key: "Except",
        value: function Except(except, comparer) {
            var a = this.a;
            var result = [];
            var hashTable = {};
            var e, eHash;
            var getHash = comparer ? comparer.GetHashCode : function (e) {
                return LinqSharp.GetHashCode(e);
            };
            for (var i = 0, n = except.length; i < n; ++i) {
                hashTable[getHash(except[i])] = 1;
            }
            for (var i = 0, n = a.length; i < n; ++i) {
                e = a[i];
                eHash = getHash(e);
                if (!hashTable[eHash]) result.push(e);
            }
            return new Linq(result);
        }
    }, {
        key: "First",
        value: function First(selector) {
            if (this.a.length === 0) throw "Enumeration does not contain elements";
            if (!selector) return this.a[0];
            var result = this.Where(selector);
            if (result.Count() === 0) throw "Enumeration does not contain elements";
            return result.ElementAt(0);
        }
    }, {
        key: "FirstOrDefault",
        value: function FirstOrDefault(selector, defaultValue) {
            if (!selector) return this.a.length > 0 ? this.a[0] : defaultValue;
            return this.Where(selector).ElementAtOrDefault(0, defaultValue);
        }
    }, {
        key: "ForEach",
        value: function ForEach(callback) {
            var a = this.a;
            for (var i = 0, n = a.length; i < n; ++i) {
                if (callback(a[i], i) === false) break;
            }
        }
    }, {
        key: "GroupBy",
        value: function GroupBy(keySelector, elementSelector, comparer) {
            elementSelector = elementSelector || function (o) {
                return o;
            };
            comparer = comparer || { Equals: function Equals(a, b) {
                    return a == b;
                }, GetHashCode: function GetHashCode(e) {
                    return LinqSharp.GetHashCode(e);
                } };
            var a = this.a;
            var key, hashKey, reHashKey;
            var hashs = {};
            for (var i = 0, n = a.length; i < n; ++i) {
                reHashKey = undefined;
                key = keySelector(a[i]);
                hashKey = comparer.GetHashCode(key);
                if (typeof hashs[hashKey] !== "undefined") reHashKey = comparer.Equals(key, hashs[hashKey].Key) ? hashKey : hashKey + i;
                if (typeof reHashKey !== "undefined" && reHashKey !== hashKey) hashKey = reHashKey;
                hashs[hashKey] = hashs[hashKey] || { Key: key, Elements: [] };
                hashs[hashKey].Elements.push(elementSelector(a[i]));
            }
            var keys = Object.keys(hashs);
            var ret = [];
            for (var i = 0, n = keys.length; i < n; ++i) {
                ret.push(hashs[keys[i]]);
            }
            return new Linq(ret);
        }
    }, {
        key: "IndexOf",
        value: function IndexOf(e, comparer) {
            var a = this.a;
            if (comparer) {
                for (var i = 0, n = a.length; i < n; ++i) {
                    var ce = a[i];
                    if (comparer.Equals(ce, e)) {
                        return i;
                    }
                }
            } else {
                for (var i = 0, n = a.length; i < n; ++i) {
                    if (a[i] === e) {
                        return i;
                    }
                }
            }
            return -1;
        }
    }, {
        key: "Intersect",
        value: function Intersect(array, comparer) {
            var result = [];
            for (var i = 0, n = array.length; i < n; ++i) {
                if (this.Contains(array[i], comparer)) {
                    result.push(array[i]);
                }
            }
            return new Linq(result);
        }
    }, {
        key: "Join",
        value: function Join(array, outerKeySelector, innerKeySelector, resultSelector, comparer) {
            var result = [];
            var outer = this.Select(outerKeySelector);
            var inner = new Linq(array).Select(innerKeySelector);
            for (var i = 0, n = outer.Count(); i < n; ++i) {
                var outerKey = outer.ElementAt(i);
                var index = -1;
                if ((index = inner.IndexOf(outerKey, comparer)) != -1) {
                    var innerKey = inner.ElementAt(index);
                    result.push(resultSelector(outerKey, innerKey));
                }
            }
            return new Linq(result);
        }
    }, {
        key: "Last",
        value: function Last(predicate) {
            if (this.a.length === 0) throw "Enumeration does not contain elements";
            if (!predicate) return this.a[this.a.length - 1];
            var result = this.Where(predicate);
            if (result.Count() === 0) throw "Enumeration does not contain elements";
            return result.Last();
        }
    }, {
        key: "LastOrDefault",
        value: function LastOrDefault(predicate, defaultValue) {
            if (this.a.length === 0) return defaultValue;
            if (!predicate) return this.a[this.a.length - 1];
            var result = this.Where(predicate);
            if (result.Count() === 0) return defaultValue;
            return result.LastOrDefault(null, defaultValue);
        }
    }, {
        key: "Max",
        value: function Max(selector) {
            var a = this.a;
            if (a.length === 0) throw "Sequence contains no elements.";
            selector = selector || function (o) {
                return o;
            };
            var max = selector(a[0]);
            for (var i = 0, n = a.length; i < n; ++i) {
                var next = selector(a[i]);
                if (next > max) max = next;
            }
            return max;
        }
    }, {
        key: "Min",
        value: function Min(selector) {
            var a = this.a;
            if (a.length === 0) throw "Sequence contains no elements.";
            selector = selector || function (o) {
                return o;
            };
            var min = selector(a[0]);
            for (var i = 0, n = a.length; i < n; ++i) {
                var next = selector(a[i]);
                if (next < min) min = next;
            }
            return min;
        }
    }, {
        key: "OrderBy",
        value: function OrderBy(keySelector, comparer) {
            comparer = comparer || function (a, b) {
                return a > b ? 1 : -1;
            };
            this.a.sort(function (l, r) {
                return comparer(keySelector(l), keySelector(r));
            });
            return this;
        }
    }, {
        key: "OrderByDescending",
        value: function OrderByDescending(keySelector, comparer) {
            comparer = comparer || function (a, b) {
                return a > b ? 1 : -1;
            };
            comparer = (function (comparer) {
                return function (a, b) {
                    return -comparer(a, b);
                };
            })(comparer);
            this.a.sort(function (l, r) {
                return comparer(keySelector(l), keySelector(r));
            });
            return this;
        }
    }, {
        key: "Reverse",
        value: function Reverse() {
            var right = this.a.length - 1;
            for (var left = 0; left < right; ++left, --right) {
                var temporary = this.a[left];
                this.a[left] = this.a[right];
                this.a[right] = temporary;
            }
            return this;
        }
    }, {
        key: "Select",
        value: function Select(selector) {
            var a = this.a;
            var result = [];
            for (var i = 0, n = a.length; i < n; ++i) {
                result.push(selector(a[i]));
            }
            return new Linq(result);
        }
    }, {
        key: "SelectMany",
        value: function SelectMany(selector, resultSelector) {
            var a = this.a;
            var result = [];
            for (var i = 0, n = a.length; i < n; ++i) {
                result = result.concat(selector(a[i]));
            }
            if (!resultSelector) return new Linq(result);else return new Linq(result).Select(resultSelector);
        }
    }, {
        key: "SequenceEqual",
        value: function SequenceEqual(second, comparer) {
            var a = this.a;
            if (typeof a === "undefined" || typeof second === "undefined") {
                throw "Do not pass null values to arrays.";
            }
            if (a === second) {
                return true;
            }
            if (a.length !== second.length) {
                return false;
            }
            if (comparer) {
                for (var i = 0, n = a.length; i < n; i++) {
                    if (!comparer(a[i], second[i])) return false;
                }
            } else {
                for (var i = 0, n = a.length; i < n; i++) {
                    if (a[i] !== second[i]) return false;
                }
            }
            return true;
        }
    }, {
        key: "Single",
        value: function Single(predicate) {
            var a = this.a;
            if (!predicate) {
                if (a.length != 1) throw "Source has none or more than one element";
                return a[0];
            }
            var found = null;
            for (var i = 0, n = a.length; i < n; ++i) {
                if (predicate(a[i])) {
                    if (found != null) throw "Source has more than one element";
                    found = a[i];
                }
            }
            return found;
        }
    }, {
        key: "SingleOrDefault",
        value: function SingleOrDefault(predicate, defaultValue) {
            var a = this.a;
            if (!predicate) {
                if (a.length != 1) return defaultValue;
                return a[0];
            }
            var found = null;
            for (var i = 0, n = a.length; i < n; ++i) {
                if (predicate(a[i])) {
                    if (found != null) return defaultValue;
                    found = a[i];
                }
            }
            return found;
        }
    }, {
        key: "Skip",
        value: function Skip(count) {
            return new Linq(this.a.slice(count));
        }
    }, {
        key: "SkipWhile",
        value: function SkipWhile(predicate) {
            var a = this.a,
                i = 0;
            for (var n = a.length; i < n; ++i) {
                if (predicate(a[i]) === false) break;
            }
            return new Linq(a.slice(i));
        }
    }, {
        key: "Sum",
        value: function Sum(selector) {
            var a = this.a;
            var result = 0;
            if (selector) {
                for (var i = 0, n = a.length; i < n; ++i) {
                    result += selector(a[i]);
                }
            } else {
                for (var i = 0, n = a.length; i < n; ++i) {
                    result += a[i];
                }
            }
            return result;
        }
    }, {
        key: "Take",
        value: function Take(count) {
            var a = this.a;
            var result = [];
            var len = count > (len = a.length) ? len : count;
            for (var i = 0; i < len; ++i) {
                result.push(a[i]);
            }
            return new Linq(result);
        }
    }, {
        key: "TakeWhile",
        value: function TakeWhile(predicate) {
            var a = this.a;
            var result = [];
            for (var i = 0, n = a.length, e; i < n; ++i) {
                e = a[i];
                if (predicate(e)) {
                    result.push(e);
                } else {
                    break;
                }
            }
            return new Linq(result);
        }
    }, {
        key: "Union",
        value: function Union(second, comparer) {
            var a = this.a;
            var result = [];
            var hashTable = {};
            var e, eHash;
            var getHash = comparer ? comparer.GetHashCode : function (e) {
                return LinqSharp.GetHashCode(e);
            };
            for (var i = 0, n = a.length; i < n; ++i) {
                e = a[i];
                eHash = getHash(e);
                if (!hashTable[eHash]) {
                    hashTable[eHash] = e;
                    result.push(e);
                }
            }
            for (var i = 0, n = second.length; i < n; ++i) {
                e = second[i];
                eHash = getHash(e);
                if (!hashTable[eHash]) {
                    hashTable[eHash] = e;
                    result.push(e);
                }
            }
            return new Linq(result);
        }
    }, {
        key: "Where",
        value: function Where(selector) {
            var a = this.a;
            var e;
            var result = [];
            for (var i = 0, n = a.length; i < n; ++i) {
                e = a[i];
                if (selector(e)) {
                    result.push(e);
                }
            }
            return new Linq(result);
        }
    }, {
        key: "Zip",
        value: function Zip(array, resultSelector) {
            var a = this.a;
            var result = [];
            var len = a.length > array.length ? array.length : a.length;
            for (var i = 0, n = len; i < n; ++i) {
                result.push(resultSelector(a[i], array[i]));
            }
            return new Linq(result);
        }
    }, {
        key: "ToArray",
        value: function ToArray() {
            return this.a;
        }
    }]);

    return Linq;
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Linq;