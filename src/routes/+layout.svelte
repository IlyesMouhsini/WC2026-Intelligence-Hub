<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Ticker from '$lib/components/Ticker.svelte';

	let { children } = $props();
</script>

<Navbar />
<!-- <Ticker />-->

<main>
	{@render children()}
</main>