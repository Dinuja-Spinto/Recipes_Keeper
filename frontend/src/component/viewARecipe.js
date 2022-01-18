import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './addRecipe.css';
import axios from 'axios';
import NavBar from './NavBar/Navbar.component'

class viewARecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeName: '',
            ingredients: '',
            description: ''

        }
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

    render() {
        return (

            <div className='backStyle'>
                <NavBar></NavBar>
                <div className="newRecipe-form" >

                    <form id="newRecipe" onSubmit={this.onSubmit}>
                        <h1>Recipe</h1>
                        <br></br>
                        <div >
                        <h4>Recipe Name</h4>
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="Recipe Name"
                                name="recipeName"
                                value={this.state.recipeName}

                            />
                                                   
                        </div><br></br>

                        <div >
                        <h4>Ingredients</h4>
                            <textarea placeholder="Ingredients" className="inputText" rows="7" name="ingredients"
                                value={this.state.ingredients} ></textarea>
                                <br></br>                            
                        </div><br></br>

                        <div >
                            <h4>Description</h4>
                            <textarea placeholder="Description" className="inputText" rows="7" name="description" value={this.state.description} ></textarea>
                            <br></br>
                        </div><br></br>

                        <Link to="/">
                            <button id="CloseBut">Close</button>
                        </Link>
                    </form>
                </div>
            </div>

        )
    }
}

export default viewARecipe;