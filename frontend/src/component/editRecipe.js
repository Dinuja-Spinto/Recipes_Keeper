import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import './addRecipe.css';
import axios from 'axios';
import NavBar from './NavBar/Navbar.component'

class editRecipe extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            recipeName: '',
            ingredients: '',
            description: ''

        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/recipes/a/${this.props.match.params.id}`)
            .then(response => {
                
                this.setState({
                    id: response.data.data._id,
                    recipeName: response.data.data.RecipeName,
                    ingredients: response.data.data.Ingredients,
                    description: response.data.data.Description
                });
                console.log(response.data.data._id);
                console.log(this.props.match.params.id);
            })
            .catch(error => {
                alert(error.message)
            })

    }

    onSubmit(e) {
        e.preventDefault();
        let Recipe = {
            _id:this.state.id,
            RecipeName: this.state.recipeName,
            Ingredients: this.state.ingredients,
            Description:this.state.description
        }
        console.log(Recipe);
        axios.put(`http://localhost:5000/recipes/update/${this.state.id}`, Recipe)
        .then(response =>{
            
            confirmAlert({
                title: 'Changes Saved..!',
                buttons: [
                    {
                        label: 'OK',
                        onClick: () => window.location = `/`
                        
                    }
                ]
            });
            console.log(this.state.id);
            
        })
        .catch(error =>{
            console.log(error.message);
            //alert(error.message);
            confirmAlert({
                title: 'Data Not Updated..!',
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
                        <h1>Edit Recipe</h1>
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

export default editRecipe;