
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import { useState } from 'react'
function App() {

  const [employeeList, setEmployeeList] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [country, setCountry] = useState("")
  const [position, setPosition] = useState("")
  const [wage, setWage] = useState(0)
  const [newWage, setNewWage] = useState(0)

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees')
      .then((res) => {
        setEmployeeList((res.data))
      })
  }

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then(() => {
      setEmployeeList([...employeeList, {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
      }])
    })
  }

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id })
      .then((res) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id ? {
              id: val.id,
              name: val.name,
              country: val.country,
              age: val.age,
              position: val.position,
              wage: newWage
            } : val;
          })
        )
      })
  }

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
      .then((res) => {
        setEmployeeList(
          employeeList.filter((val) => {
            return val.id != id
          })
        )
      })
  }

  return (
    <div className='container'>
      <h1>Employee Infomation</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text" className='form-control' placeholder='Enter name' onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className='form-label'>Age</label>
            <input type="text" className='form-control' placeholder='Enter age' onChange={(e) => { setAge(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className='form-label'>Country</label>
            <input type="text" className='form-control' placeholder='Enter country' onChange={(e) => { setCountry(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="position" className='form-label'>Position</label>
            <input type="text" className='form-control' placeholder='Enter position' onChange={(e) => { setPosition(e.target.value) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="wage" className='form-label'>Wage</label>
            <input type="number" className='form-control' placeholder='Enter wage' onChange={(e) => { setWage(e.target.value) }} />
          </div>

          <button className='btn btn-success' onClick={addEmployee}>Add employee</button>
        </form>
      </div>

      <hr />
      <div className="employees">
        <button className='btn btn-primary mb-5' onClick={getEmployees}>Show employees</button>
        {employeeList.map((val, index) => {
          return (
            <div className="employee card" key={index}>
              <div className="card-body text-left">
                <p className='card-text'>Name: {val.name}</p>
                <p className='card-text'>Age: {val.age}</p>
                <p className='card-text'>Country: {val.country}</p>
                <p className='card-text'>Position: {val.position}</p>
                <p className='card-text'>Wage: {val.wage}</p>
                <div className="d-flex">
                  <input type="number" placeholder='15000...' className='form-control' style={{ width: "300px" }}
                    onChange={(event) => { setNewWage(event.target.value) }} />
                  <button className='btn btn-warning' onClick={() => { updateEmployeeWage(val.id) }}>Update</button>
                  <button className='btn btn-danger' onClick={() => { deleteEmployee(val.id) }}>Delete</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App
