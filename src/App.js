import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.js/Routes";

function App() {
  return (
    <div className="mx-w-[1440] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
