var mealBook = {
    Side:  [
        'Miso Glazed Carrots',
        'Coleslaw',
        'Garden Salad',
        'Crispy Potatoes',
        'Sweet Potato Tots',
        'Coconut Rice',
        'Caeser Salad',
        'Shrimp Summer Rolls',
        'Garlic Butter Mushrooms',
        'Hush Puppies',
    ],
    
    Main : [
        'Spaghetti and Meatballs',
        'Pineapple Chicken',
        'Shakshuka',
        'Thai Yellow Curry',
        'Bibimbap',
        'Chicken Parmesean',
        'Butternut Squash Soup',
        'BBQ Chicken Burgers',
        'Ramen',
        'Empanadas',
        'Chicken Fried Rice',
        'Sheet Pan Fajitas',
        'Margarita Pizza',
    ],
    
    Dessert: [
        'Apple Pie',
        'Lemon Meringue Pie',
        'Black Forest Cake',
        'Banana Bread',
        'Peach Cobbler',
        'Cheesecake',
        'Funfetti Cake',
        'Baklava',
        'Flan',
        'Macarons',
        'Macaroons',
        'Chocolate Cupcakes',
        'Pavlova',
        'Pumpkin Pie',
        'Key Lime Pie',
        'Tart Tatin',
        'Croissants',
        'Eclairs',
    ]
}
// Variables with query selectors
var selectedValue = document.getElementById('meal');
var imageBox = document.getElementById('mealbox');
var recipeBox = document.querySelector('.Recipe')
var cookImage = document.getElementById('cookpot');
var currentRecipeType;
var currentMealIndex;
var deleteButton = document.querySelector('.remove');

//Event listeners for button clicks/submits
deleteButton.addEventListener('click', function(event){
   deleteRecipe(event);})


selectedValue.addEventListener('submit', function(event){
    printSelection(event);});

//Event handlers    
function printSelection(event){
    event.preventDefault();
    if(document.querySelector('input[name="Meals"]:checked')){
        var selectedOption = document.querySelector('input[name="Meals"]:checked').value;
        currentRecipeType = chooseArray(selectedOption);
        currentMealIndex = Math.floor(Math.random() * mealBook[currentRecipeType].length);
        hide(cookImage);
        show(deleteButton);
        recipeBox.innerHTML = 
        `<article class="mealchoice">
            <em>You should make:</em>
            <h2>${mealBook[currentRecipeType][currentMealIndex]} !</h2>
        </article>`;
        show(recipeBox);
    
    }
};

function deleteRecipe(event){
    console.log("TEST");
    event.preventDefault();
    mealBook[currentRecipeType].splice([currentMealIndex],1);
    if(mealBook[currentRecipeType].length === 0){
        recipeBox.innerHTML = `<h2>No more meals to remove!</h2>`
        return;
    }
    printSelection((event));
}

//Functionality
function clearButton(){
    hide(recipeBox);
    show(cookImage);
}

function chooseArray(selectedMeal){
    if(selectedMeal === 'Side'){
        return 'Side';
    }
    else if(selectedMeal === 'Dessert'){
        return 'Dessert';
    }
    else{
        return 'Main';
    }
}

function hide(element){
    element.classList.add('hidden');
}

function show(element){
    element.classList.remove('hidden');
}
       
