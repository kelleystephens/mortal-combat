/* global Dragon:true, Dog:true, Cat:true, Sloth:true */
/* jshint unused:false, camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  let animals = [];

  function init(){
    $('#add').click(add);
    $('#animals').on('click', '.train', train);
  }

  function train(){
    let num = $(this).closest('.holder').data('id');
    let amt = Math.ceil(Math.random() * 3);
    var damage = animals[num].damage;
    animals[num].damage = damage + amt;
  }

  function add(){
    let species = $('#species').val();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;
    let gender = $('#gender').val();
    let photo = $('#photo').val();
    let weapon = $('#weapon').val();
    let animal;

    switch(species){
    case 'Dragon':
      animal = new Dragon(gender, weapon, photo, name, age);
      break;
    case 'Dog':
      animal = new Dog(gender, weapon, photo, name, age);
      break;
    case 'Cat':
      animal = new Cat(gender, weapon, photo, name, age);
      break;
    case 'Sloth':
      animal = new Sloth(gender, weapon, photo, name, age);
    }
    animals.push(animal);
    display(animal);
  }

  function display(animal){
    $(`#${animal.species}`).append(`<div data-id=${animal.id} class=holder>
                            <div class=photo style='background-image:url("${animal.photo}")'></div>
                            <div class=info><div>Name: ${animal.name}</div>
                            <div>Age: ${animal.age}</div>
                            <div>Gender: ${animal.gender}</div>
                            <div>Health: ${animal.health}%</div>
                            <div class=weapon style='background-image:url("${animal.weaponImg}")'></div>
                            <div>Damage: ${animal.damage}</div>
                            <div class=train>TRAIN!</div></div>
                            </div>`);
  }

})();
