import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import {useEffect, useState} from "react";
import {getCoins} from './api/api';

function App() {
    const [balance, setBalance] = useState(5000)

    const [coins, setCoins] = useState([]);
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await getCoins()
            setCoins(data.coins)
            setFilteredCoins(data.coins)
        }
        fetchData()
    }, []);
    console.log(coins);
  return (
    <>
        <Header />
        <Main 
          setCoins={setFilteredCoins} 
          coins={coins} 
          balance={balance} 
          setBalance={setBalance}
          filteredCoins={filteredCoins}
        />
    </>
  )
}

export default App
