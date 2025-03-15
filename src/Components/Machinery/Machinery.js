import './Machinery.css';

function Machinery(){
    return(
        <div className='block-container block-container-machinery'>
            <section className='block-content'>
                <div className='block-title-container'>
                    <h3 className='block-title'>Nuestra maquinaria</h3>
                </div>

                <div className='machinery-targets'>
                    <div className='machinery-target machinery-target-1'>
                        <img src="/assets/Img/1.png" alt="" />

                        <a href="/" className='button-link button-link-1 margin-left'>
                            <p className='button-link-text'>Ver ficha completa</p>
                            <span className="material-icons">arrow_forward</span>
                        </a>
                    </div>

                    <div className='machinery-target machinery-target-2'>
                        <div className='machinery-description'>
                            <p className='machinery-name'>PPM 40</p>

                            <ul className='list-simple'>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Modelo: PPM ATT 40</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Año: 2000</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Caja: Automática ZF</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Medidas: 9 x 2.6 metros</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Pluma: 37 metros</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Motor: Cummis americano</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Nacionalidad: Americana</p>
                                </li>
                                <li>
                                    <span className="material-icons">check</span>
                                    <p className='text'>Combustible: Petróleo</p>
                                </li>
                            </ul>

                            <p className='text'>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).</p>
                        </div>

                        <div className='blog-targets-buttons'>
                            <button type='button' className='button-link button-link-2 blog-targets-button blog-targets-button-1'>
                                <span className="material-icons">chevron_left</span>
                            </button>
                            <button type='button' className='button-link button-link-2 blog-targets-button blog-targets-button-2'>
                                <span className="material-icons">chevron_right</span>
                            </button>
                        </div>

                        <div className='machinery-list-container'>
                            <ul className='machinery-list'>
                                <li>
                                    <a href="/" title="">
                                        <img src="/assets/Img/1.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" title="">
                                        <img src="/assets/Img/1.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" title="">
                                        <img src="/assets/Img/1.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" title="">
                                        <img src="/assets/Img/1.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/" title="">
                                        <img src="/assets/Img/1.png" alt="" />
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
