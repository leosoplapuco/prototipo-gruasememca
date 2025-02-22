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

                <div className='block-container block-container-homepage-services'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h2 className='block-title'>Servicios</h2>
                        </div>

                        <div className='homepage-services'>
                            <div className='homepage-services-target homepage-services-target-1'>
                                <p className='homepage-services-target-title'>Más de <b>15 años</b> de experiencia nos respaldan... lorem ipsum lorem ipsum</p>
                                <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                                <ul className='d-flex margin-right gap-10'>
                                    <li>
                                        <a href="tel: +51998877665" title="" className='button-link button-link-1'>
                                            <span class="material-icons">phone_in_talk</span>
                                            <p className='button-link-text'>Llamar ahora</p>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/nosotros/" title="" className='button-link button-link-3'>
                                            <span class="material-icons">groups</span>
                                            <p className='button-link-text'>Más de nosotros</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='homepage-services-target homepage-services-target-2'>
                                <ul className='faqs'>
                                    <li className='faq faq-1'>
                                        <div className='faq-title'>
                                            <p>Alquiler de grúas telescópicas</p>
                                            <span class="material-icons">keyboard_arrow_down</span>
                                        </div>
                                        <div className='faq-content'>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>

                                                <a href='/' title='' className='button-link button-link-1 margin-left'>
                                                    <p className='button-link-text'>Cotizar ahora</p>
                                                </a>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='faq faq-2'>
                                        <div className='faq-title'>
                                            <p>Izaje</p>
                                            <span class="material-icons">keyboard_arrow_down</span>
                                        </div>
                                        <div className='faq-content'>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>

                                                <a href='/' title='' className='button-link button-link-1 margin-left'>
                                                    <p className='button-link-text'>Cotizar ahora</p>
                                                </a>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='faq faq-3'>
                                        <div className='faq-title'>
                                            <p>Montaje y desmontaje</p>
                                            <span class="material-icons">keyboard_arrow_down</span>
                                        </div>
                                        <div className='faq-content'>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>

                                                <a href='/' title='' className='button-link button-link-1 margin-left'>
                                                    <p className='button-link-text'>Cotizar ahora</p>
                                                </a>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='faq faq-4'>
                                        <div className='faq-title'>
                                            <p>Eliminación de tierra</p>
                                            <span class="material-icons">keyboard_arrow_down</span>
                                        </div>
                                        <div className='faq-content'>
                                            <ul className='list-simple'>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>
                                                <li>
                                                    <span class="material-icons">check</span>
                                                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                </li>

                                                <a href='/' title='' className='button-link button-link-1 margin-left'>
                                                    <p className='button-link-text'>Cotizar ahora</p>
                                                </a>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Homepage;
