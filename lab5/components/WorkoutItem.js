export default {

    props: {

        workout: {
            type: Object,
            required: true
        }

    },

    emits: ["remove-workout"],

    methods: {

        removeItem() {

            this.$emit(
                "remove-workout",
                this.workout.id
            );

        }

    },

    template: `

        <div
            class="workout-item"
            :class="{ active: workout.duration >= 50 }"
        >

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
                @click="removeItem"
            >

                Видалити

            </button>

        </div>

    `

};