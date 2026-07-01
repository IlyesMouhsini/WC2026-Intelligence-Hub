<script>
	import { Menu, X, ChartNoAxesCombined } from 'lucide-svelte';

	let mobileOpen = $state(false);

	const links = [
		{ label: 'Statistiques', href: '/stats' },
		{ label: 'Pronostics', href: '/predictions' },
		{ label: 'Comparateur', href: '/compare' },
		{ label: 'Récits', href: '/storytelling' }
	];
</script>

<header class="sticky top-0 z-50 border-b border-pitch-700 bg-pitch-950/90 backdrop-blur">
	<nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center gap-2.5 group">
			<span
				class="flex h-9 w-9 items-center justify-center rounded-sm bg-gold-500 text-pitch-950 transition-transform group-hover:-rotate-3"
			>
				<ChartNoAxesCombined size={18} strokeWidth={2.5} />
			</span>
			<span class="font-display text-xl font-bold uppercase tracking-tight">
				WC26 <span class="text-gold-500">Hub</span>
			</span>
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="font-body text-sm font-medium text-ink-300 transition-colors hover:text-gold-400"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="hidden md:block">
			<a
				href="/stats"
				class="rounded-sm border border-gold-500/40 bg-gold-500/10 px-4 py-2 font-body text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-pitch-950"
			>
				Explorer les données
			</a>
		</div>

		<button
			class="text-ink-100 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Ouvrir le menu"
		>
			{#if mobileOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</nav>

	{#if mobileOpen}
		<div class="flex flex-col gap-1 border-t border-pitch-700 bg-pitch-900 px-6 py-4 md:hidden">
			{#each links as link}
				<a
					href={link.href}
					class="rounded-sm px-2 py-2.5 font-body text-sm font-medium text-ink-300 hover:bg-pitch-800 hover:text-gold-400"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</header>