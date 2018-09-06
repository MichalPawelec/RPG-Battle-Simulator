$(() => {

class RPGCharacter {
    constructor (name) {
        this.name = name;
        this.strength = "";
        this.intelligence = "";
        this.luck = "";
    };

    fight(opponent) {
        if (this.strength > opponent.strength) {
            return this.name;
        } else if (this.strength < opponent.strength) {
            return opponent.name;
        } else if (this.strength === opponent.strength) {
            return "Remis!";
        }
    };

    playChess(opponent) {
        if (this.intelligence > opponent.intelligence) {
            return this.name;
        } else if (this.intelligence < opponent.intelligence) {
            return opponent.name;
        } else if (this.intelligence === opponent.intelligence) {
            return "Remis!";
        }
    };

    tossCoin(opponent) {
        if (this.luck > opponent.luck) {
            return this.name;
        } else if (this.luck < opponent.luck) {
            return opponent.name;
        } else if (this.luck === opponent.luck) {
            return "Remis!"
        }
    };
};

class Dwarf extends RPGCharacter {
    constructor(name, strength, intelligence, luck) {
        super(name);
        this.strength = Math.floor(Math.random() * (100 - 40) + 40);
        this.intelligence = Math.floor(Math.random() * (80 - 40) + 40);
        this.luck = Math.floor(Math.random() * (80 - 30) + 30);
        this.race = "dwarf";
    };
};

class Orc extends RPGCharacter {
    constructor(name, strength, intelligence, luck) {
        super(name);
        this.strength = Math.floor(Math.random() * (100 - 50) + 50);
        this.intelligence = Math.floor(Math.random() * (20 - 5) + 5);
        this.luck = Math.floor(Math.random() * (100 - 1) + 1);
        this.race = "orc";
    };
};

class Elf extends RPGCharacter {
     constructor (name, strength, intelligence, luck) {
        super(name);
        this.strength = Math.floor(Math.random() * (80 - 30) + 30);
        this.intelligence = Math.floor(Math.random() * (100 - 60) + 60);
        this.luck = Math.floor(Math.random() * (100 - 20) + 20);
        this.race = "elf";
     };
};

const dwarf = new Dwarf("Gimli");
const orc = new Orc("Uruk Hai");
const elf = new Elf("Legolas");

$('#fight1').text(`${orc.name} vs ${elf.name} - wins: ${orc.fight(elf)}`);
$('#fight2').text(`${orc.name} vs ${dwarf.name} - wins: ${orc.fight(dwarf)}`);
$('#fight3').text(`${elf.name} vs ${dwarf.name} - wins: ${elf.fight(dwarf)}`);
$('#chess1').text(`${orc.name} vs ${elf.name} - wins: ${orc.playChess(elf)}`);
$('#chess2').text(`${orc.name} vs ${dwarf.name} - wins: ${orc.playChess(dwarf)}`);
$('#chess3').text(`${elf.name} vs ${dwarf.name} - wins: ${elf.playChess(dwarf)}`);
$('#coin1').text(`${orc.name} vs ${elf.name} - wins: ${orc.tossCoin(elf)}`);
$('#coin2').text(`${orc.name} vs ${dwarf.name} - wins: ${orc.tossCoin(dwarf)}`);
$('#coin3').text(`${elf.name} vs ${dwarf.name} - wins: ${elf.tossCoin(dwarf)}`);
});