<script>
	function scrollToSignup() {
		document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<nav class="topbar">
	<div class="topbar-logo">
		<span class="dot"></span>
		R.E.I.D
	</div>
	<button class="btn-pill" onclick={scrollToSignup}>
		Get Early Access
	</button>
</nav>

<style>
	.topbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 16px 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		backdrop-filter: blur(20px);
		background: rgba(245, 240, 235, 0.85);
		border-bottom: 1px solid var(--gray-light);
	}

	.topbar-logo {
		font-family: 'DM Mono', monospace;
		font-weight: 500;
		font-size: 18px;
		letter-spacing: 3px;
		color: var(--black);
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--green);
		animation: pulse-dot 2s ease-in-out infinite;
	}

	@keyframes pulse-dot {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.3);
		}
	}

	.btn-pill {
		font-family: 'DM Mono', monospace;
		font-size: 13px;
		letter-spacing: 1px;
		background: var(--black);
		color: var(--off-white);
		border: none;
		padding: 10px 24px;
		border-radius: 100px;
		cursor: pointer;
		transition: all 0.3s;
	}

	.btn-pill:hover {
		background: var(--green);
		transform: translateY(-1px);
	}

	@media (max-width: 640px) {
		.topbar {
			padding: 12px 18px;
		}
	}
</style>
