import React from "react"
import PeoplesForm from "./components/PeoplesForm"
import PeoplesFormDataAppendForm from "./components/PeoplesFormDataAppendForm"

function App() {

  const [formData, setformData] = React.useState([]);

  const dataForm = (formData)=>{
    setformData((prev)=>{
      return [...prev, formData];
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <PeoplesForm onSubmit={dataForm}/>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <PeoplesFormDataAppendForm data={formData}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
