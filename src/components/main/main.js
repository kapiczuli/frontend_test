import data from "./elementy.json"
import { useState, useEffect } from "react"

const Main = ({reset, setReset}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [displayOptions, setDisplayOptions] = useState([]);
    const [wynik, setWynik] = useState(1)
    const [usedElements, setUsedElements] = useState([]);
    const [radioValue, setRadioValue] = useState("");
    

    
    

const getRandomElement = () => {
    let losoweElementy = data.filter(item => item.opcja === 'losowe' && !usedElements.includes(item));
    if (losoweElementy.length === 0) {
        setUsedElements([]);
        losoweElementy = data.filter(item => item.opcja === 'losowe');
    }
    const randomIndex = Math.floor(Math.random() * losoweElementy.length);
    const selectedElement = losoweElementy[randomIndex];
    setUsedElements([...usedElements, selectedElement]);
    return selectedElement;
}

    
    const handleChange = (event) => {
        const selectedOption = data.filter(item => item.opcja === event.target.id);
        setSelectedOptions([...selectedOptions, ...selectedOption]);
        setRadioValue(event.target.id);
    }
    
    const handleDoklejWynik = () => {
        if (selectedOptions[selectedOptions.length - 1].opcja === 'losowe') {
            setDisplayOptions([...displayOptions, getRandomElement()]);
        } else {
            const selectedOption = selectedOptions[selectedOptions.length - 1];
            setDisplayOptions([...displayOptions, selectedOption]);
        }
        setWynik(wynik + 1);
    }


    const handleZastapWynik = () => {
        if (selectedOptions.length > 0) {
            const newDisplayOptions = [...displayOptions];
            newDisplayOptions[newDisplayOptions.length - 1] = selectedOptions[selectedOptions.length - 1];
            setDisplayOptions(newDisplayOptions);
        }
    }
    

    useEffect( () => {
        console.log(displayOptions)
    },[displayOptions])


    useEffect(() => {
        if (reset === "reset"){
            setUsedElements([]);
            setSelectedOptions([]);
            setDisplayOptions([])
            setReset("");
            setRadioValue("");
            console.log("asd")
        }
    }, [reset]);

    return(
        <>
            <div className='container'>
                <div className='heading' ><h1>Nagłówek H1</h1></div>
                <div className='main-container'>
                    <div className='first-container'>
                        <div className='heading-container'>
                            <h4>BLOK PIERWSZY</h4>
                        </div>
                        <div className='radio-container'>
                            <div className='single-radio'> <input type='radio' id='opcja1' name="opcje" onChange={handleChange} checked={radioValue === 'opcja1'} /> <label htmlFor='opcja1'>Opcja pierwsza</label> </div>
                            <div className='single-radio'> <input type='radio' id='opcja2' name="opcje" onChange={handleChange} checked={radioValue === 'opcja2'} /> <label htmlFor='opcja2'>Opcja druga</label> </div>
                            <div className='single-radio'> <input type='radio' id='losowe' name="opcje" onChange={handleChange} checked={radioValue === 'losowe'} /> <label htmlFor='losowe'>Opcja losowa</label> </div>
                        </div>
                    </div>
                    <div className='second-container'>
                        <div className='heading-container'>
                            <h4>BLOK DRUGI</h4>
                        </div>
                        <div className='buttons-container'>
                            <div className='single-button'> <button onClick={handleZastapWynik}>ZASTĄP</button></div>
                            <div className='single-button'> <button onClick={handleDoklejWynik}>DOKLEJ</button></div>
                        </div>
                    </div>
                    <div className='third-container'>
                        <div className='heading-container'>
                            <h4>BLOK TRZECI Z TAKĄ DŁUGĄ NAZWĄ ZE SIĘ W GŁOWIE NIE MIEŚCI I Z TAK DŁUGĄ NAZWĄ KTÓRA SAMA SIE PRZYCINA</h4>
                        </div>
                        <div className='doklejany-container'>
                            {displayOptions.sort((a, b) => a.element.localeCompare(b.element)).map((item, index) => 
                                <p key={index}>{item.element}</p>
                            )}
                        </div>
                    </div>
                </div>               
            </div>                
        </>
    );
}   
export default Main;
