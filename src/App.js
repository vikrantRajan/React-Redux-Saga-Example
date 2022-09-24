import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getCatsFetch } from './catState';

function App() {
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCatsFetch())
    
  }, [dispatch]);

  
  console.log(cats)

  return (
    <div className="App">
      <h1>Cat Species</h1>
      <p>Cat images</p>
      <br />
      <div className="Gallery">
      {cats.map(cat => {
        return (
          <div className="row" key={cat.id}>
            <div className="column column-left">
              <img alt={cat.name} src={cat.image.url} width="200" height="200"/>
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
