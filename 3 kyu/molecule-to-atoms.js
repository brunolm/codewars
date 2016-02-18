// http://www.codewars.com/kata/molecule-to-atoms

function parseMolecule(formula) {
  let result = {};
  
  let p = (m, mol, fact) => {
    let x = parse(mol, fact || 1);
    let y = Object.keys(x).map(a => {
      return a + x[a];
    }, '');

    return y.join('');
  };
  
  formula = parseInBrackets(formula, /\((.*?)\)(\d*)/g, p);
  formula = parseInBrackets(formula, /\[(.*?)\](\d*)/g, p);
  formula = parseInBrackets(formula, /\{(.*?)\}(\d*)/g, p);

  formula.match(/([A-Z][a-z]*(?:\d*))/g).forEach(m => {
    let mol = m.match(/[A-Z][a-z]*/);
    let f = m.match(/\d+/);
    f = f ? +f[0] : 1;
    
    result[mol] = (result[mol] || 0) + f;
  });
  
  return result;
}

function parseInBrackets(formula, exp, fn) {
  if (!/(\[|\{|\()/g.test(formula)) {
    return formula;
  }
  let r = formula.replace(exp, fn);

  return r;
}

function parse(formula, f) {
  let result = [];

  let restExp = /([A-Z][a-z]?)(\d*)/g;
  let p;
  
  while ((p = restExp.exec(formula))) {
    let molecule = p[1];
    let n = p[2] || 1;
    
    result.push({ key: molecule, val: n * f });
  }
  
  result = result.reduce((a, b) => {
    a[b.key] = (a[b.key] || 0) + b.val;
    return a;
  }, { });

  return result;
}
