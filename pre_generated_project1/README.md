# SimpleCalculator

A lightweight, web‑based calculator built with **HTML**, **CSS**, and **JavaScript**. It provides a clean UI for performing basic arithmetic operations, supports keyboard shortcuts, and includes basic error handling (e.g., division by zero).

---

## Tech Stack
- **HTML5** – Structure of the calculator UI.
- **CSS3** – Styling and responsive layout.
- **JavaScript (ES6)** – Core calculation logic, UI state management, button & keyboard interaction.

---

## Features
- **Basic arithmetic** – addition, subtraction, multiplication, division.
- **Decimal support** – enter and compute floating‑point numbers.
- **Clear (C) button** – reset the current expression.
- **Equals (=) button** – evaluate the expression and display the result.
- **Keyboard shortcuts**
  - Digits `0‑9` and `.` for number entry.
  - `+`, `-`, `*`, `/` for operators.
  - `Enter` or `=` to evaluate.
  - `Esc` or `C` to clear.
- **Error handling**
  - Displays `Error: Division by zero` when attempting to divide by zero.
  - Generic `Error` for malformed expressions.
- **Input sanitisation** – prevents multiple consecutive operators and duplicate decimal points.
- **Input length limit** – caps the expression to 30 characters to keep the display tidy.
- **Responsive UI** – works on desktop browsers without any build steps.

---

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/your‑username/simple‑calculator.git
   cd simple‑calculator
   ```
2. **Open the application**
   - Simply open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari, etc.).
   - No additional dependencies, build tools, or server are required.

---

## Usage Guide
### Button Interaction
- Click any numeric button (`0‑9`) to add that digit to the expression.
- Click an operator button (`+`, `−`, `×`, `÷`) to append the corresponding operator.
- Use the `.` button for decimal points.
- Press **C** to clear the current input.
- Press **=** to evaluate the expression. The result replaces the current input.

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0‑9` | Add digit |
| `.` | Decimal point |
| `+`, `-`, `*`, `/` | Operator |
| `Enter` or `=` | Evaluate (`=`) |
| `Esc` or `C` | Clear (`C`) |

### Error Messages
- **`Error: Division by zero`** – shown when the expression attempts to divide by zero.
- **`Error`** – shown for any other malformed expression (e.g., incomplete operator sequence).

---

## Contributing
Contributions are welcome! If you would like to improve the calculator or add new features:
1. Fork the repository.
2. Create a new branch for your feature or bug‑fix.
3. Ensure the existing functionality remains intact (manual testing is sufficient for this small project).
4. Submit a pull request with a clear description of your changes.

---

## License
[Insert license information here – e.g., MIT License]

---

## Screenshot
![Calculator Screenshot](screenshot.png)
