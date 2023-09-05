import Router from "./routes";
import "./App.css";
import Provider from "./components/provider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider>
      <Router />
      <Toaster />
    </Provider>
  );
}

export default App;
