import { Anime } from '../../@types/anime';
import ListItem from './ListItem';
import './list.scss';

interface ListProps {
  animes: Anime[];
}
function List({ animes }: ListProps) {
  return (
    <div className="list">
      {animes.map((anime) => (
        <ListItem key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}

export default List;
