// DOM Elements
const textarea = document.getElementById('textarea')
const range = document.getElementById('range')
const count = document.getElementById('count')
const remaining = document.getElementById('remaining')

// Event Listeners
textarea.addEventListener('input', changeCount())
