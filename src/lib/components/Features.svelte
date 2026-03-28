<script>
	const features = [
		{
			icon: '📲',
			title: 'SMS-First, No App Needed',
			desc: "Works on any phone with texting. No downloads, no accounts to juggle. Just text a VIN and get results instantly."
		},
		{
			icon: '🔍',
			title: 'Instant VIN Lookup',
			desc: 'Decode any VIN in seconds. Get year, make, model, and the complete service history across all shops using R.E.I.D.'
		},
		{
			icon: '📸',
			title: 'Photo VIN Scanning',
			desc: "Can't type the VIN? Snap a photo and text it. Our OCR reads VIN plates, stickers, and dashboards automatically."
		},
		{
			icon: '🔐',
			title: 'Verified Mechanic Network',
			desc: 'Upload your license to unlock cross-shop history. Verified mechanics see records from every shop in the network.'
		}
	];
</script>

<section class="features">
	<h2 class="section-title">Why Mechanics Choose R.E.I.D</h2>
	<div class="features-grid">
		{#each features as feature, i}
			<div class="feature-card" style="--idx: {i}">
				<div class="feature-icon">{feature.icon}</div>
				<h3>{feature.title}</h3>
				<p>{feature.desc}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.features {
		padding: 80px 24px;
		max-width: 1100px;
		margin: 0 auto;
	}

	.section-title {
		font-family: 'Playfair Display', serif;
		font-weight: 800;
		font-size: clamp(28px, 4vw, 44px);
		text-align: center;
		margin-bottom: 56px;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 24px;
	}

	.feature-card {
		background: white;
		border-radius: 16px;
		padding: 32px 28px;
		border: 1px solid var(--gray-light);
		transition: all 0.3s;
		position: relative;
		overflow: hidden;
	}

	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 20px rgba(17, 17, 17, 0.08);
		border-color: transparent;
	}

	.feature-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
	}

	.feature-card:nth-child(1)::before {
		background: var(--green);
	}
	.feature-card:nth-child(2)::before {
		background: var(--yellow);
	}
	.feature-card:nth-child(3)::before {
		background: var(--red);
	}
	.feature-card:nth-child(4)::before {
		background: var(--black);
	}

	.feature-icon {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 22px;
		margin-bottom: 20px;
	}

	.feature-card:nth-child(1) .feature-icon {
		background: var(--green-glow);
	}
	.feature-card:nth-child(2) .feature-icon {
		background: rgba(249, 168, 37, 0.12);
	}
	.feature-card:nth-child(3) .feature-icon {
		background: rgba(198, 40, 40, 0.1);
	}
	.feature-card:nth-child(4) .feature-icon {
		background: rgba(17, 17, 17, 0.06);
	}

	h3 {
		font-weight: 700;
		font-size: 18px;
		margin-bottom: 10px;
	}

	p {
		font-size: 14px;
		line-height: 1.6;
		color: var(--gray-text);
	}

	@media (max-width: 640px) {
		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
