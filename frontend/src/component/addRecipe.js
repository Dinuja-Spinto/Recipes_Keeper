import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import './addRecipe.css';
import axios from 'axios';
import NavBar from './NavBar/Navbar.component'

const initialState = {
    recipeName: "",
    ingredients: "",
    description: ""
}

class addRecipe extends Component {
    constructor(prop) {
        super(prop);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();       
        
        let recipe = {
            RecipeName: this.state.recipeName,
            Ingredients: this.state.ingredients,
            Description: this.state.description
        }
        
        axios.post('http://localhost:5000/recipes/create', recipe)
            .then(response => {
                
                confirmAlert({
                    title: 'New Recipe Succesfully Inserted..!',
                    buttons: [
                        {
                            label: 'OK',
                            
                        }
                    ]
                });
                this.setState({
                    recipeName: '',
                    ingredients: '',
                    description: ''
                });

            })
            .catch(error => {
                
                confirmAlert({
                    title: 'Data Not Insert..!',
                    message: error.message,
                    buttons: [
                        {
                            label: 'OK',
                            
                        }
                    ]
                });
            })
    }

    render() {
        return (

            <div className='backStyle'>
                <NavBar></NavBar>
                <div className="newRecipe-form" >

                    <form id="newRecipe" onSubmit={this.onSubmit}>
                        <h1>Add New Recipe</h1>
                        <br></br>
                        <div >
                        <h4>Recipe Name</h4>
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="Recipe Name"
                                name="recipeName"
                                value={this.state.recipeName}
                                onChange={this.onChange}

                            />
                                                   
                        </div><br></br>

                        <div >
                        <h4>Ingredients</h4>
                            <textarea placeholder="Ingredients" className="inputText" rows="7" name="ingredients"
                                value={this.state.ingredients} onChange={this.onChange}></textarea>
                                <br></br>                            
                        </div><br></br>

                        <div >
                            <h4>Description</h4>
                            <textarea placeholder="Description" className="inputText" rows="7" name="description" value={this.state.description} onChange={this.onChange}></textarea>
                            <br></br>
                        </div>

                        <br></br>
                        <button type="submit" id="saveBut">Save</button>

                        <Link to="/">
                            <button id="CloseBut">Close</button>
                        </Link>
                    </form>
                </div>
            </div>

        )
    }
}

export default addRecipe;