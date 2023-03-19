import { useState } from 'react'
import Header from './shared/template/Header.jsx'
import Footer from './shared/template/Footer.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import RegisterForm from './component/RegisterForm.jsx'


const App = () => {

  const [showAllUser, setShowAllUser] = useState(false)
  // const [showNoti , setShowNoti] =  useState(false)

  const [currentUser, setCurrentUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    id: null
  })

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-4">
          <RegisterForm
            setShowAllUser={setShowAllUser}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />
          
        </div>
        <div className="col-md-8">
        </div>

      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
export default App