import Header from "./components/header/Header";
import HeroSlider from "./components/slider/HeroSlider";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import TopProductsLayout from "./components/top-products/TopProductsLayout";
import TopProducts from "./components/top-products/TopProducts";


function App() {
  return (
    <>
      <Header />
      <HeroSlider />
      <TopProducts />
    </>
  );
}

export default App;
