import React,{useState} from 'react';
import axios, { all } from 'axios';
// import url from '../components/globalData'
// import BASE_URL from django.conf.settings;
function EnrollDoctor() {
    const[name,setName]=useState()
    const[specialist,setSpecialist]=useState()
    const[experience,setExperience]=useState()
    const[error,setError]=useState('')
    const[allDoctor,getAllDoctor]=useState('')
    const base_url = `/api/view/`
    const addNewDoctor = () => {
      
            const storeDoctor = async () => {
              try {
                const res = await axios.get(`${base_url}`);
                console.log(res.data);
                getAllDoctor(res.data)
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        storeDoctor();
       
      };
  return (
    
      <div className='enroll-doctor'>
        <div className='enroll-header'>View All Doctors</div>
        
        
        <button className='custombutton' onClick={addNewDoctor}>Add Doctor</button>

        {allDoctor && (
        <ul>
            {allDoctor.map((row,index)=>(
                
                <li key={index}>
                    {row.name}|{row.specialist}|{row.practise}
                    
                </li>
            )
            )
            }
        </ul>)
        }
        
      </div>

  );
}

export default EnrollDoctor;
