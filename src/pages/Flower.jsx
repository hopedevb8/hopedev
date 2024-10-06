import { StarsCanvas } from "../components/canvas";
import FlowerSection from '../components/flower/Flower';
import TextTitle from '../components/flower/TextTitle'
import { SectionWrapper } from "../hoc";
function Flower() {
	
	return (
		<div className="absolute  bg-primary h-screen w-screen top-0 left-0">
			<div className='relative z-0 h-screen flex justify-center items-center'>
                <FlowerSection/>
                <StarsCanvas />
                <TextTitle/>
			</div>
		</div>
	);
}

export default SectionWrapper(Flower, "flower");
