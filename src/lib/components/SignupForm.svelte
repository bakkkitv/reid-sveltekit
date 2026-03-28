<script>
	import { supabase } from '$lib/supabase/client.js';
	import { states } from '$lib/stores/states.js';

	let fullName = $state('');
	let phone = $state('');
	let shopName = $state('');
	let selectedState = $state('');
	let loading = $state(false);
	let message = $state({ type: '', text: '' });

	function formatPhone(e) {
		let v = e.target.value.replace(/\D/g, '');
		if (v.length > 10) v = v.slice(0, 10);
		if (v.length >= 7) phone = `(${v.slice(0, 3)}) ${v.slice(3, 6)}-${v.slice(6)}`;
		else if (v.length >= 4) phone = `(${v.slice(0, 3)}) ${v.slice(3)}`;
		else if (v.length > 0) phone = `(${v}`;
		else phone = '';
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const digits = phone.replace(/\D/g, '');

		if (digits.length !== 10) {
			message = { type: 'error', text: 'Please enter a valid 10-digit phone number.' };
			return;
		}

		loading = true;
		message = { type: '', text: '' };

		try {
			const { error } = await supabase.from('waitlist').insert({
				full_name: fullName.trim(),
				phone_number: digits,
				shop_name: shopName.trim() || null,
				state: selectedState
			});

			if (error) {
				if (error.code === '23505' || error.message?.includes('duplicate')) {
					message = {
						type: 'success',
						text: "This number is already on our waitlist — we'll be in touch!"
					};
				} else {
					throw error;
				}
			} else {
				message = {
					type: 'success',
					text: "You're on the list! We'll text you when R.E.I.D goes live."
				};
				fullName = '';
				phone = '';
				shopName = '';
				selectedState = '';
			}
		} catch (err) {
			message = {
				type: 'error',
				text: 'Something went wrong. Please try again or contact R.E.I.D.'
			};
			console.error('Signup error:', err);
		} finally {
			loading = false;
		}
	}
</script>

<section class="signup-section" id="signup">
	<h2 class="section-title">Get Early Access</h2>
	<p class="section-sub">
		Be one of the first mechanics on R.E.I.D. We'll text you the moment the doors open.
	</p>

	<div class="signup-box">
		<h3>Reserve Your Spot</h3>
		<form onsubmit={handleSubmit}>
			<div class="form-group">
				<label for="fullName">Full Name</label>
				<input
					type="text"
					id="fullName"
					bind:value={fullName}
					placeholder="John Smith"
					required
				/>
			</div>

			<div class="form-group">
				<label for="phone">Phone Number</label>
				<input
					type="tel"
					id="phone"
					value={phone}
					oninput={formatPhone}
					placeholder="(312) 555-0199"
					required
				/>
			</div>

			<div class="form-group">
				<label for="shopName">Shop Name</label>
				<input
					type="text"
					id="shopName"
					bind:value={shopName}
					placeholder="Quick Fix Auto"
				/>
			</div>

			<div class="form-group">
				<label for="state">State</label>
				<select id="state" bind:value={selectedState} required>
					<option value="">Select your state</option>
					{#each states as st}
						<option value={st}>{st}</option>
					{/each}
				</select>
			</div>

			<button type="submit" class="signup-btn" disabled={loading}>
				{#if loading}
					<span class="spinner"></span> Submitting...
				{:else}
					Join the Waitlist
				{/if}
			</button>

			{#if message.text}
				<div class="form-msg {message.type}">
					{message.text}
				</div>
			{/if}
		</form>
		<p class="signup-fine">No spam. One text when we launch. Contact R.E.I.D for questions.</p>
	</div>
</section>

<style>
	.signup-section {
		padding: 100px 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.section-title {
		font-family: 'Playfair Display', serif;
		font-weight: 800;
		font-size: clamp(28px, 5vw, 52px);
		margin-bottom: 12px;
	}

	.section-sub {
		font-size: 16px;
		color: var(--gray-text);
		margin-bottom: 40px;
		max-width: 460px;
	}

	.signup-box {
		background: white;
		border-radius: 24px;
		padding: 40px 36px;
		box-shadow: 0 12px 40px rgba(17, 17, 17, 0.12);
		width: 100%;
		max-width: 420px;
		border: 1px solid var(--gray-light);
	}

	.signup-box h3 {
		font-family: 'DM Mono', monospace;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--green);
		margin-bottom: 24px;
	}

	.form-group {
		margin-bottom: 16px;
		text-align: left;
	}

	.form-group label {
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		color: var(--gray-text);
		display: block;
		margin-bottom: 6px;
	}

	.form-group input,
	.form-group select {
		width: 100%;
		padding: 14px 16px;
		border: 1.5px solid var(--gray-light);
		border-radius: 12px;
		font-family: 'Instrument Sans', sans-serif;
		font-size: 15px;
		background: var(--off-white);
		color: var(--black);
		transition: all 0.2s;
		outline: none;
		-webkit-appearance: none;
	}

	.form-group input:focus,
	.form-group select:focus {
		border-color: var(--green);
		box-shadow: 0 0 0 3px var(--green-glow);
	}

	.form-group input::placeholder {
		color: #aaa5a0;
	}

	.signup-btn {
		width: 100%;
		padding: 16px;
		background: var(--green);
		color: white;
		border: none;
		border-radius: 12px;
		font-family: 'Instrument Sans', sans-serif;
		font-weight: 700;
		font-size: 16px;
		cursor: pointer;
		transition: all 0.3s;
		margin-top: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.signup-btn:hover:not(:disabled) {
		background: var(--green-light);
		transform: translateY(-1px);
		box-shadow: 0 8px 24px rgba(27, 122, 61, 0.3);
	}

	.signup-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.spinner {
		display: inline-block;
		width: 18px;
		height: 18px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-top-color: white;
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.form-msg {
		margin-top: 16px;
		padding: 12px 16px;
		border-radius: 10px;
		font-size: 13px;
		text-align: center;
	}

	.form-msg.success {
		background: var(--green-glow);
		color: var(--green);
		border: 1px solid rgba(27, 122, 61, 0.2);
	}

	.form-msg.error {
		background: rgba(198, 40, 40, 0.08);
		color: var(--red);
		border: 1px solid rgba(198, 40, 40, 0.15);
	}

	.signup-fine {
		font-size: 11px;
		color: var(--gray-text);
		margin-top: 16px;
	}

	@media (max-width: 640px) {
		.signup-box {
			padding: 28px 22px;
		}
	}
</style>
