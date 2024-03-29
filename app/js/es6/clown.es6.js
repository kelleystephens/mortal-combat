/* exported Clown */
/* jshint unused:false */
/* global calculateDamage:true, weaponImg:true, fighterID:true */

class Clown{
  constructor(gender, weapon, photo, name='No Name', age=0){  //this is function, must be called constructor, pass properties you want form main.js
    this.id = fighterID++;
    this.name = name;
    this.age = age * 1; //passes in as string and then make into number
    this.gender = gender;
    this.photo = photo;
    this.species= 'clown';
    this.health= 100;
    this.weapon= weapon;
    this.weaponImg= weaponImg(weapon);
    this.damage= calculateDamage(weapon);
  }
}
