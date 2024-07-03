// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import React from 'react';
import './Signup.css';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';


function Signup() {
  return (
    
    
    
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      
       <h3 className="mb-4">Login Here</h3>

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="custom-btn mb-4">Sign in</MDBBtn>
      <div className="text-center text-center-p">
        <p>Not a member? <a href="#!" className="register-link">Register</a></p> {/* Apply custom link class */}
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#424242' }}>
            <MDBIcon fab icon='facebook-f' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#424242' }}>
            <MDBIcon fab icon='twitter' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#424242' }}>
            <MDBIcon fab icon='google' size="sm" />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#424242' }}>
            <MDBIcon fab icon='github' size="sm" />
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );
}

export default Signup;