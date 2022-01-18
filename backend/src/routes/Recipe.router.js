const express = require('express');
const router = express.Router();
const Recipecontroller = require('../controllers/Recipes.controller');

module.exports = function(){
    router.post('/create', Recipecontroller.createRecipe);
    router.get('/', Recipecontroller.getAllRecipe);
    router.delete('/delete/:id',Recipecontroller.deleteRecipe);
    router.put('/update/:id',Recipecontroller.updateRecipe);
    router.get('/a/:id', Recipecontroller.getARecipe);
    return router;
}
