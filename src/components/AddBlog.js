import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';



const AddBlog = () => {
     
    const [title, Settitle] = useState("");
    const [content, Setcontent] = useState("");
    const [imagelink, Setimagelink] = useState("");
     
    const blogs = useSelector((state) => state);
    const dispatch = useDispatch();

    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
      const data = {
          id: blogs[blogs.length -1].id + 1,
          title,
          content,
          imagelink


      };
      dispatch({type: "ADD_BLOG", payload:data})
      toast.success("Blog Added Successfully!!")
      history.push("/");
    };

    return(
       <div className="container">
            <div className="row">
                <h1 className="display-3 text-center">Add Blog</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                   <form onSubmit={handleSubmit}>
                       <div className="form-group p-1">
                           <input type="text" placeholder="Title" className="form-control" value={title} onChange={e=> Settitle(e.target.value)}/>
                       </div>
                       <div className="form-group p-1">
                           <input type="textarea" placeholder="Content" className="form-control"  value={content} onChange={e=> Setcontent(e.target.value)}/>
                       </div>
                       <div className="form-group p-1">
                           <input type="text" placeholder="Image Link" className="form-control"  value={imagelink} onChange={e=> Setimagelink(e.target.value)}/>
                       </div>
                       <div className="form-group p-1">
                           <input type="submit" value="Add Blog" className="btn btn-block btn-dark" />
                       </div>
                  </form> 
                </div>
            </div>
        </div>
    )
}

export default AddBlog;