// http://www.codewars.com/kata/the-takewhile-function/solutions/javascript/me

function takeWhile (arr, pred) {
  return TakeWhile(arr, pred);
}

function TakeWhile(a, predicate) {
            //var a = this.a;
            var result = [];
            for (var i = 0, n = a.length, e; i < n; ++i) {
                e = a[i];
                if (predicate(e)) {
                    result.push(e);
                } else {
                    break;
                }
            }
            return result;//new Linq(result);
        }