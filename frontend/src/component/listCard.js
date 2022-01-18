import React from "react";
import "./listRecpi.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import axios from 'axios';

export default function ListItem(props) {

    const handleNavigate = async (e, insID)=>{
        try{
            window.location = `/viewARecipe/${insID}`
        }catch(err){
          console.log(err)
        }
    }

    const handleNavigateToEdit = async (e, insID)=>{
        try{
            window.location = `/editRecipe/${insID}`
        }catch(err){
          console.log(err)
        }
    }

    const handleDelete = async (e, insID)=>{
        try{
            confirmAlert({
                title: 'Confirm to Delete',
                message: 'Are you sure you want to delete the recipe?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => axios.delete(`http://localhost:5000/recipes/delete/${insID}`)
                            .then(response => {
    
                                window.location = `/`
                            })
                            .catch(error => {
                                alert(error.message);
                            })
    
                    },
                    {
                        label: 'No'
    
                    }
                ]
            });
        }catch(err){
          console.log(err)
        }
    }


    return (
        <div className="ListItemContainer">
            <div className="row">
                
                <div className="col-sm" >
                    <div className="ClickTitle" onClick={e => handleNavigate(e, props.itemId)}>
                    <div className="ilistTitle" >{props.name}</div>
                    </div>
                    <div className="btns">
                        <button className="editBut" onClick={e => handleNavigateToEdit(e, props.itemId)} >Edit</button>
						<button className="delBut" onClick={e => handleDelete(e, props.itemId)} >Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
