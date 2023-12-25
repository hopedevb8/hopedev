import { useEffect } from "react";
import { About, Hero, Tech } from "../components";
import Social from "../components/Social";
import StarsCanvas from '../components/canvas/Stars'
function Home() {
	useEffect(() => {
		window.scrollTo({ top: 0, behaviour: "smooth" });
	}, []);
	return (
		<div className='relative z-0 bg-primary'>
			<div className='bg-transparent bg-cover bg-no-repeat bg-center'>
				<Hero />
			</div>
			<About />
			<Tech />
			<Social />
			<StarsCanvas />
		</div>
	);
}

export default Home;
