import './Header.css';

function Header(){
    return(
        <header>
            <div className='header-top-container'>
                <div className='header-top'>
                    <ul className='social-networks'>
                        <li>
                            <a href='/' className='social-network social-network-1'>
                                <p>Facebook</p>
                            </a>
                        </li>
                        <li>
                            <a href='/' className='social-network social-network-2'>
                                <p>Instagram</p>
                            </a>
                        </li>
                        <li>
                            <a href='/' className='social-network social-network-3'>
                                <p>YouTube</p>
                            </a>
                        </li>
                    </ul>

                    <div className=''>
                        <a href='/'>
                            <p>contacto@gruasememca.com</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='header-bottom-container'></div>
        </header>
    );
}

export default Header;
