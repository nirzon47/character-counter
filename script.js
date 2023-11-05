// DOM Elements
const textarea = document.getElementById('textarea')
const range = document.getElementById('range')
const count = document.getElementById('count')
const remaining = document.getElementById('remaining')

// Event Listener for text area when there is an input on it
textarea.addEventListener('input', () => updateCounts())

// Functions

/**
 * Updates the counts, remaining, range, and checks for theme.
 */
const updateCounts = () => {
	setCount()
	setRemaining()
	setRange()
	checkForTheme()
}

/**
 * Updates the count value displayed on the page based on the length of the text entered in the textarea.
 *
 * @param {string} textarea - The textarea element that contains the text.
 * @param {HTMLSpanElement} count - The span element that displays the count value.
 * @return {void} This function does not return anything.
 */
const setCount = () => {
	count.innerText = textarea.value.length
}

/**
 * Sets the remaining character count in the UI based on the length of the textarea value.
 *
 * @param {number} length - The current length of the textarea value.
 * @param {number} maxLength - The maximum allowed length for the textarea value.
 * @param {HTMLElement} remaining - The HTML element where the remaining character count will be displayed.
 * @return {undefined} This function does not return any value.
 */
const setRemaining = () => {
	const length = textarea.value.length
	const maxLength = textarea.getAttribute('maxlength')

	remaining.innerText = maxLength - length
}

/**
 * Sets the value of the range input element to the length of the text in the textarea element.
 *
 * @param {None} None
 * @return {None} None
 */
const setRange = () => {
	range.value = textarea.value.length
}

/**
 * Checks the theme value from the textarea and updates the HTML theme accordingly.
 *
 * @return {void} This function does not return anything.
 */
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
