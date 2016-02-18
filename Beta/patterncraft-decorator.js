// http://www.codewars.com/kata/patterncraft-decorator

class Marine {
  constructor(_damage, _armor) {
    Object.assign(this, { _damage, _armor });
  }
  
  get damage() { return this._damage; }
  set damage(value) { this._damage = value; }
  
  get armor() { return this._armor; }
  set armor(value) { this._armor = value; }
}

class MarineWeaponUpgrade {
  constructor(marine) {
    Object.assign(this, { _damage: marine.damage, _armor: marine.armor });
  }
  
  get damage() { return this._damage + 1; }
  set damage(value) { this._damage = value; }
  
  get armor() { return this._armor; }
  set armor(value) { this._armor = value; }
}

class MarineArmorUpgrade {
  constructor(marine) {
    Object.assign(this, { _damage: marine.damage, _armor: marine.armor });
  }
  
  get damage() { return this._damage; }
  set damage(value) { this._damage = value; }
  
  get armor() { return this._armor + 1; }
  set armor(value) { this._armor = value; }
}
