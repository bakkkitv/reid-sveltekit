<script>
	function scrollToSignup() {
		document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="hero">
	<div class="hero-badge">Early Access — Launching Soon</div>
	<h1><span class="accent">R.E.I.D</span></h1>
	<div class="hero-acronym">
		REPAIR&nbsp; ENGINE&nbsp; FOR&nbsp; IDENTIFICATION&nbsp; &&nbsp; DIAGNOSTICS
	</div>
	<p class="hero-sub">
		Text a VIN. Get the full service history. Log new work in seconds.<br />
		The first SMS-powered vehicle record system built for real mechanics.
	</p>
	<div class="hero-colors">
		<span style="background:var(--green)"></span>
		<span style="background:var(--red)"></span>
		<span style="background:var(--yellow)"></span>
		<span style="background:var(--black)"></span>
	</div>
	<button class="btn-hero" onclick={scrollToSignup}>Reserve Your Spot</button>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 120px 24px 80px;
		position: relative;
	}

	.hero::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		right: 0;
		height: 120px;
		background: linear-gradient(to bottom, transparent, var(--off-white));
		pointer-events: none;
	}

	.hero-badge {
		font-family: 'DM Mono', monospace;
		font-size: 11px;
		letter-spacing: 4px;
		text-transform: uppercase;
		color: var(--green);
		background: var(--green-glow);
		padding: 8px 20px;
		border-radius: 100px;
		margin-bottom: 32px;
		border: 1px solid rgba(27, 122, 61, 0.2);
		animation: fade-down 0.8s ease-out;
	}

	h1 {
		font-family: 'Playfair Display', serif;
		font-weight: 900;
		font-size: clamp(56px, 10vw, 120px);
		line-height: 0.9;
		letter-spacing: -3px;
		margin-bottom: 8px;
		animation: fade-down 0.8s ease-out 0.1s both;
	}

	.accent {
		background: linear-gradient(135deg, var(--green), var(--green-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-acronym {
		font-family: 'DM Mono', monospace;
		font-size: clamp(11px, 1.4vw, 15px);
		letter-spacing: 6px;
		color: var(--gray-text);
		margin-bottom: 32px;
		animation: fade-down 0.8s ease-out 0.2s both;
	}

	.hero-sub {
		font-size: clamp(16px, 2.2vw, 22px);
		color: var(--gray-text);
		max-width: 540px;
		line-height: 1.6;
		margin-bottom: 48px;
		animation: fade-down 0.8s ease-out 0.3s both;
	}

	.hero-colors {
		display: flex;
		gap: 6px;
		margin-bottom: 48px;
		animation: fade-down 0.8s ease-out 0.35s both;
	}

	.hero-colors span {
		width: 32px;
		height: 6px;
		border-radius: 3px;
	}

	.btn-hero {
		font-family: 'DM Mono', monospace;
		font-size: 15px;
		letter-spacing: 1px;
		background: var(--black);
		color: var(--off-white);
		border: none;
		padding: 14px 36px;
		border-radius: 100px;
		cursor: pointer;
		transition: all 0.3s;
		animation: fade-down 0.8s ease-out 0.4s both;
	}

	.btn-hero:hover {
		background: var(--green);
		transform: translateY(-1px);
	}

	@keyframes fade-down {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
