import Header from "./components/header/Header";
import HeroSlider from "./components/slider/HeroSlider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import TopProductsLayout from "./components/top-products/TopProductsLayout";
import TopProducts from "./components/top-products/TopProducts";
import Advantages from "./components/advantages/Advantages";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <TopProducts />
      <Advantages />
      <Footer />
    </>
  );
}

export default App;
