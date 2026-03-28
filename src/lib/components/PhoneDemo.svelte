<script>
	import { onMount, onDestroy } from 'svelte';
	import { scenarios } from '$lib/stores/scenarios.js';

	let currentScenario = $state(0);
	let visibleMessages = $state([]);
	let showTyping = $state(false);
	let timeouts = [];
	let messagesEl;

	function clearTimeouts() {
		timeouts.forEach(clearTimeout);
		timeouts = [];
	}

	function playScenario(idx) {
		clearTimeouts();
		visibleMessages = [];
		showTyping = false;

		const msgs = scenarios[idx].messages;

		msgs.forEach((m) => {
			const t = setTimeout(() => {
				if (m.dir === 'typing') {
					showTyping = true;
				} else {
					showTyping = false;
					visibleMessages = [...visibleMessages, m];
				}

				// Auto-scroll
				if (messagesEl) {
					requestAnimationFrame(() => {
						messagesEl.scrollTop = messagesEl.scrollHeight;
					});
				}
			}, m.delay);
			timeouts.push(t);
		});

		// Replay loop
		const lastDelay = msgs[msgs.length - 1].delay;
		const replay = setTimeout(() => playScenario(idx), lastDelay + 5000);
		timeouts.push(replay);
	}

	function switchScenario(idx) {
		currentScenario = idx;
		playScenario(idx);
	}

	onMount(() => {
		playScenario(0);
	});

	onDestroy(() => {
		clearTimeouts();
	});
</script>

<section class="phone-section">
	<h2 class="section-title">See It In Action</h2>
	<p class="section-sub">
		Watch how mechanics interact with R.E.I.D through simple text messages — no app, no login,
		just text.
	</p>

	<div class="scenario-tabs">
		{#each scenarios as scenario, i}
			<button
				class="scenario-tab"
				class:active={currentScenario === i}
				onclick={() => switchScenario(i)}
			>
				{scenario.label}
			</button>
		{/each}
	</div>

	<div class="phone-frame">
		<div class="phone-notch"></div>
		<div class="phone-screen">
			<div class="phone-header">
				<div class="phone-header-avatar">R</div>
				<div>
					<div class="phone-header-name">R.E.I.D</div>
					<div class="phone-header-status">SMS Service</div>
				</div>
			</div>
			<div class="phone-messages" bind:this={messagesEl}>
				{#each visibleMessages as msg, i (currentScenario + '-' + i)}
					<div class="msg msg-{msg.dir}" style="animation-delay: 0s;">
						{@html msg.text}
					</div>
				{/each}

				{#if showTyping}
					<div class="typing-indicator">
						<span></span>
						<span></span>
						<span></span>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.phone-section {
		padding: 40px 24px 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.section-title {
		font-family: 'Playfair Display', serif;
		font-weight: 800;
		font-size: clamp(28px, 4vw, 44px);
		text-align: center;
		margin-bottom: 12px;
	}

	.section-sub {
		font-size: 16px;
		color: var(--gray-text);
		text-align: center;
		margin-bottom: 48px;
		max-width: 500px;
	}

	.scenario-tabs {
		display: flex;
		gap: 16px;
		margin-bottom: 32px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.scenario-tab {
		font-family: 'DM Mono', monospace;
		font-size: 12px;
		letter-spacing: 1px;
		padding: 8px 18px;
		border-radius: 100px;
		border: 1.5px solid var(--gray-light);
		background: transparent;
		color: var(--gray-text);
		cursor: pointer;
		transition: all 0.25s;
	}

	.scenario-tab:hover {
		border-color: var(--black);
		color: var(--black);
	}

	.scenario-tab.active {
		background: var(--black);
		color: var(--off-white);
		border-color: var(--black);
	}

	.phone-frame {
		width: 340px;
		background: var(--black);
		border-radius: 40px;
		padding: 12px;
		box-shadow:
			var(--shadow-lg),
			0 0 0 1px rgba(255, 255, 255, 0.05) inset,
			0 0 80px rgba(27, 122, 61, 0.08);
	}

	.phone-notch {
		width: 120px;
		height: 28px;
		background: var(--black);
		border-radius: 0 0 16px 16px;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	.phone-screen {
		background: #ffffff;
		border-radius: 30px;
		overflow: hidden;
	}

	.phone-header {
		background: var(--green);
		padding: 14px 18px;
		display: flex;
		align-items: center;
		gap: 10px;
		color: white;
	}

	.phone-header-avatar {
		width: 36px;
		height: 36px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'DM Mono', monospace;
		font-size: 13px;
		font-weight: 600;
	}

	.phone-header-name {
		font-weight: 600;
		font-size: 15px;
	}
	.phone-header-status {
		font-size: 11px;
		opacity: 0.7;
	}

	.phone-messages {
		padding: 16px 12px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		min-height: 460px;
		max-height: 460px;
		overflow-y: auto;
		scrollbar-width: none;
	}

	.phone-messages::-webkit-scrollbar {
		display: none;
	}

	.msg {
		max-width: 82%;
		padding: 10px 14px;
		border-radius: 16px;
		font-size: 13px;
		line-height: 1.5;
		opacity: 0;
		transform: translateY(12px) scale(0.97);
		animation: msg-in 0.35s ease-out forwards;
		word-break: break-word;
		white-space: pre-line;
	}

	.msg-in {
		background: #ececec;
		align-self: flex-start;
		border-bottom-left-radius: 4px;
		color: var(--black);
	}

	.msg-out {
		background: var(--green);
		color: white;
		align-self: flex-end;
		border-bottom-right-radius: 4px;
	}

	/* Global blurred class rendered via @html */
	:global(.blurred) {
		filter: blur(5px);
		user-select: none;
	}

	@keyframes msg-in {
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.typing-indicator {
		display: flex;
		gap: 4px;
		padding: 12px 16px;
		background: #ececec;
		border-radius: 16px;
		border-bottom-left-radius: 4px;
		align-self: flex-start;
		width: 56px;
	}

	.typing-indicator span {
		width: 7px;
		height: 7px;
		background: #999;
		border-radius: 50%;
		animation: typing-bounce 1.2s ease-in-out infinite;
	}

	.typing-indicator span:nth-child(2) {
		animation-delay: 0.15s;
	}
	.typing-indicator span:nth-child(3) {
		animation-delay: 0.3s;
	}

	@keyframes typing-bounce {
		0%,
		60%,
		100% {
			transform: translateY(0);
			opacity: 0.4;
		}
		30% {
			transform: translateY(-5px);
			opacity: 1;
		}
	}

	@media (max-width: 640px) {
		.phone-frame {
			width: 300px;
		}
		.phone-messages {
			min-height: 400px;
			max-height: 400px;
		}
	}
</style>
