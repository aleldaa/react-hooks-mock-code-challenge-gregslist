import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchQuery}) {

  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
      .then((res)=>res.json())
      .then((data)=> setListings(data))
  },[])

  function handleDeleteCard(id){
    console.log(id)
    setListings(listings.filter((listing)=> listing.id !== id))
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
  }

  const showListings = listings.map((listing)=> {
    return <ListingCard 
    listings={listings} 
    key={listing.id}
    description={listing.description}
    image={listing.image}
    location={listing.location}
    onDeleteCard={handleDeleteCard}
    id={listing.id}
    />
})

  const displayCards = showListings.filter((cardElement)=>{
    return cardElement.props.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <main>
      <ul className="cards">
        {displayCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
