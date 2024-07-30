document.getElementById('mealPlanButton').addEventListener('click', function() {
    var mealPlanDiv = document.getElementById('mealPlan');
    if (mealPlanDiv.style.display === 'none') {
        mealPlanDiv.style.display = 'block';
        this.textContent = 'Hide Yearly Plan';
    } else {
        mealPlanDiv.style.display = 'none';
        this.textContent = 'Show Yearly Plan';
    }
});
