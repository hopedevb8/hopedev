import { motion } from "framer-motion";
import Lottie from "lottie-react";
import codingCoffee from "../assets/coding-coffee.json";
import { styles } from "../styles";
import Typewriter from "./typingText/Typing";

const Hero = () => {
	return (
		<section
			className='relative w-full h-screen mx-auto flex flex-col'
			id='home'
		>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='h-5 w-5 rounded-full bg-[#915eff]' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>
				<div className='z-50'>
					<h1 className={`${styles.heroHeadText}  text-white`}>
						Hi, I'm{" "}
						<span className='animate-text bg-gradient-to-r from-teal-500 via-[#915eff] to-orange-500 bg-clip-text text-transparent'>
							<Typewriter text="Dinh Hop" delay={200} />
						</span>
					</h1>
					<p
						className={`${styles.heroSubText} mt-2 text-white-100 glitch`}
						data-text={`I'm a Vietnamese based web/app developer focused on
  crafting clean & user‑friendly experiences.`}
					>
						I'm a Vietnamese based web/app developer focused on
  crafting clean & user‑friendly experiences.
					</p>
				</div>
			</div>
			<div className='flex justify-center absolute inset-0 h-full w-full bottom-0 mt-40 lg:mt-48'>
				<Lottie animationData={codingCoffee} loop={true} />
			</div>
			
		</section>
	);
};

export default Hero;
