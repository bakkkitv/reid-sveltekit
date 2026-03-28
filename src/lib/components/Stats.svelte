<section class="stats-bar">
	<div class="stat">
		<div class="stat-num green">100%</div>
		<div class="stat-label">SMS Based</div>
	</div>
	<div class="stat">
		<div class="stat-num yellow">&lt;3s</div>
		<div class="stat-label">VIN Decode</div>
	</div>
	<div class="stat">
		<div class="stat-num red">0</div>
		<div class="stat-label">Apps to Download</div>
	</div>
</section>

<style>
	.stats-bar {
		display: flex;
		justify-content: center;
		gap: 48px;
		padding: 56px 24px;
		flex-wrap: wrap;
	}

	.stat {
		text-align: center;
	}

	.stat-num {
		font-family: 'Playfair Display', serif;
		font-weight: 800;
		font-size: clamp(32px, 5vw, 48px);
	}

	.stat-num.green {
		color: var(--green);
	}
	.stat-num.yellow {
		color: var(--yellow);
	}
	.stat-num.red {
		color: var(--red);
	}

	.stat-label {
		font-family: 'DM Mono', monospace;
		font-size: 11px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--gray-text);
		margin-top: 4px;
	}

	@media (max-width: 640px) {
		.stats-bar {
			gap: 32px;
		}
	}
</style>
