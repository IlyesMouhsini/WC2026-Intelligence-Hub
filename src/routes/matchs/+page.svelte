<script>
	import { onMount } from 'svelte';
	import { getRencontres, syncRencontres } from '$lib/api/rencontres';
	import MatchCard from '$lib/components/MatchCard.svelte';
	import { Loader2, TriangleAlert, RefreshCw } from 'lucide-svelte';

	let rencontres = $state([]);
	let chargement = $state(true);
	let synchronisation = $state(false);
	let erreur = $state(null);
	let derniereMiseAJour = $state(null);

	async function chargerRencontres() {
		try {
			const data = await getRencontres();
			rencontres = [...data].sort(
				(a, b) => new Date(a.dateHeure).getTime() - new Date(b.dateHeure).getTime()
			);
			derniereMiseAJour = new Date();
		} catch (e) {
			erreur = "Impossible de charger les rencontres. Le serveur Symfony est-il démarré ?";
		} finally {
			chargement = false;
		}
	}

	async function actualiserScores() {
		synchronisation = true;
		erreur = null;
		try {
			await syncRencontres();
			await chargerRencontres();
		} catch (e) {
			erreur = "Échec de la synchronisation avec l'API externe.";
		} finally {
			synchronisation = false;
		}
	}

	onMount(chargerRencontres);

	let nbTerminees = $derived(rencontres.filter((r) => r.statut === 'terminé').length);
	let nbAVenir = $derived(rencontres.filter((r) => r.statut === 'à venir').length);
</script>

<svelte:head>
	<title>Statistiques — WC26 Hub</title>
</svelte:head>

<section class="mx-auto max-w-4xl px-6 py-16">
	<div class="flex items-center justify-between gap-4">
		<div>
			<div class="flex items-center gap-2 text-grass-400">
				<span class="text-stat text-xs font-medium uppercase tracking-widest">Données live</span>
			</div>
			<h1 class="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-ink-100 md:text-5xl">
				Toutes les rencontres
			</h1>
		</div>

		<button
			onclick={actualiserScores}
			disabled={synchronisation}
			class="flex shrink-0 items-center gap-2 rounded-sm border border-gold-500/40 bg-gold-500/10 px-4 py-2.5 font-body text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-pitch-950 disabled:cursor-not-allowed disabled:opacity-50"
		>
			<RefreshCw size={16} class={synchronisation ? 'animate-spin' : ''} />
			{synchronisation ? 'Synchronisation...' : 'Actualiser les scores'}
		</button>
	</div>

	{#if !chargement && !erreur}
		<p class="mt-3 font-body text-sm text-ink-300">
			{rencontres.length} rencontres synchronisées — {nbTerminees} terminées, {nbAVenir} à venir.
			{#if derniereMiseAJour}
				<span class="text-ink-500">
					· Dernière actualisation : {derniereMiseAJour.toLocaleTimeString('fr-FR')}
				</span>
			{/if}
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