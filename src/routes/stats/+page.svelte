<script>
	import { onMount } from 'svelte';
	import { getRencontres } from '$lib/api/rencontres';
	import MatchCard from '$lib/components/MatchCard.svelte';
	import { Loader2, TriangleAlert } from 'lucide-svelte';

	let rencontres = $state([]);
	let chargement = $state(true);
	let erreur = $state(null);

	onMount(async () => {
		try {
			const data = await getRencontres();
			rencontres = [...data].sort(
				(a, b) => new Date(a.dateHeure).getTime() - new Date(b.dateHeure).getTime()
			);
		} catch (e) {
			erreur = "Impossible de charger les rencontres. Le serveur Symfony est-il démarré ?";
		} finally {
			chargement = false;
		}
	});

	let nbTerminees = $derived(rencontres.filter((r) => r.statut === 'terminé').length);
	let nbAVenir = $derived(rencontres.filter((r) => r.statut === 'à venir').length);
</script>

<svelte:head>
	<title>Statistiques — WC26 Hub</title>
</svelte:head>

<section class="mx-auto max-w-4xl px-6 py-16">
	<div class="flex items-center gap-2 text-grass-400">
		<span class="text-stat text-xs font-medium uppercase tracking-widest">Données live</span>
	</div>
	<h1 class="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-ink-100 md:text-5xl">
		Toutes les rencontres
	</h1>

	{#if !chargement && !erreur}
		<p class="mt-3 font-body text-sm text-ink-300">
			{rencontres.length} rencontres synchronisées — {nbTerminees} terminées, {nbAVenir} à venir.
		</p>
	{/if}

	<div class="mt-10 flex flex-col gap-2">
		{#if chargement}
			<div class="flex items-center gap-2 py-12 text-ink-500">
				<Loader2 size={16} class="animate-spin" />
				<span class="font-body text-sm">Chargement des rencontres...</span>
			</div>
		{:else if erreur}
			<div class="flex items-center gap-2 border border-red-900/50 bg-red-950/20 px-4 py-3 text-red-400">
				<TriangleAlert size={16} />
				<span class="font-body text-sm">{erreur}</span>
			</div>
		{:else}
			{#each rencontres as rencontre (rencontre.id)}
				<MatchCard {rencontre} />
			{/each}
		{/if}
	</div>
</section>