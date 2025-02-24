import './AboutUs.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function AboutUs(){
    return(
        <>
            <Header/>

            <main>
                <div className='block-container'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h2 className='block-title'>Sobre nosotros</h2>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default AboutUs;
