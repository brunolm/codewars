// http://www.codewars.com/kata/undo-slash-redo/solutions/javascript/me

function undoRedo(object) {
  return {
    obj: object || {},
    u: [],
    r: [],
    set: function(key, value) {
      let v = this.obj[key];
      let create = typeof v === 'undefined';
      this.obj[key] = value;
      this.r = [];
      this.u.push({ k: key, v: value, prev: v, set: !create, create: create });
    },
    get: function(key) {
      return this.obj[key];
    },
    del: function(key) {
      let v = this.obj[key];
      delete this.obj[key];
      this.r = [];
      this.u.push({ k: key, v: undefined, prev: v, del: true });
    },
    undo: function() {
      if (!this.u.length) {
        throw new Error('nothing to undo');
      }

      let u = this.u.pop();
      let r = { k: u.k, v: u.v, prev: u.prev, del: u.del, create: u.create };
      
      if (u.create) {
        delete this.obj[u.k];
      }
      else {
        this.obj[u.k] = u.prev;
      }
      this.r.push(r);
    },
    redo: function() {
      if (!this.r.length) {
        throw new Error('nothing to redo');
      }

      let r = this.r.pop();
      this.u.push({ k: r.k, v: r.v, prev: this.obj[r.k], del: r.del, create: r.create });

      if (r.del) {
        delete this.obj[r.k];
      }
      else {
        this.obj[r.k] = r.v;
      }
    }
  };
}