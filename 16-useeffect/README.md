# `useEffect`

💡 **Purpose:** Handle side effects (things outside the UI).
🧩 Examples: API calls, event listeners, or updating the DOM manually.

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

Runs after render — and re-runs when dependencies change.

---
