export default class CartItem {
    id: number
    quantidade: number

    constructor(id: number, quantidade: number) { }
    
    incrementar() {
        this.quantidade++
    }

    decrementar() {
        if (this.quantidade > 1) {
            this.quantidade--
        }
        this.quantidade = 1
    }
}
