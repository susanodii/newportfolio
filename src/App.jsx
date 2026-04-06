
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";

import Portfolio from "./component/portfolio/Portfolio";

import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import { ThemeState } from "./context/ThemeState";
import { ChakraProvider } from "@chakra-ui/react";


import Layout from "./component/layout/Layout";
import ExperienceStepper from "./component/experiencestepper/ExperienceStepper";

const App = () => {
	return (
		<ChakraProvider>
			<ThemeState>
				<Layout>
					{/* <Theme /> */}
					<Header />
					<Nav />
					<About />
					< ExperienceStepper />
					<Experience />
					<Portfolio />
					
					<Contact />
					<Footer />
				</Layout>
			</ThemeState>
		</ChakraProvider>
	);
};

export default App;
