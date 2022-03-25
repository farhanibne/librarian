import React, { useEffect , useState} from 'react'
import {GrUpdate} from 'react-icons/gr'
import {MdDelete} from 'react-icons/md'
import {firebase} from '../lib/firebase'
import Datalist from './Datalist'



function Product() {

 
  const [datalisted,setDatalist] = useState('');

 useEffect(()=>{
  
  const Dataref = firebase.database().ref('Data');
  Dataref.on('value',(snapshot)=>{
    const datas  = snapshot.val();
    const datalisted = []
    for (let id in datas){
      datalisted.push({id,...datas[id]});
    }
    
    setDatalist(datalisted);
  });
  },[])


  return (
    <div>
    
    
    <div>
  
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"> LIBRARIAN</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Manage your library thought our process</p>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
    <table className="table-auto w-full text-left whitespace-no-wrap">
    <thead>
    <tr>
    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Author</th>
    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>

    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
    </tr>
    </thead>
    <tbody>
    {datalisted ? datalisted.map((data,index)=>(
        <Datalist data={data} key={index}/>
    )) : ""}
 


    </tbody>
    </table>
    </div>

    </div>
    </section>



    </div> 
   

    </div>
  )
}

export default Product