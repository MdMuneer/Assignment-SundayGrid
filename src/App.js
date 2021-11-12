import "./css/style.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import LayoutOne from "./components/layoutOne/layoutOne";
import CarouselSection from "./components/carousel/carouselSection";
import LayoutTwo from "./components/layoutTwo/layoutTwo";
import PaginationCard from "./components/pagination/paginationcard";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <section className="wrapper">
        <Header />
        <Hero />
      </section>
      <LayoutOne />
      <CarouselSection />
      <LayoutTwo />
      <PaginationCard />
      
      {/*<CardPaginate />*/}
      <Footer />
    </div>
  );
}

export default App;
