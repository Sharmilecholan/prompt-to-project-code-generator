'use strict';

/*
 * Calculator core logic and UI handling
 * Implements evaluation, UI state, button and keyboard interaction.
 */

/**
 * Helper to determine if a character is an arithmetic operator.
 * @param {string} char
 * @returns {boolean}
 */
function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

/**
 * Evaluates a simple arithmetic expression containing numbers and + - * / operators.
 * Returns the result as a string. Handles division by zero.
 * @param {string} expr
 * @returns {string}
 */
function evaluateExpression(expr) {
  // Trim whitespace
  const sanitized = expr.replace(/\s+/g, '');
  if (sanitized === '') return '';
  try {
    // Use Function constructor for quick evaluation.
    // This is acceptable for controlled input (only digits and operators).
    const fn = new Function('return ' + sanitized);
    const result = fn();
    // Detect division by zero (Infinity results) or NaN.
    if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
      return 'Error: Division by zero';
    }
    // Limit decimal places to avoid floating point noise.
    return Number.isFinite(result) ? result.toString() : 'Error';
  } catch (e) {
    // Any parsing/evaluation error results in a generic error message.
    return 'Error';
  }
}

// Export for potential external testing (attached to window)
window.isOperator = isOperator;
window.evaluateExpression = evaluateExpression;

/*** UI State Management ***/
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-btn');
let currentInput = '';

function updateDisplay() {
  if (display) {
    display.value = currentInput || '0';
  }
}

function resetCalculator() {
  currentInput = '';
  updateDisplay();
}

window.resetCalculator = resetCalculator;

/*** Button Click Handling ***/
function handleInput(value) {
  if (!value) return;

  if (value === 'C') {
    resetCalculator();
    return;
  }

  if (value === '=') {
    const evalResult = evaluateExpression(currentInput);
    if (evalResult.startsWith('Error')) {
      currentInput = evalResult;
    } else {
      currentInput = evalResult;
    }
    updateDisplay();
    return;
  }

  // For numeric or operator input
  const lastChar = currentInput.slice(-1);

  // Prevent multiple consecutive operators (except when starting with '-' for negative numbers)
  if (isOperator(value)) {
    if (currentInput === '' && value !== '-') {
      // Do not allow starting with +, *, /
      return;
    }
    if (isOperator(lastChar)) {
      // Replace the previous operator with the new one
      currentInput = currentInput.slice(0, -1) + value;
    } else {
      currentInput += value;
    }
  } else {
    // Append numbers or decimal point
    if (value === '.' && lastChar === '.') {
      // Prevent multiple decimal points in a row
      return;
    }
    currentInput += value;
  }

  // Optional length limit to keep UI tidy
  const MAX_LENGTH = 30;
  if (currentInput.length > MAX_LENGTH) {
    currentInput = currentInput.slice(0, MAX_LENGTH);
  }

  updateDisplay();
}

window.handleInput = handleInput;

// Attach click listeners to calculator buttons
if (buttons && buttons.length) {
  buttons.forEach((btn) => {
    const val = btn.dataset.value;
    if (val !== undefined) {
      btn.addEventListener('click', () => handleInput(val));
    }
  });
}

/*** Keyboard Support ***/
document.addEventListener('keydown', (e) => {
  const key = e.key;
  // Map keys to calculator values
  const keyMap = {
    'Enter': '=',
    '=': '=',
    'Escape': 'C',
    'c': 'C',
    'C': 'C',
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    '.': '.',
  };

  if (keyMap[key] !== undefined) {
    e.preventDefault();
    handleInput(keyMap[key]);
    return;
  }

  // Numeric keys (both top row and Numpad)
  if (/^[0-9]$/.test(key)) {
    e.preventDefault();
    handleInput(key);
    return;
  }
  // Numpad digits
  if (/^Numpad[0-9]$/.test(e.code)) {
    e.preventDefault();
    handleInput(e.code.replace('Numpad', ''));
    return;
  }
});
