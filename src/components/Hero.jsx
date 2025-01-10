import React from 'react'

export default function Hero() {
	return (
		<div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center'>
			<div className='flex flex-col gap-4'>
				<p>IT'S TIME TO GET</p>
				<h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400 font-medium'>normous</span></h1>
			</div>
			<p className='text-sm md:text-nase font-light'>An app built using JS, React, and Tailwind to help plan your workouts</p>
			<button className='px-8 py-4 rounded:medium'><p>ACCEPT & BEGIN</p></button>
		</div>
	)
}
