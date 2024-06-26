import styles from './styles.module.css'
import Card from "../../components/Card/Card.jsx";
import CoinsList from "../../components/CoinsList/CoinsList.jsx";
import FilterBlock from '../../components/FilterBlock/FilterBlock.jsx';

const Main = ({balance, setBalance, coins, filteredCoins, setCoins}) => {
    return (
       <main className={styles.main}>
         <Card balance={balance} setBalance={setBalance}/>
         <FilterBlock setCoins={setCoins} coins={coins} />
         {coins.length > 0 ? <CoinsList coins={filteredCoins} /> : <div>Loading...</div>}
       </main>
    )
}

export default Main;