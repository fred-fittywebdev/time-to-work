import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workouts from "./components/Workouts";

function App() {
	return (
		<main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
			<Hero />
			<Generator />
			<Workouts />
		</main>
	);
}

export default App;
