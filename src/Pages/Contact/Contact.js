// import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
    return(
        <>
            <Helmet>
                <title>Contacto | Grúas Ememca SAC</title>
                <meta name="description" content="Página de contacto de Grúas Ememca SAC" />
            </Helmet>

            <Header/>

            <main>
                <div className='block-container'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h2 className='block-title'>Contáctanos</h2>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Contact;
