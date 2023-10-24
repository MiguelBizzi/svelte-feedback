<script lang="ts">
    export let style: "primary" | "secondary" = "primary";
    export let type: "button" | "submit" | "reset" | null | undefined =
        "button";
    export let disabled: boolean = false;
</script>

<button {type} {disabled} class={style}>
    <slot />
</button>

<style>
    button {
        color: #fff;
        border: 0;
        border-radius: 0.5rem;

        width: 100px;
        height: 40px;
        cursor: pointer;
    }

    .primary {
        background-color: #202142;
    }

    .secondary {
        background-color: #ff6a95;
    }

    button:hover {
        transform: scale(0.98);
        opacity: 0.9;
    }

    button:disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }

    button:disabled:hover {
        transform: scale(1);
        opacity: 0.8;
        cursor: not-allowed;
    }
</style>
