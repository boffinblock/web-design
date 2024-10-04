
import './App.css'
import AccelertedPayments from './Components/AccelertedPayments'
import AppMarketPlace from './Components/AppMarketPlace'
import Challanges from './Components/Challanges'
import ClaimPayment from './Components/ClaimPayment'
import Footer from './Components/Footer'
import FreeTrail from './Components/FreeTrail'
import GenerateRevenue from './Components/GenerateRevenue'
import GetInTouch from './Components/GetInTouch'
import Header from './Components/Header'
import Home from './Components/Home'
import LeadershipTeam from './Components/LeadershipTeam'
import MedicalClaims from './Components/MedicalClaims'
import MedicalReceivals from './Components/MedicalReceivals'
import Ratings from './Components/Ratings'
import SuperCharge from './Components/SuperCharge'
import SupportedTeam from './Components/SupportedTeam'

function App() {

  return (
    <>
  <div>
  <Header/>
  <div className='mt-[6rem]'>
  <Home/>
  <ClaimPayment/>
  <MedicalReceivals/>
  <SuperCharge/>
  <GenerateRevenue/>
  <AccelertedPayments/>
  <LeadershipTeam/>
  <SupportedTeam/>
  <GetInTouch/>
  <AppMarketPlace/>
  <MedicalClaims/>
  <Ratings/>
  <Challanges/>
  <FreeTrail/>
  <Footer/>
  </div>
  </div>
    </>
  )
}

export default App
