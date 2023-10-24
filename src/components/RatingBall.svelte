<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let isSelected: boolean;
    export let rating: number;

    const dispatch = createEventDispatcher();

    const handleChangeRating = () => {
        dispatch("changeRating", rating);
    };
</script>

<button
    class={`rating-ball ${isSelected ? "selected" : ""}`}
    on:click={handleChangeRating}
>
    {rating}
</button>

<style>
    .rating-ball {
        position: relative;
        background-color: #f4f4f4;
        width: 50px;
        height: 50px;

        padding: 0.8rem;

        text-align: center;
        border-radius: 50%;
        font-size: 1.2rem;

        border: none;
        border: 1px solid #eee;
        transition: 0.3s;

        color: #000;
        cursor: pointer;
    }

    .rating-ball.selected {
        background-color: #ff6a95;
        color: #fff;
    }

    .rating-ball:hover {
        background-color: #ff6a95;
        color: #fff;
    }
</style>
