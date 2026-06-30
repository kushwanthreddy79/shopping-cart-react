import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import Offers from "./components/offers";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <Header />
      <Offers />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        <ProductList />

        <Basket />

      </div>

    </div>
  );
}

export default App;