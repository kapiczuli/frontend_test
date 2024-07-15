import "../../styles/footer.css"
import { useState } from "react"


const Footer = ({openDane, setOpenDane, reset, setReset}) => {

    const handleDane = () => {
        setOpenDane(true)
    }
    const handleReset = () => {
        setReset("reset")
        console.log(reset)
    }
    return(
        <>
            <div className="footer-container">
                <div className="box-container">
                    <div class="box">CSS IS AWESOME</div>
                </div>
                <div className="nabthat">---nabthat---</div>
                <div>
                    <div id="blok" class="blok">
                        <div className="zresetuj-ustawienia" onClick={handleReset}><p>ZRESETUJ USTAWIENIA</p></div>
                        <div className="dane-osobowe" onClick={handleDane}><p>POKAZ DANE OSOBOWE</p></div>
                    </div>
                    <a href="#blok">
                        <div class="pokaz">
                            <a href="#blok" >POKAZ</a>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Footer