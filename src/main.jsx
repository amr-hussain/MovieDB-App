import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";

// redux imports
import { store } from "./redux/store.js";
import { Provider } from "react-redux";


// strict mode runs the api fetch twice to eliminate errors
createRoot(document.getElementById("root")).render(
  <StrictMode>  
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
