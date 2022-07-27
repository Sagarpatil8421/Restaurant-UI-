
import React, { useState } from 'react'
import '../../Styles/Header.css'
import Modal from 'react-modal'


Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '30%',
    textAlign: 'center',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  
  const [isCreateAccountOpen, setIsCreateAccount] = useState(false)

  return (
    <div className='header'>
        <div className="s-logo">
            <span>e!</span>
        </div>
          <div className="btn-group login-block">
              <button className='login' onClick={()=> setIsLoginModalOpen(true)} >LogIn</button>
              <button className='signUp' onClick={()=> setIsCreateAccount(true)}>Create An Account</button>
          </div>


          {/* Login modal  */}
            <Modal 
            isOpen={isLoginModalOpen}
            style={customStyles}
            >
              <div>
                <h2 >Login 
                    <button className='btn btn-danger' style={{float:'right',width:'40px'}} onClick={()=> setIsLoginModalOpen(false)}>X</button>
                </h2>
          </div>

          <div>
              <form >
                  <input type="email" placeholder='Enter your email' /><br /><br />
                  <input type="password" placeholder='Enter your password' /><br /><br />
                  <button className='btn btn-primary'>Login</button>
              </form>
          </div>

          <div>
            {/* <FacebookLogin></FacebookLogin> */}
          </div>
        </Modal>

        {/* Create account Modal  */}
        <Modal 
            isOpen={isCreateAccountOpen}
            style={customStyles}
            >
              <div>
                  <h2 >Create An Account 
                      <button className='btn btn-danger' style={{float:'right',width:'40px'}} onClick={()=> setIsCreateAccount(false)}>X</button>
                  </h2>
              </div>

              <div>
                  <input type="email" placeholder='Enter youyr email' /> <br /><br />
                  <input type="password" placeholder='Enter your password' /><br /><br />
                  <input type="password" placeholder='Enter your password again' /><br /><br />
                  <button className='btn btn-success'>Create Account</button>
              </div>
        </Modal>
    </div>

  )
}
