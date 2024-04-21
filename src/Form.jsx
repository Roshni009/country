import { useState } from "react"

export default function Form() {
    
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
    
    let handleFormInput = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(newValue);

        setFormData((currData) => {
          //  currData[fieldName] = newValue;
           return{...currData, [event.target.name]: event.target.value};
        });
    };
 
     let handleSubmit = (event) => {
      event.preventDefault();
      setFormData({
         fullName: "",
         userName: "",
         password: "",
      });

     };

    return (
    
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" placeholder="enter full name" id="fullname" name="fullName" value={formData.fullName}  onChange={handleFormInput}/>
            <br /> <br />
            <label htmlFor="username">User Name</label>
            <input type="text" placeholder="enter user name" id="username" name="userName" value={formData.userName}  onChange={handleFormInput}/>
            <br /> <br />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="enter Password" id="password" name="password" value={formData.userName}  onChange={handleFormInput}/>
            <br /> <br />
            <button>Submit</button>
        </form>
    );

    
}