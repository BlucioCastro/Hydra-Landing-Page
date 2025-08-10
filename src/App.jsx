import HeaderSection from "./components/HeaderSection";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Why from "./components/Why";
import TechHard from "./components/TechHard";
import How from "./components/How";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
	return (
		<>
			<HeaderSection />
			<Hero />
			<Introduction />
			<Why />
			<TechHard />
      <How />
			<ContactUs />
			<Footer />
		</>
	);
}
