import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TopBar from "./TopBar";
import NotFound from "./pages/NotFound";
import ProductsList from "./pages/ProductsList";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/products" component={ProductsList} exact />
            <Route path="/products/:productId" component={ProductDetails} exact />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
