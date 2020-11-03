var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class NegociationController {
    constructor() {
        this._negociations = new Negociations();
        this._negociationsView = new NegociationsView('#negociationsView');
        this._messageView = new MessageView('#messageView');
        this._inputDate = document.querySelector('#data');
        this._inputQuantity = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        this._negociationsView.update(this._negociations);
    }
    add(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const negociation = new Negociation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
            this._negociations.toArray().length = 0;
            this._negociations.add(negociation);
            this._negociationsView.update(this._negociations);
            this._messageView.update('Negociation added with success');
        });
    }
}
