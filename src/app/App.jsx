import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";
import { useSelector, Provider } from "react-redux";
import store from "./store";

// TODO: Import the Redux store and provide it to this component using <Provider>.
const App = () => {

  const transactions = useSelector((state) => {
    return state.transactions
  })

  return (
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
  );
};

export default App;
