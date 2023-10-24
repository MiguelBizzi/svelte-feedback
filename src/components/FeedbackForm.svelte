<script lang="ts">
    import { v4 as uuidv4 } from "uuid";
    import type { IFeedback } from "../types/IFeedback";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    import { feedbackStore } from "../stores";

    let text: string = "";
    let rating: number = 10;
    let isButtonDisabled: boolean = true;
    let minLength: number = 10;
    let message: string | null = "";

    const handleInput = () => {
        if (text.trim().length <= minLength) {
            message = `Avaliação deve ter pelo menos ${minLength} caracteres!`;
            isButtonDisabled = true;
        } else {
            message = null;
            isButtonDisabled = false;
        }
    };

    const handleRatingSelect = (e: CustomEvent<number>) => {
        rating = e.detail;
    };

    const handleSubmit = () => {
        const newFeedback: IFeedback = {
            id: uuidv4(),
            rating,
            description: text,
        };

        feedbackStore.update((data) => (data = [newFeedback, ...data]));
        text = "";
    };
</script>

<div class="form-container">
    <header>
        <h2>Como você avaliaria o seu serviço com a gente?</h2>
    </header>
    <RatingSelect on:rating-select={handleRatingSelect} />
    <form on:submit|preventDefault={handleSubmit}>
        <div class="input-group">
            <input
                type="text"
                on:input={handleInput}
                bind:value={text}
                placeholder="Escreva sua avaliação"
            />
            <Button type="submit" disabled={isButtonDisabled}>Send</Button>
        </div>
        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</div>

<style>
    .form-container {
        background-color: #fff;
        border-radius: 0.5rem;
        padding: 2rem 2rem;
    }

    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 1.6rem;
        font-weight: 700;
        text-align: center;
        color: #202142;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 0.5rem 0.8rem;

        border-radius: 0.5rem;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 1rem;
    }

    input:focus {
        outline: none;
    }

    .message {
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>
