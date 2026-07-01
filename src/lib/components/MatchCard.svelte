<script>
	import { nomFrancais } from '$lib/data/paysFr';

	/** @type {{ rencontre: any }} */
	let { rencontre } = $props();

	const statutStyles = {
		'terminé': { label: 'Terminé', dot: 'bg-ink-500', text: 'text-ink-500' },
		'en cours': { label: 'En direct', dot: 'bg-grass-400 animate-pulse', text: 'text-grass-400' },
		'à venir': { label: 'À venir', dot: 'bg-gold-500', text: 'text-gold-500' },
		'annulé': { label: 'Annulé', dot: 'bg-red-500', text: 'text-red-400' }
	};

	let style = $derived(statutStyles[rencontre.statut] ?? statutStyles['à venir']);
	let aUnScore = $derived(rencontre.scoreDomicile !== null && rencontre.scoreExterieur !== null);

	let dateFormatee = $derived(
		new Date(rencontre.dateHeure).toLocaleDateString('fr-FR', {
			day: '2-digit',
			month: 'short',
			hour: '2-digit',
			minute: '2-digit'
		})
	);
</script>

<article
	class="group flex items-center gap-4 border border-pitch-700 bg-pitch-900 px-5 py-4 transition-colors hover:border-gold-500/40"
>
	<div class="flex w-24 shrink-0 flex-col gap-1 border-r border-pitch-700 pr-4">
		<span class="flex items-center gap-1.5">
			<span class="h-1.5 w-1.5 rounded-full {style.dot}"></span>
			<span class="text-stat text-[10px] font-medium uppercase tracking-wider {style.text}">
				{style.label}
			</span>
		</span>
		<span class="text-stat text-[11px] text-ink-500">{dateFormatee}</span>
	</div>

	<div class="flex flex-1 items-center justify-between gap-3">
		<span class="flex-1 truncate text-right font-body text-sm font-medium text-ink-100">
			{nomFrancais(rencontre.equipeDomicile?.codeFifa, rencontre.equipeDomicile?.nom)}
		</span>

		{#if aUnScore}
			<div class="flex shrink-0 items-center gap-2 rounded-sm bg-pitch-800 px-3 py-1.5">
				<span class="text-stat text-lg font-semibold text-ink-100">{rencontre.scoreDomicile}</span>
				<span class="text-pitch-600">–</span>
				<span class="text-stat text-lg font-semibold text-ink-100">{rencontre.scoreExterieur}</span>
			</div>
		{:else}
			<span class="text-stat shrink-0 px-3 text-xs font-medium text-ink-500">vs</span>
		{/if}

		<span class="flex-1 truncate text-left font-body text-sm font-medium text-ink-100">
			{nomFrancais(rencontre.equipeExterieur?.codeFifa, rencontre.equipeExterieur?.nom)}
		</span>
	</div>

	<span
		class="hidden w-20 shrink-0 truncate border-l border-pitch-700 pl-4 text-right font-body text-[11px] uppercase tracking-wide text-ink-500 sm:block"
	>
		{rencontre.phase}
	</span>
</article>