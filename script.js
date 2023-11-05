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
	checkForTheme()
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

const checkForTheme = () => {
	htmlTheme = document.documentElement

	switch (textarea.value) {
		case 'dark':
			htmlTheme.setAttribute('data-theme', 'dark')
			break
		case 'halloween':
			htmlTheme.setAttribute('data-theme', 'halloween')
			break
		case 'cupcake':
			htmlTheme.setAttribute('data-theme', 'cupcake')
			break
		case 'dracula':
			htmlTheme.setAttribute('data-theme', 'dracula')
			break
		case 'emerald':
			htmlTheme.setAttribute('data-theme', 'emerald')
			break
		default:
			htmlTheme.setAttribute('data-theme', 'valentine')
	}
}
