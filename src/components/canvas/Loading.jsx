import StarsCanvas from './Stars';

export default function Loading() {
	return (
		<div className='loading-container'>
			<div id='page'>
				<div id='container'>
					<div className="boxes">
						<div className="box">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="box">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="box">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="box">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<StarsCanvas />
		</div>
	);
}
