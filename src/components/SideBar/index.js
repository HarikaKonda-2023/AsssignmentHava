import {IoMdHome} from 'react-icons/io'
import {PiSquaresFourFill} from 'react-icons/pi'

const SideBar = () => {
  ;<div className="main-side-con">
    <div className="icon-con">
      <IoMdHome className="icon" />
      <p>Home</p>
    </div>
    <div className="icon-con">
      <PiSquaresFourFill className="icon" />
      <h1>Dashboard</h1>
    </div>
    <h1>Services</h1>
    <p className="airports-con">Airports</p>
    <p>Videos</p>
    <h1>Others</h1>
    <p>List1</p>
    <p>List2</p>
    <p>List3</p>
  </div>
}

export default SideBar
