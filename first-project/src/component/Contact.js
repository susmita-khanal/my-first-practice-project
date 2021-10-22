import React,{useState} from 'react'
import "./Contact.css"

const Contact = () => {
    const[contact,setContact]=useState({
        fullName:"",
        email:"",
        phone:"",
        message:""
    });
const[records,setRecords]=useState([]);

    // const[email,setEmail]=useState("");
    // const[phone,setPhone]=useState("");
    // const[message,setMessage]=useState("");

    const handleInput=(e)=>{
const name=e.target.name;
const value=e.target.value;
console.log(name,value)
setContact({...contact, [name]:value});
    }
    const onSubmits=(e)=>{
        e.preventDefault();
// setRecords(...records,contact);
const newRecord={...contact,id:new Date().getTime().toString()}

setRecords([...records,newRecord]);
console.log(records);
    }
    // useEffect(()=>
    // {

    // })
    return (
        <>
        <div className="form-box">
           <div className="form">
               <h1 className="contact-heading">Contact Us</h1>
               <form onSubmit={onSubmits}>
               <div className="form-field">
               <div className="input">
               <label  htmlFor="fullname">FullName </label>
               <input className="field" type="text" placeholder="Enter Your fullname" name="fullName" value={contact.fullName} onChange={handleInput}/>
               </div>

               <div className="input">
               <label  htmlFor="Email">Email </label>
               <input className="field" type="text" placeholder="Enter Your email" name="email" value={contact.email} onChange={handleInput}/>
               </div>

               <div className="input">
               <label  htmlFor="Phone">Phone </label>
               <input className="field" type="text" placeholder="Enter Your phone number" name="phone" value={contact.phone} onChange={handleInput}/>
              
               <div className="text-area">
               <label  htmlFor="Message">Message </label>
               <textarea row="8" column="50" className="message" name="message" value={contact.message} onChange={handleInput}>Message</textarea>
               <div>

               <input  className="submit" type="submit" value="submit"/>
               </div>
               </div>
               </div>
               </div>
               </form>
              {records && records.map((cval,i)=>{
                  return(<>
                  <li key={i}>{cval.fullName}</li>
                
             </> )})}
               </div>
        </div>
        </>
    )
}

export default Contact

