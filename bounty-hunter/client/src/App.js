import React, {useState, useEffect } from "react"
import Bounty from "./components/Bounty"
import AddBountyForm from "./components/AddBountyForm"
import axios from "axios" 

function App(){
    const [bounties, setBounties] = useState([])

    function getBounties(){
        axios.get("/bounties")
            .then(res => {
                console.log(res.data)
                setBounties(res.data)})
            .catch(err => console.log(err))       
        }
        
        function addBounty(newBounty){
            axios.post("/bounties", newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
        }
        
        function deleteBounty(bountyId) { 
            axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
        }
        
        function editBounty(updates, bountyId) {
            axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
        }
          
        useEffect(() => {
            console.log(getBounties()) 
        }, [])
        
        return (
        <div>
            <h1 className="header">My Bounties</h1>
            <AddBountyForm 
            submit={addBounty}
            btnText ="Add Bounty"
            editBounty={editBounty} 
            />
        <div className="bountyContainer">
            { bounties.map(bounty =>  
                <Bounty 
                    {...bounty} 
                    key={bounty._id}
                    deleteBounty={deleteBounty}
                    editBounty={editBounty} 
                />  ) }        
        </div> 
        </div>
    )
}



export default App
