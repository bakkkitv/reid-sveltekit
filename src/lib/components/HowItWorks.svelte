<script>
	const steps = [
		{
			num: '1',
			title: 'Sign Up With Your Phone',
			desc: 'Enter your number below. We text you when early access opens. Build your profile in one message — name, shop, city.'
		},
		{
			num: '2',
			title: 'Text Any VIN to R.E.I.D',
			desc: 'Send a 17-character VIN or snap a photo. We decode it instantly and pull up any service records on file from across the network.'
		},
		{
			num: '3',
			title: 'Log Work in Plain English',
			desc: 'Text "ADD oil change, rotated tires, 45k miles" and we parse everything — work, notes, mileage — saved to that VIN.'
		},
		{
			num: '4',
			title: 'Verify & Unlock Full Access',
			desc: 'Upload your mechanic license photo to get verified. Verified mechanics see complete cross-shop histories for every vehicle.'
		}
	];
</script>

<section class="how-section">
	<h2 class="section-title">How It Works</h2>
	<div class="how-steps">
		{#each steps as step, i}
			<div class="how-step">
				<div class="how-step-num step-{i}">{step.num}</div>
				<div>
					<h3>{step.title}</h3>
					<p>{step.desc}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.how-section {
		padding: 80px 24px;
		background: var(--black);
		color: var(--off-white);
		position: relative;
		overflow: hidden;
	}

	.how-section::before {
		content: '';
		position: absolute;
		top: -200px;
		right: -200px;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(27, 122, 61, 0.12) 0%, transparent 70%);
		pointer-events: none;
	}

	.how-section::after {
		content: '';
		position: absolute;
		bottom: -150px;
		left: -150px;
		width: 400px;
		height: 400px;
		background: radial-gradient(circle, rgba(249, 168, 37, 0.08) 0%, transparent 70%);
		pointer-events: none;
	}

	.section-title {
		font-family: 'Playfair Display', serif;
		font-weight: 800;
		font-size: clamp(28px, 4vw, 44px);
		text-align: center;
		margin-bottom: 56px;
		color: var(--off-white);
	}

	.how-steps {
		max-width: 720px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.how-step {
		display: flex;
		gap: 28px;
		align-items: flex-start;
		padding: 32px 0;
		position: relative;
	}

	.how-step::before {
		content: '';
		position: absolute;
		left: 23px;
		top: 68px;
		bottom: -32px;
		width: 2px;
		background: rgba(255, 255, 255, 0.07);
	}

	.how-step:last-child::before {
		display: none;
	}

	.how-step-num {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'DM Mono', monospace;
		font-weight: 600;
		font-size: 16px;
		flex-shrink: 0;
	}

	.step-0 {
		background: var(--green);
		color: white;
	}
	.step-1 {
		background: var(--yellow);
		color: var(--black);
	}
	.step-2 {
		background: var(--red);
		color: white;
	}
	.step-3 {
		background: white;
		color: var(--black);
	}

	h3 {
		font-weight: 700;
		font-size: 20px;
		margin-bottom: 8px;
	}

	p {
		font-size: 14px;
		line-height: 1.6;
		color: rgba(245, 240, 235, 0.55);
	}

	@media (max-width: 640px) {
		.how-step {
			gap: 18px;
		}
	}
</style>
