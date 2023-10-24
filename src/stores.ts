import { writable, type Writable } from "svelte/store";
import type { IFeedback } from "./types/IFeedback";

export const feedbackStore: Writable<IFeedback[]> = writable([]);
