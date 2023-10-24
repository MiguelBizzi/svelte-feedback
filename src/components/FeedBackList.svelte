<script lang="ts">
    import { scale } from "svelte/transition";
    import Card from "./Card.svelte";
    import { feedbackStore } from "../stores";
</script>

{#each $feedbackStore as fb (fb.id)}
    <div in:scale out:scale>
        <Card {fb} />
    </div>
{/each}
