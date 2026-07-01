<script>
	import { onMount } from 'svelte';
	import { getRencontres } from '$lib/api/rencontres';

	let rencontres = $state([]);
	let chargement = $state(true);
	let erreur = $state(null);

	onMount(async () => {
		try {
			rencontres = await getRencontres();
		} catch (e) {
			erreur = "Impossible de charger les rencontres. L'API est-elle démarrée ?";
		} finally {
			chargement = false;
		}
	});
</script>

{#if chargement}
	<p>Chargement...</p>
{:else if erreur}
	<p class="text-red-400">{erreur}</p>
{:else}
	<ul>
		{#each rencontres as rencontre}
			<li>{rencontre.equipeDomicile.nom} vs {rencontre.equipeExterieur.nom}</li>
		{/each}
	</ul>
{/if}