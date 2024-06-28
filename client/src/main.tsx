import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
import "./Utils/Pomodoro/pomodoro.scss";
import "./Utils/To-do/To-do.scss";
import "./Utils/Expense-Tracker/expenseTracker.scss";
import "./Utils/Weather/weather.scss";
// import SignUp from "./signUp";
import App from "./Homepage";
import Focus from "./focusTab";
import Todo from "./to-do.tsx";
import ExpenseTracker from "./expenseTracker";
import Weather from "./weather.tsx";
import Contact from "./contact";
import NotFound from "./Utils/404.tsx";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Ui from "./UI.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <header>
          <Ui />
        </header>
        <main>
          <App />
        </main>
        <Contact />
      </>
    ),
  },
  {
    path: "/focus",
    element: (
      <>
        <header>
          <Ui />
        </header>
        <main>
          <Focus />
        </main>
        <Contact />
      </>
    ),
  },
  {
    path: "/todo",
    element: (
      <>
        <header>
          <Ui />
        </header>
        <main>
          <Todo />
        </main>
        <Contact />
      </>
    ),
  },
  {
    path: "/expense-tracker",
    element: (
      <>
        <header>
          <Ui />
        </header>
        <main>
          <ExpenseTracker />
        </main>
        <Contact />
      </>
    ),
  },
  {
    path: "/weather",
    element: (
      <>
        <header>
          <Ui />
        </header>
        <main>
          <Weather />
        </main>
        <Contact />
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <header>
          <Ui />
        </header>
        <main>
          <NotFound />
        </main>
        <Contact />
      </>
    ),
  },
]);
function detectColorScheme() {
  let theme = "dark";
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "light") {
      theme = "light";
    }
  } else if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "light";
    }
  }
  document.documentElement.setAttribute("data-theme", theme);
}//gets the theme and writes it to the document
detectColorScheme();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
