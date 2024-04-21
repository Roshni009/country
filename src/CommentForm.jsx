import { useState } from "react"

export default function CommentForm() {
     let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
     });

     let handleInputChange = (event) => {
        setFormData((currData) => {
          return{...currData, [event.target.name]: event.target.value};
        });
     };

     let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        });
     };


    return (
        <div>
            <h3>Give a comment!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input type="text" value={formData.username} onChange={handleInputChange} placeholder="username" id="username" name="username"/>
                <br /> <br />
                
                <label htmlFor="remarks">Remarks</label>
                <textarea value={formData.remarks} onChange={handleInputChange} id="reamrks"  name="remarks" placeholder="add few remark">Remarks</textarea>
                <br /> <br />

                <label htmlFor="rating">Rating</label>
                <input type="number" value={formData.rating} onChange={handleInputChange} id="rating" name="rating"  placeholder="rating" min={1} max={5} />
                <br /> <br />

                <button>Add Comment</button>            
</form>
        </div>
    )
}