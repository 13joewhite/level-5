import React, { useState } from "react"

function AddBountyForm(props){
    const bountyInput = { firstName: props.firstName || "", lastName: props.lastName || "", status: props.status || "", bounty: props.bounty || "", type: props.type ||""}
    const [inputs, setInputs] = useState(bountyInput)

    function handleChange(e){ 
        const {name, value} = e.target
        setInputs(prevInput => ({...prevInput, [name]: value}))
    }

    console.log(props, props.setEditToggle)

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(bountyInput)
    }

    return(
        <form className={props.setEditToggle !== undefined ? "edit-form" : null} onSubmit={(e) => {
            handleSubmit(e)
            if(props.setEditToggle !== undefined) {
                return props.setEditToggle(prevToggle => !prevToggle)
            }
            }}>

            <input 
                type="text" 
                name="firstName" 
                value={inputs.firstName} 
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                type="text" 
                name="lastName" 
                value={inputs.lastName} 
                onChange={handleChange}
                placeholder="Last Name" 
            />
            <select 
                name="status"  
                value={inputs.status} 
                onChange={handleChange}>
                <option value="" disabled hidden>Living Status</option>
                <option value="Alive">Alive</option>
                <option value="Terminated">Terminated</option>
            </select>
            <input 
                type="number" 
                name="bounty" 
                value={inputs.bounty} 
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
             <select 
                name="type"  
                value={inputs.type} 
                onChange={handleChange}>
                <option value="" disabled hidden>Jedi/Sith</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
                <option value="Other">Other</option>
            </select>
            
            <button className="btn btn-animated btn-yellow">{ props.btnText }</button>
        </form>
    )
}
export default AddBountyForm