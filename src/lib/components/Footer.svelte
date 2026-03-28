<footer>
	<div class="footer-brand">R.E.I.D</div>
	<div class="footer-colors">
		<span style="background:var(--green)"></span>
		<span style="background:var(--red)"></span>
		<span style="background:var(--yellow)"></span>
		<span style="background:rgba(245,240,235,0.3)"></span>
	</div>
	<p>&copy; 2026 Repair Engine for Identification & Diagnostics</p>
	<p class="fine">Contact R.E.I.D for support and inquiries</p>
	<p class="fine"><a href="/privacy">Privacy Policy</a></p>
</footer>

<style>
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
</style>
