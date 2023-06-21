import React, { useState } from 'react'

function Comment() {
    const [inputValue , setinputValue] = useState({
        name : '',
        email : '',
        URL : '',
        feedback : ''
    });
    const [showData , setshowData] = useState([]);
    const handleInput = (e)=>{
        const {name, value} =  e.target
        setinputValue ((prevdata)=>({
            ...prevdata,
            [name]: value
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setshowData((previousData)=>[...previousData,inputValue])
        setinputValue({
            name : '',
            email : '',
            URL : '',
            feedback : ''
        })
    }
    return (
        <>
            <h2 id="fh2">WE APPRECIATE YOUR REVIEW!</h2>
            <h6 id="fh6">Your review will help us to improve our web hosting quality products, and customer services.</h6>
            <div className='row' id="feedback">
                <form  action="" className='col-6' onSubmit={handleSubmit}>
                    <div className='form col-12'>
                        <div className="pinfo">Your personal info</div>
                        <div className="form-group">
                            <div className=" inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input name="name" placeholder="John Doe" className="form-control" type="text"  value={inputValue.name}  onChange={handleInput}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-6 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                                    <input name="email" type="email" className="form-control" placeholder="john.doe@yahoo.com" value={inputValue.email} onChange={handleInput}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-6 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-globe"></i></span>
                                    <input name="URL" placeholder="https://google.com" className="form-control" type="url" value={inputValue.URL} onChange={handleInput}/>
                                </div>
                            </div>
                        </div>
                        <div className="pinfo">Write your feedback.</div>
                        <div className="form-group">
                            <div className="col-md-6 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-pencil"></i></span>
                                    <textarea className="form-control" id="review" rows="3" name='feedback' value={inputValue.feedback} onChange={handleInput}></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <div className='review-data col-6'>
                {
                    showData.map((reviewData,index)=>(
                        <div className="card mb-3">
                            <div className="card-body">
                                <h2 className='username'>{reviewData.name}</h2>
                                <h2 className="useremail">{reviewData.email}</h2>
                                <div className="comment">{reviewData.feedback}</div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default Comment