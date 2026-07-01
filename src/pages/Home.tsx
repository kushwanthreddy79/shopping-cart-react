import Navbar from "../components/Navbar";
import Offers from "../components/offers";
import ProductList from "../components/ProductList";
import FloatingCart from "../components/FloatingCart";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <Offers />
        <ProductList />

      </div>

      <FloatingCart />

    </div>
  );
};

export default Home;