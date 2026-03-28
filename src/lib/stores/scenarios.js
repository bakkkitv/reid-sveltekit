/** @type {import('./types').Scenario[]} */
export const scenarios = [
	{
		label: 'VIN Lookup',
		messages: [
			{
				dir: 'out',
				text: '<span class="blurred">1HGCM82633A</span>004352',
				delay: 0
			},
			{ dir: 'typing', text: '', delay: 1200 },
			{
				dir: 'in',
				text: '🔍 VIN Decoded!\n\n2003 Honda Accord EX\nEngine: 2.4L 4-Cyl\nTransmission: Automatic\n\n📋 2 service records found:',
				delay: 2400
			},
			{
				dir: 'in',
				text: '1. Oil change + tire rotation\n   <span class="blurred">Mike\'s Auto</span> — 43,200 mi\n   Jan 15, 2026',
				delay: 3600
			},
			{
				dir: 'in',
				text: '2. Brake pads replaced (front)\n   <span class="blurred">Precision Motors</span> — 51,800 mi\n   Mar 2, 2026',
				delay: 4600
			},
			{
				dir: 'in',
				text: '💡 Text ADD [work] to log a new record for this VIN.',
				delay: 5600
			}
		]
	},
	{
		label: 'Add Record',
		messages: [
			{
				dir: 'out',
				text: 'ADD oil change, replaced cabin filter. Customer said hearing squeak from front left. 52k miles',
				delay: 0
			},
			{ dir: 'typing', text: '', delay: 1400 },
			{
				dir: 'in',
				text: 'Use last VIN <span class="blurred">1HGCM826</span>... for this record?\n\nWork: "oil change, replaced cabin filter"\nNotes: "hearing squeak from front left"\nMileage: 52,000\n\nReply:\nYES — to confirm\nNO — to cancel',
				delay: 2800
			},
			{ dir: 'out', text: 'YES', delay: 4800 },
			{ dir: 'typing', text: '', delay: 5600 },
			{
				dir: 'in',
				text: '✅ Record saved!\n\nVIN: <span class="blurred">1HGCM82633A</span>004352\nMileage: 52,000 miles\nWork: oil change, replaced cabin filter\nNotes: hearing squeak from front left\n\n💡 Tip: Next time, just text "ADD [work]" and I\'ll use this VIN.',
				delay: 6800
			}
		]
	},
	{
		label: 'New User',
		messages: [
			{ dir: 'out', text: 'HELP', delay: 0 },
			{ dir: 'typing', text: '', delay: 800 },
			{
				dir: 'in',
				text: 'Hey! First time here? 👋\n\nWe gotta build a simple profile. Text us:\n1. Your name\n2. Shop name\n3. City\n4. State\n\nExample: "John Smith, Quick Fix Auto, Austin, TX"',
				delay: 1800
			},
			{
				dir: 'out',
				text: '<span class="blurred">Marcus Johnson</span>, <span class="blurred">Elite Auto Care</span>, Chicago, IL',
				delay: 3800
			},
			{ dir: 'typing', text: '', delay: 4800 },
			{
				dir: 'in',
				text: '✅ Profile created!\n\nName: <span class="blurred">Marcus Johnson</span>\nShop: <span class="blurred">Elite Auto Care</span>\nLocation: Chicago, IL\n\nYou\'re ready! Text any 17-char VIN to look up a vehicle.\n\n📋 Text LICENSE to verify & unlock full history.',
				delay: 6000
			}
		]
	},
	{
		label: 'Photo VIN',
		messages: [
			{ dir: 'out', text: '📷 [Photo of VIN plate attached]', delay: 0 },
			{ dir: 'typing', text: '', delay: 1200 },
			{
				dir: 'in',
				text: '🔍 Scanning your photo for a VIN...',
				delay: 2200
			},
			{ dir: 'typing', text: '', delay: 3200 },
			{
				dir: 'in',
				text: '✅ VIN Found!\n\n<span class="blurred">3FADP4BJ2</span>EM******\n\nIs this correct?\nYES — look it up\nNO — try again',
				delay: 4400
			},
			{ dir: 'out', text: 'YES', delay: 6000 },
			{ dir: 'typing', text: '', delay: 6800 },
			{
				dir: 'in',
				text: '🔍 VIN Decoded!\n\n2014 Ford Focus SE\nEngine: 2.0L 4-Cyl\n\n📋 No service records yet.\n\nText ADD [work] to create the first record!',
				delay: 7800
			}
		]
	}
];
