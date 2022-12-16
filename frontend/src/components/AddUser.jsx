import axios from 'axios';
import React, {useState} from 'react';
import { 
  useNavigate, 
  Link 
} from 'react-router-dom';

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");
  const navigate = useNavigate();

  const handleChange = e => {
    setGender(e.target.value);
  };

  const addUser = async (e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:3080/users', {
        name,
        email,
        gender,
        address
      });
      navigate('/')
    } catch (error){
      console.log(error);
    }
  }

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
      <h1 className='is-size-1 mb-3 has-text-weight-bold'>Form Add User</h1>
        <form onSubmit={addUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
              required
              className='input' 
              type="text" 
              placeholder='Name'
              value={name}
              onChange={(e)=> setName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input 
              required
              className='input'
              type="text" 
              placeholder='Email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <label className="label">Gender</label>
            <div className="control">
              <label className="radio">
                <input 
                type="radio" 
                name="gender"
                id='male' 
                value="male" 
                checked={gender === 'male'}
                onChange={handleChange}
                />
                  Male
              </label>
              <label className="radio">
                <input 
                type="radio" 
                name="gender" 
                id='female'
                value="female"
                checked={gender === 'female'}
                onChange={handleChange}
                />
                  Female
              </label>
            </div>
          </div>
          <div className="field mt-3">
            <label className="label">Address</label>
            <div className="control">
              <textarea 
              required
              className='textarea' 
              placeholder='Address' 
              value={address}
              onChange={(e)=> setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <button type='submit' className='button is-link mr-3'>
              Add
            </button>
            <Link to={`/`} className='button is-success'>Back</Link>
          </div>
        </form>
      </div>
      {/* <p>{address}</p> */}
    </div>
  )
}

export default AddUser