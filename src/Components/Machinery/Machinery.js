import './Machinery.css';

function Machinery(){
    return(
        <div className='block-container block-container-machinery'>
            <section className='block-content'>
                <div className='block-title-container'>
                    <h2 className='block-title'>Maquinaria</h2>
                </div>

                <div className='machinery-targets'>
                    <div className='machinery-target machinery-target-1'>
                        <img src="https://gruasememca.vercel.app/assets/images/Pages/Homepage/maquina-1.png" alt=''/>

                        <a href="/" className='button-link button-link-1 margin-left'>
                            <p className='button-link-text'>Ver ficha completa</p>
                            <span class="material-icons">arrow_forward</span>
                        </a>
                    </div>

                    <div className='machinery-target machinery-target-2'>
                        <div className='machinery-description'>
                            <p className='machinery-name'>Pettibone 80</p>

                            <ul className='list-simple'>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Año: 1988</p>
                                </li>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Tipo de caja: Fuller</p>
                                </li>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Año: 1988</p>
                                </li>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Tipo de caja: Fuller</p>
                                </li>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Año: 1988</p>
                                </li>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Tipo de caja: Fuller</p>
                                </li>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Año: 1988</p>
                                </li>
                                <li>
                                    <span class="material-icons">check</span>
                                    <p className='text'>Tipo de caja: Fuller</p>
                                </li>
                            </ul>

                            <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                        </div>

                        <div className='machinery-list-container'>
                            <ul className='machinery-list'>
                                <li>
                                    <a href="/" title="">
                                        <img src="https://gruasememca.vercel.app/assets/images/Pages/Homepage/maquina-1.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" title="">
                                        <img src="https://gruasememca.vercel.app/assets/images/Pages/Homepage/maquina-1.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" title="">
                                        <img src="https://gruasememca.vercel.app/assets/images/Pages/Homepage/maquina-1.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Machinery;
