<script>
	import Topbar from '$lib/components/Topbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import PhoneDemo from '$lib/components/PhoneDemo.svelte';
	import Features from '$lib/components/Features.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import SignupForm from '$lib/components/SignupForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>R.E.I.D — Repair Engine for Identification & Diagnostics</title>
	<meta
		name="description"
		content="The first SMS-powered vehicle record system built for real mechanics. Text a VIN, get the full service history, log new work in seconds."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<Topbar />
<Hero />
<Stats />
<PhoneDemo />
<Features />
<HowItWorks />
<SignupForm />
<Footer />
