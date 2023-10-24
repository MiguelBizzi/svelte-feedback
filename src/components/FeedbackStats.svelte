<script lang="ts">
    import { feedbackStore } from "../stores";

    $: count = $feedbackStore.length;
    $: average =
        $feedbackStore.reduce((a, { rating }) => a + rating, 0) / count;
</script>

<div class="feedback-stats">
    <h4>{count} Avaliações</h4>
    <h4>Média de nota de avaliações: {average ? average.toFixed(1) : 0}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;
    }
</style>
