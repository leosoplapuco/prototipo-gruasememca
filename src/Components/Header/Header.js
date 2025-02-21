import './Header.css';

function Header(){
    return(
        <header>
            <div className='header-top-container'>
                <div className='header-top'>
                    <ul className='social-networks'>
                        <li>
                            <a href='https://www.facebook.com/gruasememcasac08' target='_blank' className='social-network social-network-1'>
                                <p>Facebook</p>
                            </a>
                        </li>

                        <span className='color-white'>|</span>

                        <li>
                            <a href='https://www.instagram.com/p/DCHT86TOPZc/' target='_blank' className='social-network social-network-2'>
                                <p>Instagram</p>
                            </a>
                        </li>

                        <span className='color-white'>|</span>

                        <li>
                            <a href='https://www.youtube.com/@gruasememcasac552' target='_blank' className='social-network social-network-3'>
                                <p>YouTube</p>
                            </a>
                        </li>
                    </ul>

                    <div className='header-top-contact'>
                        <a href='mailto: contacto@gruasememca.com' className='d-flex gap-5'>
                            <span class="material-icons">mail</span>
                            <p>contacto@gruasememca.com</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className='header-bottom-container'>
                <div className='header-bottom'>
                    <a href="/" className='header-logo'>
                        <h2>Grúas <b>Ememca</b></h2>
                    </a>

                    <nav className='menu-container'>
                        <ul className='menu'>
                            <li>
                                <a href='/' className='menu-link menu-link-1'>
                                    <h2>Inicio</h2>
                                </a>
                            </li>
                            <li>
                                <button type='button' className='menu-link menu-link-2'>
                                    <h2>Servicios</h2>
                                    <span class="material-icons">keyboard_arrow_down</span>
                                </button>
                                
                                <div className='sub-menu sub-menu-1'>
                                    <div className='sub-menu-target sub-menu-target-1'>
                                        <p className='sub-menu-target-title'>Nuestros servicios</p>

                                        <ul className='list-simple'>
                                            <li>
                                                <span class="material-icons">check</span>
                                                <p className='text'>Lorem Ipsum is simply dummy text tandard dummy text ever since the ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                                            </li>
                                            <li>
                                                <span class="material-icons">check</span>
                                                <p className='text'>Lorem Ipsum is simply dummy text tandard dummy text ever since the ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <ul className='sub-menu-target sub-menu-target-2'>
                                        <li>
                                            <a href='/servicios/alquiler-de-gruas-telescopicas'>
                                                <img src="" alt="" className='' />
                                                <h3>Alquiler de grúas telescópicas</h3>
                                                <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/servicios/izaje'>
                                                <img src="" alt="" className='' />
                                                <h3>Izaje</h3>
                                                <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/servicios/montaje-y-desmontaje'>
                                                <img src="" alt="" className='' />
                                                <h3>Montaje y desmontaje</h3>
                                                <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/servicios/eliminacion-de-tierra'>
                                                <img src="" alt="" className='' />
                                                <h3>Eliminación de tierra</h3>
                                                <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <button type='button' className='menu-link menu-link-3'>
                                    <h2>Nosotros</h2>
                                    <span class="material-icons">keyboard_arrow_down</span>
                                </button>

                                <div className='sub-menu sub-menu-2'>
                                    <div className='sub-menu-target sub-menu-target-1'>
                                        <p className='sub-menu-target-title'>Nuestros servicios</p>

                                        <ul className='list-simple'>
                                            <li>
                                                <span class="material-icons">check</span>
                                                <p className='text'>Lorem Ipsum is simply dummy text tandard dummy text ever since the ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                                            </li>
                                            <li>
                                                <span class="material-icons">check</span>
                                                <p className='text'>Lorem Ipsum is simply dummy text tandard dummy text ever since the ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <ul className='sub-menu-target sub-menu-target-2'>
                                        <li>
                                            <a href='/servicios/alquiler-de-gruas-telescopicas'>
                                                <img src="" alt="" className='' />
                                                <h3>Alquiler de grúas telescópicas</h3>
                                                <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/servicios/izaje'>
                                                <img src="" alt="" className='' />
                                                <h3>Izaje</h3>
                                                <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/servicios/montaje-y-desmontaje'>
                                                <img src="" alt="" className='' />
                                                <h3>Montaje y desmontaje</h3>
                                                <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/servicios/eliminacion-de-tierra'>
                                                <img src="" alt="" className='' />
                                                <h3>Eliminación de tierra</h3>
                                                <p>Contamos con flota propia de grúas telescópicas con capacidades de carga de hasta las 220 toneladas.</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href='/maquinaria/' className='menu-link menu-link-4'>
                                    <h2>Maquinaria</h2>
                                </a>
                            </li>
                            <li>
                                <a href='https://blog.gruasememca.com' className='menu-link menu-link-5'>
                                    <h2>Blog</h2>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <ul className='header-bottom-links d-flex gap-10'>
                        <li>
                            <a href="mailto: contacto@gruasememca.com" className='button-link button-link-2'>
                                <span class="material-icons">mail</span>
                                <p className='button-link-text'>Enviar correo</p>
                            </a>
                        </li>

                        <li>
                            <a href="tel: +51998877665" className='button-link button-link-1'>
                                <span class="material-icons">call</span>
                                <p className='button-link-text'>Llamar ahora</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
