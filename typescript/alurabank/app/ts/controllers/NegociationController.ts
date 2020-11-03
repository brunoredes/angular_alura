class NegociationController {
    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negociations: Negociations = new Negociations();
    private _negociationsView = new NegociationsView('#negociationsView');
    private _messageView = new MessageView('#messageView');

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValue = <HTMLInputElement>document.querySelector('#valor');
        this._negociationsView.update(this._negociations);
    }

    async add(event: Event) {
        event.preventDefault();

        const negociation = new Negociation(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value),
        );
        this._negociations.toArray().length = 0;

        this._negociations.add(negociation);

        this._negociationsView.update(this._negociations);
        this._messageView.update('Negociation added with success');
    }
}