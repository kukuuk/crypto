import './styles.css'
import btcImg from './../../assets/btcImg.jpeg'


const Header = () => {
    return (
        <header className='header'>
            <div className='header-text'>
                <h1>CRYPTO FINANCE</h1>
                <h2>Check your deposit</h2>
            </div>
            <img className='header-img' src={btcImg} alt='btcImg'/>
        </header>
        
    )
}

export default Header;