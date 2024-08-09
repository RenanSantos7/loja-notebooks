export type Categoria = 'celular'  | 'smartwatch' | 'fone' | 'som' | 'acessorio' | 'outros'

class Produto {
	private static nextId = 0

	id: number
	img: string
	titulo: string
	preco: number
	marca: string
	descricao: string
	categoria: Categoria
	recomendado: boolean
	dataAdd?: Date
	rating?: number = 0
	numRating?: number = 0
	publicID?: string

	constructor(
		titulo: string,
		img: string,
		preco: number,
		marca: string,
		descricao: string,
		categoria: Categoria,
		recomendado: boolean = false,
		dataAdd: string = '2024-04-02T11:00:00.000Z'
	) {
		this.id = Produto.nextId
		Produto.nextId++
		this.titulo = titulo
		this.img = img
		this.preco = preco
		this.marca = marca
		this.descricao = descricao
		this.categoria = categoria
		this.recomendado = recomendado
		this.dataAdd = new Date(dataAdd)
		this.rating = 0
		this.numRating = 0
	}
}
export default Produto
