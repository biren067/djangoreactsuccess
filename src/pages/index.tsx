// import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import {useState} from 'react'
import EnrollDoctor from '../../components/EnrollDoctor'
import ViewDoctor from '../../components/ViewDoctor'
export default function Home() {

    const[username,setUserName]=useState('Guest')
    const[createDoctorToggle,setCreateDoctorToggle] = useState(true)
    const[viewDoctorToggle,setViewDoctorToggle] = useState(false)
    const[updateDoctorToggle,setUpdateDoctorToggle] = useState(false)
    const[deleteToggle,setDeleteToggle] = useState(false)
    const menuClick=(event:any)=>{
      if (event.target.innerText==='Create Doctor'){
        setCreateDoctorToggle(true)
        setViewDoctorToggle(false)
        setUpdateDoctorToggle(false)
        setDeleteToggle(false)
      }else 
      if(event.target.innerText==='View Doctor'){
          setViewDoctorToggle(true)  
          setCreateDoctorToggle(false)
          setUpdateDoctorToggle(false)
          setDeleteToggle(false)
      }else
      if(event.target.innerText==='Update Doctor'){
          setUpdateDoctorToggle(true)  
          setCreateDoctorToggle(false)
          setViewDoctorToggle(false)
          setDeleteToggle(false)
      }else
      if(event.target.innerText==='Delete Doctor'){
          setDeleteToggle(true)  
          setCreateDoctorToggle(false)
          setUpdateDoctorToggle(false)
          setViewDoctorToggle(false)
      }


    }
  return (
    <div >
      <div className='flex '>
        <div className='flex-cols w-1/6 pt-10 pl-4 '>
          {/* <Image className='pl-5' src={'/aha.ico'} alt="not avalibale" width={80} height={80}/> */}
          <div className='menuSelected px-2 m-2 cursor-pointer' onClick={menuClick} >Create Doctor</div>
          <div className='menuSelected px-2 m-2 cursor-pointer' onClick={menuClick} >View Doctor</div>
          <div className='menuSelected px-2 m-2 cursor-pointer' onClick={menuClick} >Update Doctor</div>
          <div className='menuSelected px-2 m-2 cursor-pointer' onClick={menuClick} >Delete Doctor</div>
        </div>
        <div className='content bg-white w-5/6 '>
          <div className='user pl-7 pt-4 pb-4  bg-red-500-500'>User :{username}</div>
          
          <hr/>
          <div className=' pt-12 pl-4 ' >
            
            {createDoctorToggle && <EnrollDoctor/>}
            {viewDoctorToggle  && <ViewDoctor/>}
            {updateDoctorToggle && `Update doctor valid`}
            {deleteToggle && `Delete doctor valid`}

          </div>
        </div>
          
      </div>
    </div>
  )
}
