function Hero() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center gap-10 max-w-[900px] w-full mx-auto p-4">
			<div className="flex flex-col gap-4">
				<p>It&apos;s time to unleash</p>
				<h1 className="uppercase font-semibold txt-4xl sm:text-5xl md:text-6xl lg:text-7xl">
					<span className="text-blue-400">The athlete within</span>
				</h1>
			</div>
			<p className="text-sm md:text-base font-light">
				It&apos;s time to schedule your workout and{" "}
				<span className="text-blue-400 font-medium">take the risk</span>{" "}
				of becoming the local best athlete !{" "}
				<span className="text-blue-400 font-medium">No excuses</span>,
				it&apos;s time to sweat!
			</p>
			<button className="px-8 py-4 rounded-md border border-blue-400 border-solid bg-slate-950 blueshadow duration-200">
				<p>Accept and work</p>
			</button>
		</div>
	);
}

export default Hero;
