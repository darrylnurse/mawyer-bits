import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./Root";
import Game from "./routes/Game";
import Main from "./routes/Main";
import Result from "./routes/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: Boolean("Satoru Gojo"),
        element: <Main/>
      },
      {
        path: "game",
        element: <Game/>
      },
      {
        path: "result/:number",
        element: <Result/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
