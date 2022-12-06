import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.js/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="mx-w-[1440] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
