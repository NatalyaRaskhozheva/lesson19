class LinkCard {
	constructor({ imgSrc, title, price }) {
		this.imgSrc = imgSrc
		this.title = title
		this.price = price
	}
	render(containerSelector) {
		const cardContainer = document.createElement('div')
		cardContainer.className = 'card-container'

		const imgContainer = document.createElement('div')
		imgContainer.className = 'img-container'
		const img = document.createElement('img')
		img.className = 'img-item'
		img.src = this.imgSrc
		imgContainer.append(img)
		cardContainer.append(imgContainer)

		const containerTitle = document.createElement('div')
		containerTitle.className = 'title-container'
		containerTitle.innerText = this.title
		cardContainer.append(containerTitle)

		const containerPrice = document.createElement('div')
		containerPrice.className = 'price-container'
		containerPrice.innerText = this.price
		cardContainer.append(containerPrice)

		const container = document.querySelector(containerSelector)
		container.append(cardContainer)

		cardContainer.onclick = () => { cardContainer.classList = 'checked' }
	}
}

const linksSet = [
	{
		imgSrc: '../img/144249735.jpg',
		title: 'Ноутбук ASUS TUF Gaming A15 FA506ICB-',
		price: '35 999'
	},
	{
		imgSrc: '../img/280562850.jpg',
		title: 'Ноутбук ASUS TUF Gaming F15 FX506LHB-',
		price: '41 000'
	},
	{
		imgSrc: '../img/290842123.jpg',
		title: 'Ноутбук Acer Aspire 7 A715-42G-',
		price: '15 000'
	},
	{
		imgSrc: '../img/302686482.jpg',
		title: 'Ноутбук Acer Aspire 7 A715-42G-R8BL (NH.QDLEU.008',
		price: '34 000'
	}
]

window.onload = function () {
	for (const linkData of linksSet) {
		new LinkCard(linkData).render('.cards')
	}
}