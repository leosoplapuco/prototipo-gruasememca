import './Homepage.css';

import Header from '../../Components/Header/Header';
import BlogTargets from '../../Components/BlogTargets/BlogTargets';
import Machinery from '../../Components/Machinery/Machinery';
import Footer from '../../Components/Footer/Footer';

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

                                <button className='hero-content-target-button'>
                                    <span class="material-icons">play_arrow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='video-popup-container'>
                    <div className='video-popup'>
                        <button type='button' className='margin-left'>
                            <span class="material-icons">close</span>
                        </button>

                        <video controls>
                            <source src="https://gruasememca.vercel.app/assets/videos/video-1.webm" type="video/webm" />
                        </video>

                        <p className='text'>Breve descripción del video...</p>

                        <a href="/" title="/" className='button-link button-link-1 margin-left'>
                            <p className='button-link-text'>Saber más</p>
                            <span class="material-icons">arrow_forward</span>
                        </a>
                    </div>
                </div>

                <BlogTargets/>

                <div className='block-container block-container-homepage-services'>
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h3 className='block-title'>Servicios</h3>
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

                <div className="block-container about-us-block-container">
                    <section className='block-content'>
                        <div className='block-title-container'>
                            <h3 className='block-title'>Sobre nosotros</h3>
                        </div>

                        <div className='about-us-targets'>
                            <div className='about-us-target about-us-target-1 d-flex-column gap-20'>
                                <p className='text-title'>Grúas <b>Ememca</b> S.A.C</p>

                                <ul className='list-simple'>
                                    <li>
                                        <span class="material-icons">check</span>
                                        <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                                    </li>
                                    <li>
                                        <span class="material-icons">check</span>
                                        <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                                    </li>
                                </ul>
                            </div>

                            <div className='about-us-target about-us-target-2'>
                                <div className='timeline-container'>
                                    <div className='timeline-butons'>
                                        <button className='timeline-button timeline-button-1'>
                                            <span class="material-icons">keyboard_arrow_up</span>
                                        </button>

                                        <div className='timeline-scrollbar'>
                                            <div className='timeline-scrollbar-thumb'></div>
                                        </div>

                                        <button className='timeline-button timeline-button-2'>
                                            <span class="material-icons">keyboard_arrow_down</span>
                                        </button>
                                    </div>

                                    <div className='timeline-content'>
                                        <div className='timeline-content-targets'>
                                            <div className='timeline-target'>
                                                <div className='timeline-target-content'>
                                                    <p className='timeline-target-title'>Título 1</p>
                                                    <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                                                </div>

                                                <img src="https://gruasememca.vercel.app/assets/images/Components/Hero/gruas-ememca-repsol-2024.webp" alt="" />
                                            </div>

                                            <div className='timeline-target'>
                                                <div className='timeline-target-content'>
                                                    <p className='timeline-target-title'>Título 2</p>
                                                    <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                                                </div>

                                                <img src="https://gruasememca.vercel.app/assets/images/Components/Hero/gruas-ememca-repsol-2024.webp" alt="" />
                                            </div>

                                            <div className='timeline-target'>
                                                <div className='timeline-target-content'>
                                                    <p className='timeline-target-title'>Título 3</p>
                                                    <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                                                </div>

                                                <img src="https://gruasememca.vercel.app/assets/images/Components/Hero/gruas-ememca-repsol-2024.webp" alt="" />
                                            </div>

                                            <div className='timeline-target'>
                                                <div className='timeline-target-content'>
                                                    <p className='timeline-target-title'>Título 4</p>
                                                    <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
                                                </div>

                                                <img src="https://gruasememca.vercel.app/assets/images/Components/Hero/gruas-ememca-repsol-2024.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className='timeline-center-line-container'>
                                            <div className='timeline-center-line'>
                                                <div className='timeline-node timeline-node-1'></div>
                                                <div className='timeline-node timeline-node-2'></div>
                                                <div className='timeline-node timeline-node-3'></div>
                                                <div className='timeline-node timeline-node-4'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Machinery/>
            </main>

            <Footer/>
        </>
    );
}

export default Homepage;
