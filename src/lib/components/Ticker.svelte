<script>
	const stats = [
		{ label: 'ÉQUIPES QUALIFIÉES', value: '48' },
		{ label: 'PAYS HÔTES', value: '3' },
		{ label: 'VILLES HÔTES', value: '16' },
		{ label: 'MATCHS AU TOTAL', value: '104' },
		{ label: 'JOURS DE COMPÉTITION', value: '39' },
		{ label: 'COUP D\u2019ENVOI', value: '11 JUIN 2026' }
	];

	// Duplicated once so the marquee loop is seamless (translateX -50%)
	const track = [...stats, ...stats];
</script>

<div class="overflow-hidden border-b border-pitch-700 bg-pitch-900">
	<div class="marquee-track flex w-max">
		{#each track as stat}
			<div class="flex items-center gap-3 whitespace-nowrap px-8 py-2.5">
				<span class="text-stat text-sm font-medium text-gold-500">{stat.value}</span>
				<span class="text-stat text-[11px] tracking-widest text-ink-500">{stat.label}</span>
				<span class="text-pitch-600">/</span>
			</div>
		{/each}
	</div>
</div>