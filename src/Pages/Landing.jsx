import { useEffect, useState } from "react";
import '../Sass/Landing.scss'
import axios from 'axios';
import Box from './Landingbox'

function Landing({setCurrentPage}) {

  const [recent, setRecent] = useState([]);

  const fetchData = () => {
    axios.get(`http://localhost:3000/api/test`)
      .then(response => {
        setRecent(response.data)
      })
      .catch((err) => {
        console.log('error retrieving recents ', err)
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <div className="landing">
        <div className="headbar">
          <span className="logout"
          onClick={() => setCurrentPage('Login')}
          >Logout</span>
          <div class="Container Landing-Header">
            <span className="Landing-Heading">Welcome Back!</span>
          </div>
        </div>
        <div className="landing Center">
          <div className="landing-headbar">
            <div className="quotes-headbar">
              Quotes
              {/* <Box context={'Quote'} setCurrentPage={setCurrentPage} recent={recent}/> */}
            </div>
            <div className="orders-headbar">
              Orders
              {/* <Box context={'Order'} setCurrentPage={setCurrentPage} recent={recent}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;