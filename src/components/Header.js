import React,{useState,useEffect} from 'react'
import Modal from "react-modal";
import {FcCancel} from 'react-icons/fc'
import { firebase } from '../lib/firebase'



Modal.setAppElement("#root");


const customStyles = {
  content: {
    top: "9%",
    left: "9%",
    right: "9%",
    bottom: "9%",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.75)",
  },
};



function Header() {
  
  const [modalIsOpen, setIsOpen] = useState(false);

    const [books,setBooks] = useState("");
    const [author,setAuthor] = useState("");
    const [quantity,setQuantity] = useState("");
    const [price,setPrice] = useState("");

    const handlea = (e) => {
       setBooks(e.target.value);
      
     
    }
    const handleb = (e) => {
      setAuthor(e.target.value);
      
    }
    const handlec = (e) => {
      setQuantity(e.target.value);
      
    }
    const handled = (e) => {
      setPrice(e.target.value);
    
    }


    const createData = () =>{
      const Dataref = firebase.database().ref('Data');
      const Data = {
        books,
        author,
        quantity,
        price

      }
      Dataref.push(Data);

      setBooks("");
      setAuthor("");
      setQuantity("");
      setPrice("");
      
    }
  
  return (
    <div className='w-[100vw] h-[9vh] bg-black'>
    

    <div style={{display:'flex',justifyContent:'flex-end',marginRight:'2%'}}>
    <button
    type="submit"
    className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    style={{ backgroundColor: "#487f63", marginTop: "10px" }}
    onClick={() => setIsOpen(true)}

    >
    Add Book
    </button>
    </div>

    <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => setIsOpen(false)}
    shouldCloseOnOverlayClick={false}
    style={customStyles}
    >
    <div
    className="flex"
    style={{ justifyContent: "space-between" }}
    >
    <h1 style={{ margin: "8px", fontSize: "20px" }}>
    LIBRARIAN{" "}
    </h1>
    <button
    style={{ fontSize: "25px", margin: "10px" }}
    onClick={() => setIsOpen(false)}
    >
    <FcCancel />
    </button>
    </div>
    <div style={{ margin: "8px" }}>
    <center>
    <h2 style={{ fontSize: "25px", margin: "10px" }}>
    ADD A NEW BOOK
    </h2> <br/>
    <input
    type="text"
    onChange={handlea}
    value={books}
    required
    style={{
    marginBottom: "13px",
    background: "transparent",
    }}
    placeholder="Book Name"
    className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"
    />{" "}
    <br />
    <input
    type="text"
    onChange={handleb}
    value={author}
    required
    style={{
    marginBottom: "13px",
    background: "transparent",
    }}
    placeholder="Book Author"
    className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"
    />{" "}<br/>

     <input
    type="Number"
    onChange={handlec}
    value={quantity}
    required
    style={{
    marginBottom: "13px",
    background: "transparent",
    }}
    placeholder="Quantity"
    className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"/>

    <br/>
    <input
    type="Number"
    onChange={handled}
    value={price}
    required
    style={{
    marginBottom: "13px",
    background: "transparent",
    }}
    placeholder="Price"
    className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw]"/>
   
    

    <br />
    <button
    type="submit"
    className="border-2 border-gray-400 rounded-lg p-2 w-[70vw] md:w-[40vw] text-white font-bold"
    style={{
    backgroundColor: "#487f63",
    marginTop: "10px",

    }}
    onClick={createData}

    >
    {" "}
    Add
    </button>
    </center>
    </div>
    </Modal>

    </div>
  )
}

export default Header