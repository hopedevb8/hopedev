import React, { useEffect, useState,useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import ProgressIndicator from './ScrollIndicator'
import { ThemeContext } from 'styled-components';
import ToggleScene from './Toggle/ToggleScene'
import { Toggle } from './StyledNav'
import click from '../assets/click.mp3'

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const location = useLocation();
	const { pathname } = location;
	const onlyPath = pathname.slice(1);
	useEffect(() => {
		setActive(pathname);
	}, [location]);
 const themes = {
    light: 'light',
    dark: 'dark'
  };
	const [theme, setTheme] = useState(themes.dark);
	const AUDIO = {
      CLICK: new Audio(click),
    };
  const toggleThemeMobile = () => {
	  setTheme(theme === themes.dark ? themes.light : themes.dark);
	  AUDIO.CLICK.play();
  };
 	const toggleTheme = () => {
	  setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  useEffect(() => {
    const html = document.querySelector('html') ;
    html.setAttribute('data-theme', theme);
   
  }, [theme]);
	return (
		<nav
			className={`lg:px-16 px-6 NavBar w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${onlyPath}`}
		>
			<div className='w-full flex justify-between items-center mx-auto'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt='' className='w-9 h-9 object-contain' />
					<p className='text-white text-[18px] font-bold cursor-pointer flex'>
						HOPE &nbsp;
						<span className='sm:block hidden'>| &nbsp; Frontend Developer</span>
					</p>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map((link) => {
						return (
							<li
								key={link.id}
								className={`${
									active === `/${link.desktop}`
										? "text-white"
										: "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(link.desktop)}
							>
								<Link to={link.desktop}>{link.title}</Link>
							</li>
						);
					})}
					
					<ToggleScene toggleTheme={toggleTheme} />
					
				</ul>
				<div className='sm:hidden flex flex-1 justify-end items-center'>
					<Toggle className={`${theme} mr-5`} onClick={toggleThemeMobile} id='toggle'>
                      <div id='circle'></div>
                    </Toggle>
					<img
						src={toggle ? close : menu}
						alt=''
						className='w-[28px] h-[28px] object-contain cursor-pointer nav-icon'
						onClick={() => {
							setToggle(!toggle);
						}}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[140px] z-10 rounded-xl list-nav`}
					>
						<ul className='list-none flex flex-col justify-end items-start  gap-4 '>
							{navLinks.map((link) => {
								return (
									<li
										key={link.id}
										className={`font-poppins font-medium cursor-pointer text-[16px] ${
											active === `/${link.desktop}`
												? "text-white"
												: "text-secondary"
										}`}
										onClick={() => {
											setToggle(!toggle);
											setActive(link.desktop);
										}}
									>
										<Link to={link.desktop}>{link.title}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
			<ProgressIndicator />
		</nav>
	);
};

export default Navbar;
