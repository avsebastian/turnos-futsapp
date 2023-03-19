import NavBar from "../components/NavBar";
import HeroSection from '../components/HeroSection'
import AboutSection from "../components/AboutSection";
import FieldSoccerSection from "../components/FieldSoccerSection";

export function Home() {
    return(
        <>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <FieldSoccerSection />
        </>
    ) 
}