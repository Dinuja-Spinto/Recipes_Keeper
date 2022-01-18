const Recipe = require('../models/recipes.model');

//Add new Recipe
const createRecipe = async (req, res) => {
    if (req.body) {
        
        const recipe = new Recipe(req.body);
        await recipe.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).
            catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//get all Recipe
const getAllRecipe = async (req, res) => {
    await Recipe.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

//Delete a Recipe
const deleteRecipe = async (req, res) => {
    if (req.params && req.params.id) {
        await Recipe.findByIdAndRemove(req.params.id)
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Update a Recipe
const updateRecipe = async (req, res) => {
    if (req.params && req.params.id) {
        await Recipe.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//find a Recipe
const getARecipe = async(req,res) =>{
    if(req.params && req.params.id){
        await Recipe.findById(req.params.id)
        .then(data =>{
            res.status(200).send({data:data});
        })
        .catch(error =>{
            res.status(500).send({error:error.message});
        });
    }
}

module.exports = {
    createRecipe,
    getAllRecipe,
    deleteRecipe,
    updateRecipe,
    getARecipe
}