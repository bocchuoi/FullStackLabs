import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [psCode, setPsCode] = useState("");
  const [province, setProvince] = useState("");
  const provinces = ["-----","Alberta", "British Columbia", "Ontario"];
  const [data, setData] = useState({name:"",email:"",address1:"",address2:"",city:"",psCode:"",province:""});
  
  return (
    <div className="App" class="d-flex justify-content-lg-center">
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input id="email" class="form-control" type="text" placeholder='Email' value={email} onChange={e=>{setEmail(e.target.value)}}/>
        </div>
        <div class="form-group">
          <label>Name</label>
          <input class="form-control" type="text" placeholder='Name' value={name} onChange={e=>{setName(e.target.value)}}/>
        </div>
        <div class="form-group">
          <label>Address1</label>
          <input class="form-control" type="text" placeholder='Address1' value={address1} onChange={e=>{setAddress1(e.target.value)}}/>
        </div>
        <div class="form-group">
          <label>Address2</label>
          <input class="form-control" type="text" placeholder='Address2' value={address2} onChange={e=>{setAddress2(e.target.value)}}/>
        </div>
        <div class="form-group">
          <label>City</label>
          <input class="form-control" type="text" placeholder='City' value={city} onChange={e=>{setCity(e.target.value)}}/>
        </div>
        <div class="form-group">
          <label>Postal Code</label>
          <input class="form-control" type="text" placeholder='Postal Code' value={psCode} onChange={e=>{setPsCode(e.target.value)}}/>
        </div>

        <div class="form-group">
          <label>Province</label>
          <select class="form-control" onChange={e=>{setProvince(e.target.value)}} value={province} name="province">
              {
                  provinces.map(province => (
                      <option key={province} value={province}>{province}</option>
                  ))
              }
          </select>
        </div>
        <br></br>
        <button class="btn btn-primary" onClick={()=>{setData(
          {"name":name,
          "email":email,
          "address1":address1,
          "address2":address2,
          "city":city,
          "psCode":psCode,
          "province":province})
          }} type="button">Submit</button>
        <br></br>
        <hr></hr>
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Address1: {data.address1}</p>
          <p>Address2: {data.address2}</p>
          <p>Postal Code: {data.psCode}</p>
          <p>City: {data.city}</p>
          <p>Province: {data.province}</p>
        </div>
      </form>

    </div>
  );
}

export default App;
