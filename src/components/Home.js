import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Home = () => {

    const blogs = useSelector(state => state);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to="/add" className = "btn btn-outline-dark">
                        Add Blog
                    </Link>
                </div>
                <div className="col-md-6 mx-auto">
                  {blogs.map((blog, id) => (
                        <Card className="mt-3" key={id}>
                        <Card.Header as="h5">{blog.title}</Card.Header>
                        <Card.Body>
                           <Card.Text>
                                {blog.content}
                           </Card.Text>
                           <Link to={`/show/${blog.id}`}>view</Link>
                        </Card.Body>
                      </Card>
                  ))}  
                
                </div>
            </div>
        </div>
    );
};

export default Home;