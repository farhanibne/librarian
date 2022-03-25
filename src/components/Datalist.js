import React, { useEffect , useState} from 'react'
import {GrUpdate} from 'react-icons/gr'
import {MdDelete} from 'react-icons/md'
import {firebase} from '../lib/firebase'

function Datalist({data}) {
    const deleteopt = ()=>{
    
        const Dataref = firebase.database().ref('Data').child(data.id);
        Dataref.remove();
    
       
      }

  return (
    <>
         <tr>
    
    <td className="px-4 py-3">{data.books}</td>
    <td className="px-4 py-3">{data.author}</td>
    <td className="px-4 py-3">{data.quantity}</td>
    <td className="px-4 py-3 text-lg text-gray-900">{data.price}</td>

    <td className="w-15 text-center flex" >
    <button onClick={deleteopt} className="px-4 py-3" style={{fontSize:'25px'}}><MdDelete/></button> 

    </td>

    </tr>
    </>
  )
}

export default Datalist