import Router from "./routes";
import "./App.css";
import Provider from "./components/provider";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
