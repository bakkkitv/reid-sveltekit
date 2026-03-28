<script>
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Instrument+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<style>
	:global(:root) {
		--off-white: #f5f0eb;
		--off-white-warm: #ede8e1;
		--black: #111111;
		--green: #1b7a3d;
		--green-light: #2ca05a;
		--green-glow: rgba(27, 122, 61, 0.15);
		--red: #c62828;
		--red-light: #e53935;
		--yellow: #f9a825;
		--yellow-light: #fbc02d;
		--yellow-glow: rgba(249, 168, 37, 0.12);
		--gray-text: #6b6560;
		--gray-light: #d5d0ca;
		--shadow-sm: 0 1px 3px rgba(17, 17, 17, 0.06);
		--shadow-md: 0 4px 20px rgba(17, 17, 17, 0.08);
		--shadow-lg: 0 12px 40px rgba(17, 17, 17, 0.12);
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background: var(--off-white);
		color: var(--black);
		font-family: 'Instrument Sans', sans-serif;
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;
	}

	/* Noise texture overlay */
	:global(body::before) {
		content: '';
		position: fixed;
		inset: 0;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
		pointer-events: none;
		z-index: 9999;
	}
</style>
