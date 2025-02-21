import './Homepage.css';

import Header from '../../Components/Header/Header';
import BlogTargets from '../../Components/BlogTargets/BlogTargets';

function Homepage(){
    return(
        <>
            <Header/>

            <main>
                <section className='hero-container'>
                    <div className='hero-content'>
                        <div className='hero-content-target hero-content-target-1'>
                            <p className='welcome'>Bienvenidos a Grúas Ememca</p>
                            <h1>Alquiler de <span>grúas telescópicas</span></h1>

                            <ul className='list-simple'>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                                </li>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                                </li>
                            </ul>

                            <ul className='d-flex gap-10'>
                                <li>
                                    <a href='/nosotros/' className='button-link button-link-2'>
                                        <span class="material-icons">groups</span>
                                        <p className='button-link-text'>Más de nosotros</p>
                                    </a>
                                </li>
                                <li>
                                    <a href='tel: +51998877665' className='button-link button-link-1'>
                                        <span class="material-icons">phone_in_talk</span>
                                        <p className='button-link-text'>Llamar ahora</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='hero-content-target hero-content-target-2'>
                            <div className='hero-content-target-img'>
                                <img src="https://gruasememca.vercel.app/assets/images/Components/Hero/gruas-ememca-repsol-2024.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <BlogTargets/>
            </main>
        </>
    );
}

export default Homepage;
