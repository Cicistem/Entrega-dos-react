import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";

import MainRouter from "./routes/MainRouter";

const App = () => {
  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  );
};

export default App;
