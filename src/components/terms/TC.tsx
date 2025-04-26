
import Terms from "../home/Terms"
import Navbar from "../navbar/Navbar"


export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <main id="terms" className="container mx-auto pt-8"><Terms/></main>
    </div>
  )
}
