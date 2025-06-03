const blogData = [
    {
        id: "1",
        title: "Getting Started with React and Tailwind CSS",
        slug: "getting-started-with-react-and-tailwind",
        excerpt: "Learn how to set up a new project with React and Tailwind CSS for rapid UI development.",
        content: `
        ## Introduction

React is one of the most popular JavaScript libraries for building user interfaces, while Tailwind CSS is a utility-first CSS framework that makes styling fast and responsive. Together, they create a powerful combination for modern web development — allowing you to build sleek, responsive interfaces quickly and efficiently.

In this guide, you'll learn how to set up a new React project with Tailwind CSS from scratch and start building your UI with ease.

---

## Why Use React and Tailwind CSS Together?

- **React**: Helps you build dynamic, component-based UIs with reusable code.
- **Tailwind CSS**: Offers low-level utility classes to rapidly style elements without writing custom CSS.

Combining the two means you can build fast, responsive UIs with minimal context-switching between your JavaScript and CSS files.

---

## Step 1: Set Up a New React Project

The easiest way to start is by using [Vite](https://vitejs.dev/), a fast build tool for modern web projects.

\`\`\`bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
\`\`\`

> If you prefer using Create React App:
> \`\`\`bash
> npx create-react-app my-react-app
> cd my-react-app
> \`\`\`

---

## Step 2: Install Tailwind CSS

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

---

## Step 3: Configure Tailwind

Edit \`tailwind.config.js\`:

\`\`\`js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

Update \`src/index.css\`:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;
\`\`\`

Import in \`main.jsx\`:

\`\`\`js
import './index.css';
\`\`\`

---

## Step 4: Build Your UI

\`\`\`jsx
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
        Click Me
      </button>
    </div>
  );
}
export default App;
\`\`\`

---

## Conclusion

Setting up React with Tailwind CSS is a great way to streamline your front-end development workflow. Now you’re ready to build beautiful, responsive UIs with ease.
        `,
        author: "Alex Johnson",
        date: "April 15, 2025",
        readTime: "5 min read",
        image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React", "Tailwind CSS", "Web Development"]
      },
      {
        id: "2",
        title: "Managing State with Redux Toolkit",
        slug: "managing-state-with-redux-toolkit",
        excerpt: "Explore how Redux Toolkit simplifies state management in React applications.",
        content: `
          
        ## Introduction

Managing state in a React application can quickly become complex as your app grows. That’s where **Redux Toolkit** comes in — a modern, official, and recommended way to write Redux logic. It abstracts much of the boilerplate, making state management easier, cleaner, and more maintainable.

In this guide, we'll explore how Redux Toolkit works and how you can integrate it into your React projects with minimal setup.

---

## What is Redux Toolkit?

Redux Toolkit (RTK) is the official, opinionated, batteries-included toolset for efficient Redux development. It includes utilities that help simplify:

- Store setup
- Reducer logic
- State slices
- Middleware configuration

With RTK, you can write less code and avoid common pitfalls that developers face when using vanilla Redux.

---

## Step 1: Install Redux Toolkit

Start by creating a new React app (or use an existing one), then install the required packages:

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

---

## Step 2: Create a Slice

Redux Toolkit uses the concept of "slices" to group state and reducer logic together.

\`\`\`js
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\`

---

## Step 3: Set Up the Store

Next, configure the store and provide it to your React app:

\`\`\`js
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
\`\`\`

Wrap your root component with \`<Provider>\`:

\`\`\`js
// src/main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
\`\`\`

---

## Step 4: Use Redux State in Components

Access and update Redux state using hooks:

\`\`\`jsx
// src/App.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center">
      <h1 className="text-3xl font-bold">Redux Toolkit Counter</h1>
      <p className="text-xl">Count: {count}</p>
      <div className="flex gap-4">
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
        <button onClick={() => dispatch(incrementByAmount(5))} className="px-4 py-2 bg-blue-500 text-white rounded">+5</button>
      </div>
    </div>
  );
};

export default App;
\`\`\`

---

## Conclusion

Redux Toolkit drastically simplifies Redux by reducing boilerplate and enforcing best practices. Whether you're building a small app or a large-scale application, RTK helps keep your state logic consistent and easy to maintain.

By following this guide, you've now seen how to set up a store, create slices, and use Redux state inside React components — all with minimal effort.

Happy coding!`,
        author: "Sam Rivera",
        date: "April 20, 2025",
        readTime: "8 min read",
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["Redux", "React", "State Management"]
      },
      {
        id: "3",
        title: "Creating Smooth Animations with Framer Motion",
        slug: "creating-smooth-animations-with-framer-motion",
        excerpt: "Learn how to implement beautiful animations in React using Framer Motion.",
        content: `
          ## Introduction

Framer Motion is a powerful and intuitive animation library for React that makes it easy to create fluid and engaging user experiences. Whether you want simple fade-ins or complex gesture-driven animations, Framer Motion gives you the tools to do it with clean and declarative code.

In this guide, you'll learn how to get started with Framer Motion and build smooth animations that elevate your React components.

---

## Why Use Framer Motion?

- **Simple Syntax**: Animate using props like \`initial\`, \`animate\`, and \`exit\`.
- **Declarative API**: No need to manually control animation timelines.
- **Performance**: Built on top of the \`motion\` engine, it's fast and efficient.
- **Built-in Gestures**: Supports drag, tap, hover, and more out of the box.

---

## Step 1: Install Framer Motion

You can install Framer Motion using npm or yarn:

\`\`\`bash
npm install framer-motion
# or
yarn add framer-motion
\`\`\`

---

## Step 2: Basic Fade-In Animation

Let’s animate a simple box that fades in when the component loads:

\`\`\`jsx
import { motion } from "framer-motion";

function FadeInBox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-40 h-40 bg-blue-500 rounded-md"
    >
      {/* Content */}
    </motion.div>
  );
}

export default FadeInBox;
\`\`\`

Here:
- \`initial\`: Defines the starting animation state.
- \`animate\`: Defines the end animation state.
- \`transition\`: Sets timing and easing.

---

## Step 3: Animate on Hover

Add interactivity using hover animations:

\`\`\`jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-2 bg-green-600 text-white rounded-lg"
>
  Hover Me
</motion.button>
\`\`\`

Framer Motion handles the animation state changes seamlessly and smoothly.

---

## Step 4: Page Transitions with AnimatePresence

Use \`AnimatePresence\` to animate components entering and exiting the DOM:

\`\`\`jsx
import { AnimatePresence, motion } from "framer-motion";

function ToggleBox({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="w-40 h-40 bg-purple-500 rounded-md"
        />
      )}
    </AnimatePresence>
  );
}
\`\`\`

This is perfect for modal dialogs, sliders, and dynamic UIs.

---

## Conclusion

Framer Motion makes it incredibly easy to add life to your React components. From subtle transitions to complex gesture-based interactions, it’s a must-have tool for any modern frontend developer.

Explore the [official docs](https://www.framer.com/motion/) for more powerful features like layout animations, shared layout transitions, and drag controls — and start making your interfaces feel alive.

Happy animating!`,
        author: "Taylor Kim",
        date: "April 25, 2025",
        readTime: "6 min read",
        image: "https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["Animation", "React", "Framer Motion"]
      },
      {
        id: "4",
        title: "Mastering CSS Grid Layout",
        slug: "mastering-css-grid-layout",
        excerpt: "Discover how to create complex layouts easily with CSS Grid.",
        content: `
          ## Introduction

CSS Grid is a powerful layout system available in CSS. It allows developers to create complex and responsive web layouts with ease — something that used to be difficult using only floats or even Flexbox.

In this guide, we’ll explore the fundamentals of CSS Grid and how you can use it to master layout design for modern websites.

---

## Why Use CSS Grid?

CSS Grid gives you two-dimensional control (rows and columns), making it ideal for layout-heavy designs like:

- Web dashboards
- Photo galleries
- Blog layouts
- Landing pages

It offers better readability and cleaner code when compared to traditional methods.

---

## Basic Terminology

Before jumping in, let's look at a few key terms:

- **Grid Container**: The element on which \`display: grid\` is applied.
- **Grid Items**: Direct children of the grid container.
- **Tracks**: Rows and columns.
- **Gaps**: Space between tracks.
- **Lines**: Dividers between grid cells.

---

## Step 1: Define a Grid Container

Start with a container element:

\`\`\`html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
\`\`\`

Add this to your CSS:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.item {
  background-color: #4f46e5;
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
}
\`\`\`

This will create a 3-column layout with evenly spaced items.

---

## Step 2: Grid Rows and Responsive Layouts

You can define both columns and rows:

\`\`\`css
grid-template-rows: 200px 100px;
\`\`\`

Make it responsive with media queries:

\`\`\`css
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
\`\`\`

This switches to a single-column layout on small screens.

---

## Step 3: Spanning Items Across Rows and Columns

Use \`grid-column\` and \`grid-row\` to make items span multiple tracks:

\`\`\`css
.item:first-child {
  grid-column: span 2;
}
\`\`\`

This tells the first item to take up two columns.

---

## Step 4: Named Areas (Advanced Feature)

You can even use named areas for easier layout management:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
\`\`\`

---

## Conclusion

CSS Grid is a game-changer for layout design. It provides the structure and flexibility needed to create responsive and complex designs with less code. Once you master its syntax and capabilities, building page layouts becomes not only easier but also more fun and scalable.

Start small, play around with layouts, and you’ll be a Grid master in no time!
        `,
        author: "Jamie Chen",
        date: "May 2, 2025",
        readTime: "7 min read",
        image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["CSS", "Web Design", "Layout"]
      },
      {
        id: "5",
        title: "Optimizing React Performance",
        slug: "optimizing-react-performance",
        excerpt: "Learn effective techniques to improve the performance of your React applications.",
        content: `
          ## Introduction

React is designed to deliver fast, dynamic user interfaces. However, as your application grows in size and complexity, performance bottlenecks can appear. Fortunately, React provides a range of tools and best practices to keep your app running smoothly.

In this post, we’ll explore proven strategies to optimize the performance of React applications and avoid common pitfalls.

---

## 1. Use React.memo for Functional Components

\`React.memo\` is a higher-order component that prevents unnecessary re-renders by memoizing the result. It's especially helpful for components that receive the same props often.

\`\`\`jsx
const MyComponent = React.memo(function MyComponent({ title }) {
  return <h1>{title}</h1>;
});
\`\`\`

---

## 2. Use useCallback and useMemo Hooks

- \`useCallback\` helps memoize functions to avoid recreation on every render.
- \`useMemo\` helps memoize values that are expensive to compute.

\`\`\`jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
\`\`\`

---

## 3. Avoid Anonymous Functions in JSX

Creating new functions inside JSX can cause unnecessary re-renders in child components.

**❌ Avoid:**
\`\`\`jsx
<Component onClick={() => handleClick()} />
\`\`\`

**✅ Prefer:**
\`\`\`jsx
const onClickHandler = () => handleClick();
<Component onClick={onClickHandler} />
\`\`\`

---

## 4. Lazy Load Components

For large apps, load components only when needed using \`React.lazy\` and \`Suspense\`.

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

---

## 5. Code Splitting with Dynamic Imports

You can split your code into smaller chunks to load parts only when they’re needed.

Use [Vite](https://vitejs.dev/) or Webpack's dynamic \`import()\` to achieve code splitting:

\`\`\`js
const Page = React.lazy(() => import("./Page"));
\`\`\`

---

## 6. Optimize Lists with Keys and Windowing

Use unique and stable keys when rendering lists to help React identify which items have changed.

Also, for long lists, use **windowing libraries** like [react-window](https://github.com/bvaughn/react-window) or [react-virtualized](https://github.com/bvaughn/react-virtualized) to render only visible items.

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

<List height={300} itemCount={1000} itemSize={35} width={300}>
  {({ index, style }) => <div style={style}>Item {index}</div>}
</List>
\`\`\`

---

## 7. Avoid Unnecessary State Updates

Minimize state and only keep what's necessary in React state. Avoid deeply nested objects or frequent updates.

Use state co-location: keep state close to where it's used.

---

## 8. Use Profiler for Performance Analysis

React's built-in [Profiler](https://reactjs.org/docs/profiler.html) (available in React DevTools) helps measure rendering performance:

\`\`\`jsx
<Profiler id="MyComponent" onRender={callback}>
  <MyComponent />
</Profiler>
\`\`\`

---

## Conclusion

Performance tuning in React doesn’t require drastic changes. With simple tweaks like memoization, lazy loading, and avoiding unnecessary renders, your app can run significantly faster.

Regularly profile and analyze your components, and you’ll maintain a performant React codebase that scales efficiently as your project grows.

`,
        author: "Ryan Thompson",
        date: "May 10, 2025",
        readTime: "10 min read",
        image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tags: ["React", "Performance", "Optimization"]
      }
]

export default blogData;