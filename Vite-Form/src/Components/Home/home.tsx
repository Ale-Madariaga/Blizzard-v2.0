import react from 'react';
import TopBar from '../Layout/topBar'
import './StylesHome.css'
import Inicio from '../Pages/Body';
const Home = () => {
    return (
        <>
            <div className="home">
                <TopBar />
                <div className='container-body'>
                    {/* <div className='container-menu'>
                        <Menu />
                    </div> */}
                    <div className='container-inicio'>
                        <Inicio />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;