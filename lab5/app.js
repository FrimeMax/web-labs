const WorkoutItem = {

    props: ["workout"],

    emits: ["remove-workout"],

    template: `

        <div class="workout-item">

            <div class="workout-info">

                <h3>
                    {{ workout.title }}
                </h3>

                <p>
                    Тривалість:
                    {{ workout.duration }} хв
                </p>

            </div>

            <button
                class="delete-btn"
                @click="$emit('remove-workout', workout.id)"
            >

                Видалити

            </button>

        </div>

    `

};

const app = Vue.createApp({

    components: {

        WorkoutItem

    },

    data() {

        return {

            workouts: [

                {
                    id: 1,
                    title: "Кардіо",
                    duration: 40
                },

                {
                    id: 2,
                    title: "Йога",
                    duration: 50
                }

            ],

            newWorkout: {

                title: "",
                duration: ""

            }

        };

    },

    computed: {

        totalDuration() {

            return this.workouts.reduce(

                (sum, workout) =>

                    sum + Number(workout.duration),

                0

            );

        }

    },

    methods: {

        addWorkout() {

            if (

                this.newWorkout.title.trim() === "" ||
                this.newWorkout.duration <= 0

            ) {

                return;

            }

            this.workouts.push({

                id: Date.now(),

                title: this.newWorkout.title,

                duration: Number(
                    this.newWorkout.duration
                )

            });

            this.newWorkout.title = "";
            this.newWorkout.duration = "";

        },

        removeWorkout(id) {

            this.workouts = this.workouts.filter(

                workout => workout.id !== id

            );

        }

    }

});

app.mount("#app");