<svelte:head>
	<title>Privacy Policy — R.E.I.D</title>
</svelte:head>

<div class="page-wrap">
	<nav class="topbar">
		<a href="/" class="topbar-logo">
			<span class="dot"></span>
			R.E.I.D
		</a>
	</nav>

	<main>
		<div class="header">
			<p class="label">Legal</p>
			<h1>Privacy Policy</h1>
			<p class="meta">R.E.I.D — Vehicle Service Record System &nbsp;·&nbsp; Last updated: March 25, 2026</p>
		</div>

		<div class="content">

			<section>
				<h2>What is R.E.I.D?</h2>
				<p>
					Look, I built this because I was tired of customers coming in with a car nobody could pull history on. R.E.I.D is a text-based tool — you text a VIN, you get service history. That's it. No app, no login, no nonsense. You can text the number, snap a photo of the VIN plate if you can't read it, and it'll pull up what we've got. We run this thing ourselves — "we," "us," or "our" means R.E.I.D.
				</p>
			</section>

			<section>
				<h2>What We Collect</h2>
				<p>
					When you text us, we log your phone number, the messages you send (VINs, service notes, mileage, photos — whatever you send in), and when you sent them. If you log a repair, we keep that record too: the work done, mileage at the time, parts used. Nothing weird, just what's needed to run the system.
				</p>
			</section>

			<section>
				<h2>How We Use It</h2>
				<p>
					Only thing we use your info for is running R.E.I.D. Pulling up vehicle history, storing records you submit, decoding VINs, checking recalls, verifying mechanic accounts, and answering what you text in. That's the whole list. We're not running ads or selling data — we're running a shop tool.
				</p>
			</section>

			<section>
				<h2>Who Sees Your Info</h2>
				<p>
					We don't sell your info. We don't rent it. We don't hand it to marketers. The whole point of R.E.I.D is a shared service history — so yes, if another verified mechanic looks up the same VIN, they'll see records tied to that vehicle. That's by design. But your phone number? That stays with us. Other users never see it.
				</p>
			</section>

			<section>
				<h2>Security</h2>
				<p>
					We store everything on secure cloud infrastructure with standard encryption. We're not a bank, but we take this seriously. Unauthorized access, tampering, or leaks are things we actively work to prevent.
				</p>
			</section>

			<section>
				<h2>How Long We Keep It</h2>
				<p>
					We keep your account info as long as you're using R.E.I.D. Vehicle records we keep indefinitely — a car's history doesn't expire just because you stopped using the tool. If you want your personal data deleted, email us at the address below and we'll sort it out.
				</p>
			</section>

			<section>
				<h2>Your Options</h2>
				<p>
					Text <strong>STOP</strong> to opt out of everything. Text <strong>HELP</strong> if you need a hand. We don't send unsolicited messages — every text starts with you. Standard message and data rates from your carrier may apply.
				</p>
			</section>

			<section>
				<h2>Kids</h2>
				<p>
					This is a professional tool for mechanics. It's not for anyone under 13. We don't collect info from kids and if we somehow did, we'd delete it immediately.
				</p>
			</section>

			<section>
				<h2>Updates to This Policy</h2>
				<p>
					If something changes, we'll update this page and the date at the top. We're not trying to bury anything — if it changes, you'll see it here.
				</p>
			</section>

			<section>
				<h2>Questions?</h2>
				<p>
					Got a question about your data or something doesn't look right? Reach out directly.
				</p>
				<p class="contact">
					Email: <a href="mailto:presalestickets@gmail.com">presalestickets@gmail.com</a>
				</p>
				<p class="contact-sub">— R.E.I.D</p>
			</section>

		</div>
	</main>

	<footer>
		<div class="footer-brand">R.E.I.D</div>
		<div class="footer-colors">
			<span style="background:var(--green)"></span>
			<span style="background:var(--red)"></span>
			<span style="background:var(--yellow)"></span>
			<span style="background:rgba(245,240,235,0.3)"></span>
		</div>
		<p>&copy; 2026 Repair Engine for Identification & Diagnostics</p>
		<p class="fine"><a href="/">← Back to home</a></p>
	</footer>
</div>

<style>
	.page-wrap {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	/* Topbar */
	.topbar {
		position: sticky;
		top: 0;
		z-index: 100;
		padding: 16px 32px;
		display: flex;
		align-items: center;
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
		text-decoration: none;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--green);
		animation: pulse-dot 2s ease-in-out infinite;
	}

	@keyframes pulse-dot {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.5; transform: scale(1.3); }
	}

	/* Main content */
	main {
		flex: 1;
		max-width: 720px;
		margin: 0 auto;
		padding: 80px 24px 100px;
		width: 100%;
	}

	.header {
		margin-bottom: 64px;
		border-bottom: 1px solid var(--gray-light);
		padding-bottom: 40px;
	}

	.label {
		font-family: 'DM Mono', monospace;
		font-size: 12px;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--green);
		margin-bottom: 12px;
	}

	h1 {
		font-family: 'Playfair Display', serif;
		font-weight: 800;
		font-size: clamp(32px, 6vw, 56px);
		line-height: 1.1;
		margin-bottom: 16px;
	}

	.meta {
		font-family: 'DM Mono', monospace;
		font-size: 12px;
		color: var(--gray-text);
		letter-spacing: 0.5px;
	}

	/* Sections */
	.content {
		display: flex;
		flex-direction: column;
		gap: 48px;
	}

	section {
		position: relative;
		padding-left: 20px;
		border-left: 2px solid var(--gray-light);
		transition: border-color 0.2s;
	}

	section:hover {
		border-left-color: var(--green);
	}

	h2 {
		font-family: 'DM Mono', monospace;
		font-size: 13px;
		font-weight: 500;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--black);
		margin-bottom: 14px;
	}

	p {
		font-size: 15px;
		line-height: 1.75;
		color: var(--gray-text);
	}

	strong {
		color: var(--black);
		font-weight: 700;
	}

	.contact {
		margin-top: 12px;
		font-family: 'DM Mono', monospace;
		font-size: 13px;
		letter-spacing: 0.5px;
	}

	.contact a {
		color: var(--green);
		text-decoration: none;
		border-bottom: 1px solid var(--green-glow);
	}

	.contact a:hover {
		border-bottom-color: var(--green);
	}

	.contact-sub {
		margin-top: 8px;
		font-family: 'DM Mono', monospace;
		font-size: 13px;
		color: var(--black);
		letter-spacing: 1px;
	}

	/* Footer */
	footer {
		background: var(--black);
		color: rgba(245, 240, 235, 0.4);
		padding: 48px 24px;
		text-align: center;
		font-size: 13px;
		font-family: 'DM Mono', monospace;
		letter-spacing: 1px;
	}

	.footer-brand {
		font-weight: 500;
		color: var(--off-white);
		letter-spacing: 3px;
		margin-bottom: 8px;
		font-size: 16px;
	}

	.footer-colors {
		display: flex;
		gap: 4px;
		justify-content: center;
		margin: 16px 0;
	}

	.footer-colors span {
		width: 20px;
		height: 3px;
		border-radius: 2px;
	}

	.fine {
		margin-top: 8px;
		font-size: 11px;
	}

	.fine a {
		color: rgba(245, 240, 235, 0.4);
		text-decoration: none;
	}

	.fine a:hover {
		color: var(--off-white);
	}

	@media (max-width: 640px) {
		.topbar {
			padding: 12px 18px;
		}
		main {
			padding: 48px 20px 80px;
		}
	}
</style>
