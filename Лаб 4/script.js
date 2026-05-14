document.addEventListener("DOMContentLoaded", () => {

    const exerciseSelect = document.getElementById("exercise");

    const minutesInput = document.getElementById("minutes");

    const calculateBtn = document.getElementById("calculate-btn");

    const caloriesResult = document.getElementById("calories-result");

    const minutesError = document.getElementById("minutes-error");

    const workoutCountElement = document.getElementById("workout-count");

    const addWorkoutBtn = document.getElementById("add-workout");

    const resetWorkoutBtn = document.getElementById("reset-workouts");

    let workoutCount = localStorage.getItem("workoutCount") || 0;

    workoutCountElement.textContent = workoutCount;

    function calculateCalories(){

        const caloriesPerHour = Number(exerciseSelect.value);

        const minutes = Number(minutesInput.value);

        if(minutes <= 0 || isNaN(minutes)){

            minutesError.textContent =
                "Введіть коректну кількість хвилин";

            caloriesResult.textContent = "0";

            return;

        }

        minutesError.textContent = "";

        const burnedCalories =
            Math.round((caloriesPerHour / 60) * minutes);

        caloriesResult.textContent = burnedCalories;

    }

    calculateBtn.addEventListener("click", calculateCalories);

    exerciseSelect.addEventListener("change", calculateCalories);

    addWorkoutBtn.addEventListener("click", () => {

        workoutCount++;

        workoutCountElement.textContent = workoutCount;

        localStorage.setItem(
            "workoutCount",
            workoutCount
        );

    });

    resetWorkoutBtn.addEventListener("click", () => {

        workoutCount = 0;

        workoutCountElement.textContent = workoutCount;

        localStorage.setItem(
            "workoutCount",
            workoutCount
        );

    });

});