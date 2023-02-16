import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';

const EditBlog = () => {

    const { id } = useParams();
    const blogs = useSelector(state=>state);
    
    const dispatch = useDispatch();
    const history = useHistory();
    const currentblog = blogs.find((blog) => blog.id === parseInt(id));
    
   
    useEffect(()=>{
        if(currentblog){
           Settitle(currentblog.title);
           Setcontent(currentblog.content);
           Setimagelink(currentblog.imagelink);
        }
    }, [currentblog]);

    const [title, Settitle] = useState("");
    const [content, Setcontent] = useState("");
    const [imagelink, Setimagelink] = useState("");
    


    const handleSubmit = (e) => {
        e.preventDefault();
    
      const data = Object.assign(currentblog, {
          id: parseInt(id),
          title : title ,
          content : content,
          imagelink : imagelink,
        });
      
      dispatch({type: "UPDATE_BLOG", payload: data})
      toast.success("Blog updated Successfully!!")
      history.push("/");
    };

    return(
        <div className="container">
            <button
               className="btn btn-dark ml-auto my-5"
               onClick={() => history.push("/")}
            >
                Go back
            </button>
           <div className="row">
                <h1 className="display-3 text-center">Edit Blog </h1>
                <div className="col-md-6 shadow mx-auto p-5">
                   <form onSubmit={(e) => handleSubmit(e)}>
                       <div className="form-group p-1">
                           <input  placeholder="Title" className="form-control"  value={title} onChange={(e) => Settitle(e.target.value)}/>
                       </div>
                       <div className="form-group p-1">
                           <input  placeholder="Content" className="form-control"  value={content} onChange={(e) => Setcontent(e.target.value)}/>
                       </div>
                       <div className="form-group p-1">
                           <input  placeholder="Image Link" className="form-control" value={imagelink} onChange={(e) => Setimagelink(e.target.value)}/>
                       </div>
                       <div className="form-group d-flex align-items-center justify-content-between my-2">
                             <button type="submit" className="btn btn-warning">
                                  Update Contact
                             </button>
                             <button
                                 type="button"
                                 className="btn btn-danger"
                                 onClick={() => history.push("/")}>
                                 Cancel
                             </button>
                       </div>
                      
                  </form> 
                </div>
            </div>
         
        </div>
    );
};



export default EditBlog;