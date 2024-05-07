import { withRuBalance } from '../../helpers/hoc/withRuBalance';
import './styles.css'
const Card = ({balance, setBalance, ruBalance}) => {
    return (
        <div className='card'>
            <div className='card-block'>
                <p>Crypto Finance</p>
                <button onClick={() => setBalance(prev => prev + 1000)}>Add Money</button>
            </div>
            <div className='card-block'>
                <p>Vladislav</p>
                <p>{balance} $</p>
            </div>
        </div>
    )
}

export default withRuBalance(Card);