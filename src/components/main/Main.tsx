import Cards from "../home/Cards";
// import Dice from "../home/Dice";
import Faq from "../home/FAQ";
import Footer from "../home/Footer";
// import Games from "../home/Games";
import Home from "../home/Home";
import Installation from "../home/Installation";
import MobileScreen from "../home/MobileScreen";
// import Reviews from "../home/Reviews";



export default function Main() {
  return (
    <main id="main" className="container mx-auto pt-8">
        <Home/>
        <MobileScreen/>
        <Cards/>
        {/* <Dice/> */}
        {/* <Games/> */}
        <Installation/>
        {/* <Reviews/> */}
        <Faq/>
        <Footer/>
      </main>

  )
}
