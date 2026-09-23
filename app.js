// 定義本地儲存的 key，讓資料能在重新整理後保留
const STORAGE_KEY = 'todo-list-items-v1';

// 取得 DOM 元素
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');

// 從 localStorage 讀取待辦資料，若不存在則使用空陣列
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

// 將待辦資料保存回 localStorage
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 計算未完成項目數量，並更新底部的文字
function updateCount() {
  const remainingCount = todos.filter((todo) => !todo.completed).length;
  todoCount.textContent = `未完成: ${remainingCount} 項`;
}

// 產生空白提示內容，當清單為空時顯示
function renderEmptyState() {
  const emptyItem = document.createElement('li');
  emptyItem.className = 'empty-state';
  emptyItem.textContent = '還沒有任何待辦事項,新增一個吧!';
  todoList.appendChild(emptyItem);
}

// 根據 todos 陣列重新繪製清單
function renderTodos() {
  todoList.innerHTML = '';

  if (todos.length === 0) {
    renderEmptyState();
    updateCount();
    return;
  }

  todos.forEach((todo) => {
    const item = document.createElement('li');
    item.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    const content = document.createElement('label');
    content.className = 'todo-content';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.setAttribute('aria-label', `標記 ${todo.text} 為完成`);

    // 勾選時更新狀態並重新渲染
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    const text = document.createElement('span');
    text.className = 'todo-text';
    text.textContent = todo.text;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = '刪除';
    deleteButton.setAttribute('aria-label', `刪除 ${todo.text}`);

    // 點擊刪除按鈕時，移除該筆待辦
    deleteButton.addEventListener('click', () => {
      todos = todos.filter((currentTodo) => currentTodo.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    content.appendChild(checkbox);
    content.appendChild(text);
    item.appendChild(content);
    item.appendChild(deleteButton);
    todoList.appendChild(item);
  });

  updateCount();
}

// 新增待辦事件：輸入空白值時忽略，避免新增空項目
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (!text) {
    todoInput.focus();
    return;
  }

  const newTodo = {
    id: Date.now() + Math.random(),
    text,
    completed: false,
  };

  todos.push(newTodo);
  saveTodos();
  todoInput.value = '';
  renderTodos();
  todoInput.focus();
});

// 初始化：頁面載入時直接渲染現有資料
renderTodos();
