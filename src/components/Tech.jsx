import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { techMobile } from "../assets";

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-10'>
			{technologies.map((tech) => {
				return (
					<div className='lg:w-28 lg:h-28 w-20 h-20 sm:block' key={tech.name}>
						<BallCanvas icon={tech.icon} />
					</div>
				);
			})}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
