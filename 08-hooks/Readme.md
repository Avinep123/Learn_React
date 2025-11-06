Perfect 🙌 — here’s a **nicely formatted and future-friendly Markdown version** for your `README.md`.
It’s clean, visual, and easy to scan when you revisit it later 👇

---

# ⚛️ React Hooks — Simple Guide

A quick and easy explanation of the most common React Hooks.
Use this as a reminder when building or reviewing React projects.

---

## 🔹 `useState`

💡 **Purpose:** Manage local component data.
🧠 Keeps values that change over time (like counters, inputs, toggles).

```jsx
const [count, setCount] = useState(0);
```

Each time you call `setCount`, React re-renders the component with the new value.

---

## 🔹 `useEffect`

💡 **Purpose:** Handle side effects (things outside the UI).
🧩 Examples: API calls, event listeners, or updating the DOM manually.

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

Runs after render — and re-runs when dependencies change.

---

## 🔹 `useContext`

💡 **Purpose:** Share data between components **without passing props**.
🌍 Good for themes, authentication, or global app data.

```jsx
const theme = useContext(ThemeContext);
```

---

## 🔹 `useReducer`

💡 **Purpose:** Handle **complex state updates** in a clean way.
⚙️ Works like a small version of Redux.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Useful when you have multiple state transitions or actions.

---

## 🔹 `useRef`

💡 **Purpose:** Store a value that **doesn’t cause re-renders** when updated.
🔍 Also used to **directly access DOM elements**.

```jsx
const inputRef = useRef();
```

Changing `inputRef.current` won’t trigger a re-render.

---

## 🔹 `useMemo`

💡 **Purpose:** Optimize performance by **caching calculated values**.
⚡ Prevents re-computing expensive functions every render.

```jsx
const result = useMemo(() => heavyCalculation(a, b), [a, b]);
```

---

## 🔹 `useCallback`

💡 **Purpose:** Cache functions so they **aren’t recreated every render**.
📦 Helps prevent unnecessary re-renders in child components.

```jsx
const handleClick = useCallback(() => setCount(count + 1), [count]);
```

---

### 🧩 Tip:

Use these hooks to make your React apps **cleaner, faster, and easier to manage**.
They replace most old class-based patterns and give you more control over your component’s logic.

---

