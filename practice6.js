const { logger } = require("sequelize/lib/utils/logger")

const characters=[
{

title:'Ninja',
emoji:'🥷',
powers:['agility','stealth','aggression'],


},
//'for off' using for loop used for bringing desired values
{

title:'Sorcerer',
emoji:'🧙‍♂️',
powers:['magic','invisibility','necromacy'],


},
{

title:'ogre',
emoji:'👹',
powers:['power','stamina','shapeshifting'],


},
{

title:'unicorn',
emoji:'🦄',
powers:['flight','power','purity'],


}

]
for(let character of characters){
    for(let power of character.powers)
        console.log(power)
}
