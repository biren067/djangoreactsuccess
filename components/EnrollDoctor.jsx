import React,{useState} from 'react';
import axios from 'axios';
function EnrollDoctor() {
    const[name,setName]=useState()
    const[specialist,setSpecialist]=useState()
    const[experience,setExperience]=useState()
    const[error,setError]=useState('')
    const base_url = 'http://127.0.0.1:8000/api/view/'
    const addNewDoctor = () => {
      if (name !== undefined && name !== '' && specialist !== undefined && specialist !== '' && experience !== undefined && experience !== '') 
        { console.log(name,specialist,experience)
          setError('')
            const storeDoctor = async () => {
              try {
                const res = await axios.get(`${base_url}`);
                console.log(res.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        storeDoctor();
        } else 
        {
           console.log("ELSE::",name,specialist,experience)
            setError("Please enter valid input");
        }
      };
  return (
    
      <div className='enroll-doctor'>
        <div className='enroll-header'>Enroll New Doctor</div>
        <div className='flex-col w-full '>
          <div className='input-row'>
            <label>Name:</label>
            <input type='text' className='inputtext' value={name}
            onChange={(e) => setName(e.target.value)}/>
          </div>
          {/* specialist */}
          <p className='input-row'>
            <label>Specialist:</label>
            <input type='text' className='inputtext' 
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}/>
          </p>
          {/* practise  */}
          <p className='input-row'>
            <label>Practise(Years):</label>
            <input type='number' className='inputtext' value={experience}
            // onChange={(e) => setExperience(e.target.value)} 
onChange={(e) => {
    const inputValue = e.target.value;
    if (/^[0-9]*$/.test(inputValue)) {
      // Only update the state if the input is a positive number
      setExperience(inputValue);
    }
  }}

            />
          </p>
        <label className='error-msg'>{error}</label>
        </div>
        
        <button className='custombutton' onClick={addNewDoctor}>Add Doctor</button>
      </div>

  );
}

export default EnrollDoctor;
