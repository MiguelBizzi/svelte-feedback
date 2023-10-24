<script lang="ts">
    import { feedbackStore } from "../stores";
    import type { IFeedback } from "../types/IFeedback";
    export let fb: IFeedback = {} as IFeedback;

    const handleDelete = (id: string) => {
        feedbackStore.update((data) => data.filter((f) => f.id !== id));
    };
</script>

<div class="card-container">
    <div class="rating-container">
        <span>{fb.rating}</span>
    </div>
    <button class="close" on:click={() => handleDelete(fb.id)}>X</button>
    <p class="card-text">
        {fb.description}
    </p>
</div>

<style>
    .card-container {
        position: relative;
        background-color: #fff;
        border-radius: 0.5rem;
        color: #333;
        border-radius: 1rem;
        padding: 3rem 4rem;
        margin: 1.5rem 0;
    }

    .rating-container {
        position: absolute;
        top: -10px;
        left: -10px;

        width: 50px;
        height: 50px;

        background-color: #ff6a95;
        color: #fff;

        border: 1px #eee solid;
        border-radius: 50%;

        padding: 0.8rem;
        text-align: center;
        font-size: 1rem;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        color: #ff6a95;

        outline: none;
        background: none;
        border: none;
    }
</style>
