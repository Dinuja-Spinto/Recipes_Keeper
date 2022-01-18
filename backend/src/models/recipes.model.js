const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    RecipeName:{type:String,required:true,trim:true},
    Ingredients:{type:String,required:true,trim:true},
    Description:{type:String,required:true,trim:true}
});

const Recipe = mongoose.model('Recipes',RecipeSchema);
module.exports = Recipe;