export class ActivityController {

    constructor(ngCart) {
        'ngInject';

        this.ngCart = ngCart;
        this.ngCart.setTaxRate(7.5);
        this.ngCart.setShipping(2.99);
    }
}
