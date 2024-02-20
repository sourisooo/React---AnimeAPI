import { Anime } from '../../@types/anime';

interface ListItemProps {
  anime: Anime;
}
function ListItem({ anime }: ListItemProps) {
  return (
    <div className="list__item">
      <h3 className="list__item-title">{anime.title}</h3>
      <img src={anime.images.webp.image_url} alt={anime.title} />
      <p className="list__item-genres">
        {anime.genres.map((genre) => (
          <span key={genre.mal_id} className="list__item-genre">
            {genre.name}
          </span>
        ))}
      </p>
    </div>
  );
}

export default ListItem;
