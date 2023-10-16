//---------------------------------------------------------------------------------------
// INVENTORY-ITEMS

abstract class InventoryItem {
  private id: string;
  public name: string;
  public price: number;
  public description: string;

  constructor(id: string, name: string, price: number, description: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class Weapon extends InventoryItem {
  private damage: number;

  constructor(id: string, name: string, price: number, description: string, damage: number) {
    super(id, name, price, description);
    this.damage = damage;
  }

  getDamage(): number {
    return this.damage;
  }

  setDamage(damage: number): void {
    this.damage = damage;
  }
}

class Armor extends InventoryItem {
  private defense: number;

  constructor(id: string, name: string, price: number, description: string, defense: number) {
    super(id, name, price, description);
    this.defense = defense;
  }

  getDefense(): number {
    return this.defense;
  }

  setDefense(defense: number): void {
    this.defense = defense;
  }
}


//---------------------------------------------------------------------------------------
// INVENTORY

class Inventory {
  private items: InventoryItem[];

  constructor() {
    this.items = [];
  }

  getItems(): InventoryItem[] {
    return this.items;
  }

  addItem(item: InventoryItem) {
    this.items.push(item);
  }

  removeItem(item: InventoryItem) {
    this.items = this.items.filter((i) => i !== item);
  }

  showItems(character: Character): void {
    const shopDiv = document.getElementById('shop');
    if (shopDiv) {
      this.items.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `Name: ${item.name}, Price: ${item.price}, Description: ${item.description}`;

        // Button to add the item to the character's inventory
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Inventory';
        addButton.addEventListener('click', () => {
          character.addToInventory(item);
         
        });

        itemElement.appendChild(addButton);
        shopDiv.appendChild(itemElement);
      });
    }
  }
}


//---------------------------------------------------------------------------------------
// CHARACTER

class Character {
  private id: string;
  private name: string;
  private archtype: string;
  private fightingStyle: "ranged" | "melee";
  private inventory: InventoryItem[];

  constructor(id: string, name: string, archtype: string, fightingStyle: "ranged" | "melee") {
    this.id = id;
    this.name = name;
    this.archtype = archtype;
    this.fightingStyle = fightingStyle;
    this.inventory = [];
  }

  static rpgCharacter(id: string, name: string, archtype: string, fightingStyle: "ranged" | "melee") {
    return new Character(id, name, archtype, fightingStyle);
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getArchtype(): string {
    return this.archtype;
  }

  getFightingStyle(): "ranged" | "melee" {
    return this.fightingStyle;
  }

  getInventory(): InventoryItem[] {
    return this.inventory;
  }

  addToInventory(item: InventoryItem) {
    this.inventory.push(item);
  }

  removeFromInventory(item: InventoryItem) {
    this.inventory = this.inventory.filter((i) => i !== item);
  }

  inventoryHTMLElement(): HTMLElement {
    const inventoryContainer = document.createElement('div');

    // Iterate through the character's inventory items
    this.inventory.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `Name: ${item.name}, Price: ${item.price}, Description: ${item.description}`;

      // Button to remove one instance of the item
      const removeOneButton = document.createElement('button');
      removeOneButton.textContent = 'Remove One';
      removeOneButton.addEventListener('click', () => this.removeFromInventory(item));

      // Button to remove all instances of the item
      const removeAllButton = document.createElement('button');
      removeAllButton.textContent = 'Remove All';
      removeAllButton.addEventListener('click', () => this.removeFromInventory(item));

      // Append the buttons to the item element
      itemElement.appendChild(removeOneButton);
      itemElement.appendChild(removeAllButton);

      // Append the item element to the inventory container
      inventoryContainer.appendChild(itemElement);
    });

    return inventoryContainer;
  }
}



//---------------------------------------------------------------------------------------
// SHOP

class Shop {
  private items: InventoryItem[];

  constructor() {
    this.items = [
      new Weapon("1", "toms bow", 100, "magic bow", 11),
      new Armor("1", "toms tunic", 80, "tough thread", 9),
    ];
  }

  getItems(): InventoryItem[] {
    return this.items;
  }
}

//---------------------------------------------------------------------------------------
// DRIVER

const sean = Character.rpgCharacter("1", "Sean", "warrior", "melee");
const tom = Character.rpgCharacter("2", "Tom", "hunter", "ranged");

const sword = new Weapon("1", "seans sword", 100, "sweet sword", 11);
const shield = new Armor("1", "seans shield", 90, "sick shield", 13);
console.log(sword.getDamage());
sword.setDamage(15);
console.log(sword.getDamage());
