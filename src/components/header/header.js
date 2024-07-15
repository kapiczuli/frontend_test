const Header = ({openDane, setOpenDane}) => {
    return (
        <>
            <div className=''>
                <div className='header'>
                    <div className='logo'><a href="/"><img src="https://i.ibb.co/g9hgwgn/449218169-1844682066036552-161191777820043297-n.png" alt="449218169-1844682066036552-161191777820043297-n" border="0" /></a></div>
                    <div className='text'><div style={{display: "flex" , flexDirection: "row", alignItems: "center", gap: "5px"}}><p>Zadanie </p> <b> rekrutacyjne</b></div> {openDane && (<p>Kacper Laskowski</p>)} </div>
                </div>
            </div>
        </>
    );
}
export default Header;