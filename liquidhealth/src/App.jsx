
import './App.css'
import AccelertedPayments from './Components/AccelertedPayments'
import ClaimPayment from './Components/ClaimPayment'
import GenerateRevenue from './Components/GenerateRevenue'
import Header from './Components/Header'
import Home from './Components/Home'
import LeadershipTeam from './Components/LeadershipTeam'
import MedicalReceivals from './Components/MedicalReceivals'
import SuperCharge from './Components/SuperCharge'

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
  </div>
  </div>
    </>
  )
}

export default App
