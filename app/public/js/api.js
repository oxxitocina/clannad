document.getElementById("btn").onclick = myFunction;

function myFunction(){
    var query = document.getElementById("food").value;
    $.ajax({
        method: 'GET',
        url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': 'lQSTshaW5XSVv0CIXrfUB8UgAj9FjtyOZgHQ9Puy'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            var calories = result.items[0].calories;   
            $('calories').append(calories);   
            document.getElementById('calories').innerHTML = "Калории-" + calories;

            var carbs = result.items[0].carbohydrates_total_g;   
            $('carbs').append(carbs);   
            document.getElementById('carbs').innerHTML = "Углеводы-" + carbs;

            var proteins = result.items[0].protein_g;   
            $('proteins').append(proteins);   
            document.getElementById('proteins').innerHTML = "Белки-" + proteins;

            var fats = result.items[0].fat_total_g;   
            $('fats').append(fats);   
            document.getElementById('fats').innerHTML = "Жиры-" + fats;

        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    
}