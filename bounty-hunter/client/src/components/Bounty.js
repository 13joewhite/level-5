import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm"


export default function Bounty(props){ 
    const [editToggle, setEditToggle] = useState(false)
    console.log(props.bounties)
    return (
        <div className="bounty">   
        { !editToggle ? 
        <>
            <h1>{props.firstName} {props.lastName}</h1>
            <h2>{props.type}</h2>
            <h2>Bounty: {props.bounty}</h2> 
            <h3>Status: {props.status}</h3>
            <button  
                onClick={() => props.deleteBounty(props._id)} 
                className="btn btn-animated btn-yellow"
                >Terminate
            </button>
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}
                className="btn btn-animated btn-yellow">
                Edit 
            </button>
        </>
        :
        <div>
            <AddBountyForm 
                firstName={props.firstName} 
                lastName={props.lastName}
                bounty={props.bounty}
                status={props.status}  
                type={props.type}  
                _id={props._id}
                btnText="Submit Edit"  
                submit={props.editBounty} 
                setEditToggle={setEditToggle}   
            />
            <button 
                onClick={() => setEditToggle(prevToggle => !prevToggle)}
                className="btn btn-animated btn-yellow">
                Close
            </button>
        </div>
            }
        </div>
    )
}

