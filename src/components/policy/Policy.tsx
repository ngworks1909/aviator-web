import Privacy from "../home/Privacy"
import Navbar from "../navbar/Navbar"


export default function Policy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <main id="policy" className="container mx-auto pt-8"><Privacy/></main>
    </div>
  )
}
