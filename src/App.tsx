
import { useEffect } from 'react';
import './App.css';
// import BascetItem from './components/bascetIten';
import { useApppDispatch, useAppSelector } from './hooks/redux';
import  {fetchUsers} from './store/reducers/ActionCreators';



function App() {
  const dispatch=useApppDispatch()
  const {users,isLoading,error}=useAppSelector(state=>state.userReducer)
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div className="App">
      {isLoading && <h2>Загрузка</h2>}
      {error && <h2>Ошибка: {error}</h2>}
      {JSON.stringify(users,null,2)}
      {/* <BascetItem/> */}
    </div>
  );
}

export default App;
