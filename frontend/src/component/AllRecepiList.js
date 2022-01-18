import React, { Component } from "react";
import "./listRecpi.css";
import Item from "./listCard";
import { Link } from "react-router-dom";
import "./listRecpi.css";
import axios from "axios";
import NavBar from './NavBar/Navbar.component'

class AllList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }



    componentDidMount() {
        axios.get('http://localhost:5000/recipes/')
            .then(response => {
                this.setState({ data: response.data.data });
                console.log(response.data.data);
            })
    }

    render() {
        return (
            <div className="ilistRecipeMain">
               <NavBar></NavBar>
                <center>
                    <br></br>
                    <div className="Header" >Recipes</div>
                    <br></br>
                    <Link to="/addRecipe">
                            <button id="AddNewBut">+ Add a Recipe</button>
                    </Link>
                </center>
                <div className="container">

                    <div className="row">
                        {this.state.data.map(data => (

                            <Item name={data.RecipeName}  key={data.id} itemId={data._id}></Item>

                        )) }
                    </div>

                </div>
                <br></br>
            </div>
        );
    }
}

export default AllList;