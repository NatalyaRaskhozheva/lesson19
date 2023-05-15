class Star {
	constructor(maxSize = 10) {
		this.maxSize = maxSize
		this.containerId = 'container'
	}
	getcreateElement() {
		this.targetContainer = document.getElementById(this.containerId)
		for (let i = 0; i < 200; i++) {
			this.span = document.createElement('span')

			this.span.style.cssText = `width: 3px; height: 3px; top:${this.getRandomTop()}px; left: ${this.getRandomLeft()}px`
			this.targetContainer.append(this.span)
			this.size()
		}


	}
	size() {
		let x = parseInt(this.span.style.width)
		let y = parseInt(this.span.style.height)
		let intervalId = setInterval(() => {
			x += 1
			y += 1
			if (y < this.maxSize || x < this.maxSize) {
				this.span.style.width = `${x}px`
				this.span.style.height = `${y}px`
			} else {
				clearInterval(intervalId)
				this.targetContainer.innerHTML = ''
				this.getcreateElement()
			}
		}, 1000)

	}
	getRandomTop() {
		const minTop = 20
		const maxTop = window.innerHeight
		const randomTop = Math.floor(Math.random() * (maxTop - minTop) + minTop)
		return randomTop
	}
	getRandomLeft() {
		const minLeft = 20
		const maxLeft = window.innerWidth
		const randomLeft = Math.floor(Math.random() * (maxLeft - minLeft) + minLeft)
		return randomLeft

	}
}

window.onload = function () {

	let a = new Star
	a.getcreateElement()

}





