class Show {
	constructor() {

	}
	create(containerId) {
		this.span = document.createElement('span')
		this.span.style.cssText = `width: 13px; height: 13px; background: blue; TOP: 100px; left: 100px;`
		const targetContainer = document.getElementById(containerId)
		targetContainer.append(this.span)
	}
	down() {
		let y = parseInt(this.span.style.top)
		let intervalId = setInterval(() => {
			y += 1
			if (y < window.innerHeight) {
				this.span.style.top = `${y}px`
			} else {
				clearInterval(intervalId)
				this.span.style.top = '100px'
				this.down()
			}
		}, 10);
		
	}

}
let a = new Show
a.create('container')
a.down()