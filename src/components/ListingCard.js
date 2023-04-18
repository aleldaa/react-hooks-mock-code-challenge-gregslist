import React, {useState} from "react";

function ListingCard({ id, description, image, location, onDeleteCard}) {
  
  const [favorite, setFavorite] = useState(true)

  function handleClick(){
    setFavorite(!favorite)
  }

  function handleDelete(){
    onDeleteCard(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleClick} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete"onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
