import './App.scss';

import List from '../List/List';
import Counter from '../Counter/Counter';
import { useEffect, useState } from 'react';

function App() {

  const [anim, setanim] = useState<any>([]);

  const [count, setcount] = useState(0);

  const [search, setsearch] = useState('');

  const [page, setpage] = useState(1);

  const [submitted, setsubmitted] = useState('');

    // Appel de l'API pour récupérer les données initiales
    useEffect(() => {
      // On ne peut pas faire un useEffect async directement
      // L'astuce est de créer une fonction async et de l'appeler directement
      const fetchData = async () => {
        // J'appel mon API
        // const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`);
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${submitted}&page=${page}&limit=25`);
        // Je récupère les données
        const data = await response.json();
        // Je mets à jour mon state avec les données récupérées
        console.log(data);

        setanim([...data.data]);


        setcount(data.pagination.items.total);

        console.log(anim);

      };
  
      fetchData(page);
      
    }, [submitted, page]);


    const previouspage = () => {

        if(page>1) { setpage(page-1), console.log(page), window.scrollTo(0, 0)}

    }

    const nextpage = () => {

        if(count>25*page) { setpage(page+1), console.log(page), window.scrollTo(0, 0)}

    }

    const submit = (e) => {
      
      e.preventDefault();

      setpage(1);

      setsubmitted(search);

      console.log(submitted);

    }



  return (
    <div className="app">
      <h1 className="app__title">O&apos;Anime</h1>

      <form onSubmit={submit}>

      <input type="text" placeholder="Rechercher un anime" value={search} onChange={(e) => setsearch(e.target.value)} style={{marginLeft:'20vw', padding:'0.75em', width:'25vw', marginTop:'2em', marginBottom:'2em'}} />

      </form>

      <Counter count={count} />

      <List animes={anim} />

      {count>25 ? <button onClick={previouspage} style={{marginLeft:'27vw'}}>Page précédente</button> : ''}

      {count>25 ? <button onClick={nextpage}>Page suivante</button> : ''}

    </div>
  );
}

export default App;
