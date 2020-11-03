class Negociations {
    constructor() {
        this._negociations = [];
    }
    add(negociation) {
        this._negociations.push(negociation);
    }
    toArray() {
        return [...this._negociations];
    }
}
