import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CreateBlog from "./component/CreateBlog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import PostDisplay from "./component/PostDisplay";
import { store, persistor } from "./component/redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "createblog",
        element: <CreateBlog />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "postdisplay",
        element: <PostDisplay />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
