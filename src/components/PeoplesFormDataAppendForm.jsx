import PropTypes from 'prop-types'

const PeoplesFormDataAppendForm = ({ data }) => {
  return (
    <div>
      <table className="table">
         <thead>
             <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Password</th>
             </tr>
         </thead>
         <tbody>
           {data.map((item, index) => {
             return (
               <tr key={index}>
                 <td>{item.name}</td>
                 <td>{item.age}</td>
                 <td>{item.password}</td>
               </tr>
             )
           })}
         </tbody>
      </table>
    </div>
  )
}

PeoplesFormDataAppendForm.propTypes = {
  data: PropTypes.array.isRequired,
}

export default PeoplesFormDataAppendForm
