<script>
	import { ArrowRight, Radio } from 'lucide-svelte';

	const highlights = [
		{ value: '48', label: 'Équipes', detail: 'Format élargi, une première' },
		{ value: '3', label: 'Pays hôtes', detail: 'États-Unis, Mexique, Canada' },
		{ value: '104', label: 'Matchs', detail: 'De la phase de groupes à la finale' }
	];
</script>

<section class="relative overflow-hidden bg-pitch-950">
	<div class="absolute inset-0 bg-pitch-lines" aria-hidden="true"></div>

	<!-- Image + halo : positionnés en absolu, indépendants de la largeur du texte -->
	<div
		class="pointer-events-none absolute inset-y-0 right-60 bottom-20 hidden w-[55%] items-center justify-end lg:flex"
		aria-hidden="true"
	>
		<div class="relative flex h-full items-center justify-center">
			<div
				class="absolute h-[520px] w-[520px] rounded-full bg-gold-500/30 blur-[100px]"
			></div>
			<img
				src="/images/Mbappe_svg.png"
				alt="Kylian Mbappé"
				class="relative z-10 h-auto max-h-[100%] w-auto select-none object-contain drop-shadow-[0_0_45px_rgba(201,162,39,0.35)]"
			/>
		</div>
	</div>

	<div class="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
		<div class="max-w-xl lg:max-w-lg xl:max-w-xl">
			<div class="flex items-center gap-2 text-grass-400">
				<Radio size={16} />
				<span class="text-stat text-xs font-medium uppercase tracking-widest">
					Données mises à jour en continu
				</span>
			</div>

			<h1 class="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
				48 équipes.
				<span class="text-gold-500">3 pays hôtes.</span>
				<br />
				1 seul champion.
			</h1>

			<p class="mt-6 font-body text-base text-ink-300 md:text-lg">
				WC26 Hub rassemble statistiques, pronostics et comparaisons pour suivre chaque
				équipe, chaque joueur et chaque match de la Coupe du Monde 2026 du premier
				coup d'envoi à la finale.
			</p>

			<div class="mt-9 flex flex-wrap items-center gap-4">
				<a
					href="/matchs"
					class="flex items-center gap-2 rounded-sm bg-gold-500 px-6 py-3 font-body text-sm font-semibold text-pitch-950 transition-colors hover:bg-gold-400"
				>
					Voir les matchs
					<ArrowRight size={16} />
				</a>
				<a
					href="/predictions"
					class="rounded-sm border border-pitch-600 px-6 py-3 font-body text-sm font-semibold text-ink-100 transition-colors hover:border-gold-500/50 hover:text-gold-400"
				>
					Faire mes pronostics
				</a>
			</div>
		</div>

		<div class="relative z-10 mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-pitch-700 bg-pitch-700 sm:grid-cols-3">
			{#each highlights as h}
				<div class="bg-pitch-900 px-6 py-6">
					<div class="text-stat text-4xl font-semibold text-gold-500">{h.value}</div>
					<div class="mt-1 font-body text-sm font-medium text-ink-100">{h.label}</div>
					<div class="mt-0.5 font-body text-xs text-ink-500">{h.detail}</div>
				</div>
			{/each}
		</div>
	</div>
</section>