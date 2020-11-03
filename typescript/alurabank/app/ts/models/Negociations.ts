class Negociations {
    private _negociations: Array<Negociation> = [];

    add(negociation: Negociation): void {
        this._negociations.push(negociation);
    }

    toArray(): Negociation[] {
        return [...this._negociations];
    }
}