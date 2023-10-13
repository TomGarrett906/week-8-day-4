// Make an abstract class (InventoryItem) with id, name, price, description.
//Worry about private and public stuff later

abstract class InventoryItem {
    private id: string;
    private name: string;
    private price:number;
    private description: string

    constructor(id:string, name:string, price:number, description:string){
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }
}




// Create a class named Weapon that extends InventoryItem:
//         
//       Use super() to call the parent class constructor.
//         Implement a getter and setter for the damage & range attribute.

class Weapon extends InventoryItem{
    private damage:number

    constructor(id: string, name: string, price: number, description:string, damage:number){
        super(id, name, price, description);
        this.damage = damage
    }

    getDamage(): number {
        return this.damage
    }

    setDamage(damage:number): void {
        this.damage = damage
    }
}


// Make a child class of InventoryItem called Armor. Make sure it has damage attribute...i can make private
// Worry about constructor later.

class Armor extends InventoryItem {
    private defense: number

    constructor(id: string, name: string, price: number, description:string, defense:number){
        super(id, name, price, description);
        this.defense = defense
    }

    getDefense(): number {
        return this.defense
    }

    setDefense(defense:number): void {
        this.defense = defense
    }



}


//Create a class called Character with id , name, archtype, fighting style, inventory.
// Worry about ........... private and public getters/setters later

class Character {
    id: string;
    name: string;
    archtype: string;
    fightingStyle: 'ranged' | 'melee';
    inventory: InventoryItem[];

    constructor(id: string, name: string, archtype:string, fightingStyle :'ranged'|'melee'){
        this.id = id
        this.name = name
        this.archtype = archtype
        this.fightingStyle = fightingStyle
        this.inventory = []
    }
};




//Create a class Inventory with the attributes items with array of InventoryItems
// Worry about setters/getters later

class Inventory {
    items: InventoryItem[]

    constructor() {
        this.items = []
    }
}


// - Shop Class Methods:
//     - constructor
//         - The constructor will create three (3) Items and add them to the list of items in the shop

// Worry about shop later.

///     Create a Character.
//     Create an Inventory.
//    Methods:
// ----add items from the inventory to the character's inventory,
function addToInventory(item: InventoryItem, character: Character){
    character.inventory.push(item)
}

// ----print the inventory,
function printInventory(character: Character){
    console.log(character.inventory)
}

// ----remove all instances of a singular item from the inventory,
function removeAllInstanceOfItem(item: InventoryItem, character: Character){
    character.inventory = character.inventory.filter(i => i != item)
}

// ----remove a specified quantity from the inventory. quantity = 3, item = Sword character = Sean    (seans inventory= [Sword, Mace, GirlsMace, Shield, Sword, , Sword, Shield, Sword])
function removeSpecifiedQuantity (quantity: number,item: InventoryItem, character:Character  ){
    let count = 0
    character.inventory = character.inventory.filter(i => {
        if (i === item && count < quantity){
            count++
            return false
        }
        return true
    })

}

// new Armor():


class Shop {
    items: InventoryItem[]


    constructor() {
        this.items = [new Weapon('1', 'toms bow', 100, 'magic bow', 11),
                     new Armor('1', 'toms tunic', 80, 'tough thread', 9)]
    }



    getItems(): InventoryItem[] {
    return this.items
}

}





const sean = new Character('1', 'Sean', 'warrior', 'melee')
const tom = new Character('2', 'Tom', 'hunter', 'ranged')



const sword = new Weapon('1', 'seans sword', 100, 'sweet sword', 11)
const shield = new Armor('1', 'seans shield', 90, 'sick shield', 13)
console.log(sword.getDamage())
sword.setDamage(15)
console.log(sword.getDamage())