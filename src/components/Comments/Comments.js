import React, { useState } from 'react'
//import {Button, Input} from 'react-bootstrap/Button';
const  {TextArea}  = Input;


function Comments() {

    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarger.value)

    }
    
    return(
        <div>
            <br />
            <p> replies</p>
            <hr />

            {/* Comment Lists */}

            {/* Root Comment Form */}
            <form style={{ display:'flex' }} onSubmit>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange={handleChange}
                    value={Comment}
                    placeholder="write some comments"
                    />
                    <br />
                   
            </form>


        </div>
    )
}

export default Comments
