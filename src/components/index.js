import "../styles/header.css"
import "../styles/main.css"
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import { useState } from "react";

const Index = () => {
    const[openDane, setOpenDane] = useState(false)
    const[reset, setReset] = useState("")

    return (
        <>
            <Header openDane={openDane} setOpenDane={setOpenDane} />
            <Main reset={reset} setReset={setReset} />
            <Footer openDane={openDane} setOpenDane={setOpenDane} reset={reset} setReset={setReset} />
        </>
    );
}
export default Index;