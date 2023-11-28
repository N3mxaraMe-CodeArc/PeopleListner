import React from 'react'
import PropTypes from 'prop-types'
import ErrorMessage from './ErrorMessage'

const PeoplesForm = ({ onSubmit }) => {

   const [name, setName] = React.useState("")
   const [age, setAge] = React.useState("")
   const [password, setPassword] = React.useState("")
   const [errors, setErrors] = React.useState([]);

   const submitHandler = () => {
      const newErrors = [];
  
      if (!name) {
        newErrors.push('Name is required');
      }
  
      if (age.trim().length < 1 ) {
        newErrors.push('Age is required');
      }
      if (age <= 0 ) {
        newErrors.push('Age must be a Positive number');
      }
  
      if (password.trim().length < 1) {
        newErrors.push('Password is required');
      }
  
      setErrors(newErrors);
      setTimeout(() => {
         setErrors([]);
      },3000)
  
      if (newErrors.length > 0) {
        return;
      }
  
      const data = { name, age, password };
      onSubmit(data);
  
      console.log(data);
      setName('');
      setAge('');
      setPassword('');
      setErrors([]);
    };
  

   return (
      <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
         <div>
            <h2 className="text-center">People Adder System</h2>

            <ErrorMessage errors={errors} />
            
            <div className="form-group">
               <label className="form-label" htmlFor="name">Name</label>
               <input type="text" value={name} onChange={(e) => {
                  setName(e.target.value);
               }} className="form-control" id="name" />
            </div>
            <div className="form-group">
               <label className="form-label" htmlFor="age">Age</label>
               <input type="number" value={age} onChange={(e) => {
                  setAge(e.target.value);
               }} className="form-control" id="age" />
            </div>
            <div className="form-group">
               <label className="form-label" htmlFor="password">Password</label>
               <input type="password" value={password} onChange={(e) => {
                  setPassword(e.target.value);
               }} className="form-control" id="password" />
            </div>
            <div className="row">
               <button action="submit" onClick={submitHandler} className="m-2 btn btn-primary">Submit</button>
               <button action="reset" className="m-2 btn btn-outline-dark">Reset</button>
            </div>
         </div>
      </div>

   )
}

PeoplesForm.propTypes = {
   onSubmit: PropTypes.func.isRequired
};

export default PeoplesForm
