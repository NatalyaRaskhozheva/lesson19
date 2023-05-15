class Byraktar {
	constructor() {

	}
	getRandomTop() {
		const minTop = 1
		const maxTop = window.innerHeight
		const randomTop = Math.floor(Math.random() * (maxTop - minTop) + minTop)
		return randomTop
	}
	getRandomRight() {
		const minRight = 10
		const maxRight = window.innerWidth
		const randomRight = Math.floor(Math.random() * (maxRight - minRight) + minRight)
		return randomRight
	}
	optionClick() {
		this.img.src = '../img/png-transparent-explosion-graphics-art-flame-explosion-explosion-effect-orange-computer-wallpaper.png'
		this.img.style.width = '100px'
		this.img = () => clearInterval(intervalId)
		setTimeout(() => {
			this.imgContainer.innerHTML = ''
		}, 400)

	}
	create(containerId) {
		const targetContainer = document.getElementById(containerId)
		this.imgContainer = document.createElement('div')
		this.img = document.createElement('img')
		this.img.src = '../img/11-114335_see-clipart-tank-top-tank-top-view-png.png'
		this.img.style.cssText = `position: absolute; top: ${this.getRandomTop()}px; right: ${this.getRandomRight()}px; width: 50px`
		this.imgContainer.append(this.img)
		targetContainer.append(this.imgContainer)
		this.down()


	}
	down() {
		let y = parseInt(this.img.style.top)
		let intervalId = setInterval(() => {
			y += 1
			if (y < window.innerHeight) {
				this.img.style.top = `${y}px`
			} else {
				clearInterval(intervalId)
				this.img.style.top = `${this.getRandomTop()}px`
				this.down()
			}
			this.img.onclick = this.optionClick.bind(this)


		}, 50);
	}

}
for (let i = 0; i < 5; i++) {
	let a = new Byraktar
	a.create('container')
}
