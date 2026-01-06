# Todo App

## Project Title
**Todo App** – A simple, client‑side task manager built with vanilla JavaScript, HTML, and CSS.

## Brief Description
This project implements a lightweight Todo application that runs entirely in the browser. Users can add, complete, delete, and filter tasks. All data is persisted locally using the browser’s `localStorage`, so tasks remain after a page refresh.

---

## Tech Stack
- **HTML5** – Markup and structure.
- **CSS3** – Styling (see `styles.css`).
- **JavaScript (ES6)** – Core logic, split into three modules (`Todo`, `Storage`, `UI`).
- **localStorage** – Client‑side persistence; no backend or build tools required.

---

## Feature List
- Add new tasks.
- Mark tasks as completed/uncompleted.
- Delete individual tasks.
- Filter tasks: *All*, *Active*, *Completed*.
- Persist tasks across sessions using `localStorage`.
- Responsive UI that works on desktop and mobile browsers.

---

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/your‑username/todo-app.git
   cd todo-app
   ```
2. **Open the app**
   - No build step or dependencies are required.
   - Simply open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
   ```bash
   # On macOS/Linux you can use:
   open index.html
   # On Windows:
   start index.html
   ```
3. The application will load and you can start managing tasks immediately.

---

## Usage Guide
### Adding a Task
1. Type the task description into the input field at the top.
2. Press **Enter** or click the **Add** button.
3. The new task appears in the list.

### Completing a Task
- Click the checkbox next to a task to toggle its completed state.
- Completed tasks are styled with a strikethrough.

### Deleting a Task
- Click the trash‑can icon (or the delete button) on the right side of a task.

### Filtering Tasks
- Use the filter buttons at the bottom: **All**, **Active**, **Completed**.
- The list updates instantly to show only the selected category.

---

## Architecture Overview
The codebase is intentionally minimal and divided into three core modules, each defined in `script.js`:

### 1. `Todo` Class
- Represents a single todo item.
- Properties: `id`, `title`, `completed`.
- Methods for toggling completion and serialising to JSON.

### 2. `Storage`
- Handles all interactions with `localStorage`.
- Provides methods:
  - `getTodos()` – Retrieve the array of stored todos.
  - `saveTodos(todos)` – Persist the current todo array.
  - `clear()` – (optional) clear all stored data.
- Abstracts persistence so the UI and business logic stay decoupled from the storage mechanism.

### 3. `UI`
- Manages DOM manipulation and event handling.
- Responsibilities:
  - Render the todo list based on the current data set.
  - Bind UI events (add, toggle, delete, filter) to the appropriate `Todo` and `Storage` actions.
  - Keep the UI in sync with the underlying data model.

**Interaction Flow**
1. User interacts with the UI (e.g., adds a task).
2. `UI` creates a new `Todo` instance and asks `Storage` to save the updated list.
3. `UI` re‑renders the list, pulling the latest data from `Storage`.
4. Any change (completion toggle, deletion, filter) follows the same pattern, ensuring a single source of truth.

---

## Screenshots
*(Replace the placeholders with actual screenshots of the app)*

![App Overview](./screenshots/overview.png)

![Adding a Task](./screenshots/add-task.png)

![Filtering Tasks](./screenshots/filter.png)

---

## Contribution Guidelines (optional)
1. Fork the repository.
2. Create a new branch for your feature or bug‑fix.
3. Ensure your changes follow the existing code style (ES6, semicolons, 2‑space indentation).
4. Test your changes by opening `index.html` in a browser.
5. Submit a pull request with a clear description of what you changed.

---

## License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.
