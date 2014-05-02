/* global Dragon:true, Ninja:true, Clown:true, Alien:true */
/* jshint unused:false, camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  let fighters = [];

  function init(){
    $('#add').click(add);
    $('#fighters').on('click', '.train', train);
  }

  function train(event){
    event.preventDefault();
    let num = $(this).closest('.holder').data('id');
    let amt = Math.ceil(Math.random() * 3);
    var damage = fighters[num].damage;
    fighters[num].damage = damage + amt;
  }

  function add(){
    let species = $('#species').val();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;
    let gender = $('#gender').val();
    let photo = $('#photo').val();
    let weapon = $('#weapon').val();
    let fighter;

    switch(species){
    case 'Dragon':
      fighter = new Dragon(gender, weapon, photo, name, age);
      break;
    case 'Ninja':
      fighter = new Ninja(gender, weapon, photo, name, age);
      break;
    case 'Clown':
      fighter = new Clown(gender, weapon, photo, name, age);
      break;
    case 'Alien':
      fighter = new Alien(gender, weapon, photo, name, age);
    }
    fighters.push(fighter);
    display(fighter);
  }

  function display(fighter){
    $(`#${fighter.species}`).append(`<div data-id=${fighter.id} class=holder>
                            <div class=photo style='background-image:url("${fighter.photo}")'></div>
                            <div class=info><div>Name: ${fighter.name}</div>
                            <div>Age: ${fighter.age}</div>
                            <div>Gender: ${fighter.gender}</div>
                            <div>Health: ${fighter.health}%</div>
                            <div class=weapon style='background-image:url("${fighter.weaponImg}")'></div>
                            <div>Damage: ${fighter.damage}</div>
                            <div class=train></div></div>
                            </div>`);
  }

})();
