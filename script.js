// DOM Elements
const textarea = document.getElementById('textarea')
const range = document.getElementById('range')
const count = document.getElementById('count')
const remaining = document.getElementById('remaining')

// Event Listeners
textarea.addEventListener('input', () => updateCounts())

// Functions
const updateCounts = () => {
	setCount()
	setRemaining()
	setRange()
}

const setCount = () => {
	count.innerText = textarea.value.length
}

const setRemaining = () => {
	const length = textarea.value.length
	const maxLength = textarea.getAttribute('maxlength')

	remaining.innerText = maxLength - length
}

const setRange = () => {
	range.value = textarea.value.length
}
