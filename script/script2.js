class sportsmanList {
	constructor(dataList) {
		this.dataList = dataList
		this.emptyList = []
	}
	optionClickFirst(element) {
		this.emptyList.push(element)
		this.emptyTable.append(this.renderEmptyTable())
		const deleteElemIndex = this.dataList.findIndex((elem) => elem == element)
		this.dataList.splice(deleteElemIndex, 1)

		this.sportsmanTable.innerHTML = ''
		this.sportsmanTable.append(this.renderTableSportsman())

		this.emptyTable.innerHTML = ''
		this.emptyTable.append(this.renderEmptyTable())
	}
	optionClickSecond(element){
		this.dataList.push(element)
		this.sportsmanTable.append(this.renderTableSportsman())
		const deleteElemIndex = this.emptyList.findIndex((elem) => elem == element)
		this.emptyList.splice(deleteElemIndex, 1)

		this.sportsmanTable.innerHTML = ''
		this.sportsmanTable.append(this.renderTableSportsman())

		this.emptyTable.innerHTML = ''
		this.emptyTable.append(this.renderEmptyTable())     
	}
	renderTableSportsman() {
		const table = document.createElement('table')
		const th = document.createElement('th')
		th.innerText = 'Загальний список'
		table.append(th)
		for (const element of this.dataList) {
			const tr = document.createElement('tr')
			table.append(tr)
			const td = document.createElement('td')
			td.innerText = element
			tr.append(td)
			td.onclick = this.optionClickFirst.bind(this, element)
		}
		return table
	}
	renderEmptyTable() {
		const table = document.createElement('table')
		const th = document.createElement('th')
		th.innerText = 'Обрані для змагання'
		table.append(th)
		for (const element of this.emptyList) {
			const tr = document.createElement('tr')
			table.append(tr)
			const td = document.createElement('td')
			td.innerText = element
			tr.append(td)
			td.onclick = this.optionClickSecond.bind(this, element)
		}
		return table
	}
	render(containerId) {
		const tableContainer = document.createElement('div')
		tableContainer.className = 'table-container'

		this.sportsmanTable = document.createElement('div')
		this.emptyTable = document.createElement('div')
		tableContainer.append(this.sportsmanTable)
		tableContainer.append(this.emptyTable)

		this.sportsmanTable.append(this.renderTableSportsman())
		this.emptyTable.append(this.renderEmptyTable())

		const targetContainer = document.getElementById(containerId)
		targetContainer.append(tableContainer)
	}
}

const userList = ['John Depp', 'Sara Wik', 'Den Miro', 'Alan Woo', 'Olga Sich', 'Ivan Hal']
let a = new sportsmanList(userList)
a.render('container')