import { Analytics } from "@vercel/analytics/react";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import RedirectToHome from "./components/RedirectToHome";
import Loading from "./components/canvas/Loading";
import GlobalStyle from "./globalStyled";
const Home = lazy(
	async () =>
		await import("./pages").then((module) => ({
			default: module.Home,
		}))
);
const Workpage = lazy(
	async () =>
		await import("./pages").then((module) => ({
			default: module.Work,
		}))
);
const ContactPage = lazy(
	async () =>
		await import("./pages").then((module) => ({
			default: module.Contact,
		}))
);

const App = () => {

	return (
		<>
			<div className='bg-primary'>
				<Suspense fallback={<Loading />}>
					<BrowserRouter>
						<Navbar/>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='contact' element={<ContactPage />} />
							<Route path='work' element={<Workpage />} />
							<Route path='*' element={<RedirectToHome />} />
						</Routes>
					</BrowserRouter>
					<GlobalStyle/>
				</Suspense>
			</div>
			<Analytics />
		</>
	);
};

export default App;
