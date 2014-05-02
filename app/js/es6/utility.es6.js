/* exported calculateDamage, weaponImg, fighterID*/

var fighterID = 0;

function calculateDamage(weapon){
  'use strict';
 let max;

 switch(weapon){
 case 'Poison':
   max= 10;
   break;
 case 'Fire':
   max= 20;
   break;
 case 'Arrow':
   max= 15;
   break;
 case 'Axe':
   max= 30;
 }

 return Math.ceil(Math.random() * max);
}

function weaponImg(weapon){
  'use strict';
  let img;

 switch(weapon){
 case 'Poison':
   img= '../media/poison.png';
   break;
 case 'Fire':
   img= '../media/fire.png';
   break;
 case 'Arrow':
   img= '../media/arrow.png';
   break;
 case 'Axe':
   img= '../media/axe.png';
 }
 return img;
}
