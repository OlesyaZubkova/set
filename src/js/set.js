export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Персонаж существует!');
        } else {
            this.members.add(character);
        };
    };

    addAll(...characters) {
        for (let item of characters) {
            this.members.add(item);
        }
    };

    toArray() {
        const array = [];
        this.members.forEach(item => {
            array.push(item);
        });
        return array;
        
    };
};