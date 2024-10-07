import AccelertedPayments from "./AccelertedPayments"
import AppMarketPlace from "./AppMarketPlace"
import Challanges from "./Challanges"
import ClaimPayment from "./ClaimPayment"
import Footer from "./Footer"
import FreeTrail from "./FreeTrail"
import GenerateRevenue from "./GenerateRevenue"
import GetInTouch from "./GetInTouch"
import Header from "./Header"
import LeadershipTeam from "./LeadershipTeam"
import MedicalClaims from "./MedicalClaims"
import MedicalReceivals from "./MedicalReceivals"
import Ratings from "./Ratings"
import SuperCharge from "./SuperCharge"
import SupportedTeam from "./SupportedTeam"
import Home from './Home.jsx'
const AllComponents = () => {
  return (
 <>
  <div>
          <Header />
          <div className='mt-[6rem]'>
            <Home/>
            <ClaimPayment />
            <MedicalReceivals />
            <SuperCharge />
            <GenerateRevenue />
            <AccelertedPayments />
            <LeadershipTeam />
            <SupportedTeam />
            <GetInTouch />
            <AppMarketPlace />
            <MedicalClaims />
            <Ratings />
            <Challanges />
            <FreeTrail />
            <Footer />
          </div>
        </div>
 </>
  )
}

export default AllComponents