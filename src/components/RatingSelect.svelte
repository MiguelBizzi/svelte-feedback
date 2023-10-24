<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import RatingBall from "./RatingBall.svelte";

    let ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let selected = 10;

    const dispatch = createEventDispatcher();

    const handleChange = (e: CustomEvent<number>) => {
        selected = e.detail;
        dispatch("rating-select", selected);
    };
</script>

<div class="ratings">
    {#each ratings as rating}
        <RatingBall
            {rating}
            isSelected={selected == rating}
            on:changeRating={handleChange}
        />
    {/each}
</div>

<style>
    .ratings {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 30px 0;
    }
</style>
