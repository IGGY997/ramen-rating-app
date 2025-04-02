const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];

function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramenMenu.innerHTML = ''; // Clear the menu before displaying
  ramens.forEach(ramen => {
    const ramenImage = document.createElement('img');
    ramenImage.src = ramen.image;
    ramenImage.alt = ramen.name;
    ramenImage.dataset.id = ramen.id;
    ramenImage.addEventListener('click', handleClick);
    ramenMenu.appendChild(ramenImage);
  });
}

function handleClick(event) {
  const ramenId = event.target.dataset.id;
  const selectedRamen = ramens.find(ramen => ramen.id == ramenId);
  
  // Update the ramen details dynamically
  const ramenDetailImage = document.getElementById('ramen-detail-image');
  const ramenDetailName = document.getElementById('ramen-detail-name');
  const ramenDetailRestaurant = document.getElementById('ramen-detail-restaurant');
  const ramenDetailRating = document.getElementById('ramen-detail-rating');
  const ramenDetailComment = document.getElementById('ramen-detail-comment');

  // Update the image
  ramenDetailImage.src = selectedRamen.image;
  
  // Update the rest of the details
  ramenDetailName.textContent = `Name: ${selectedRamen.name}`;
  ramenDetailRestaurant.textContent = `Restaurant: ${selectedRamen.restaurant}`;
  ramenDetailRating.textContent = `Rating: ${selectedRamen.rating || 'No rating'}`;
  ramenDetailComment.textContent = `Comment: ${selectedRamen.comment || 'No comment'}`;
}


function addSubmitListener() {
  const form = document.getElementById('new-ramen-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('ramen-name').value;
    const restaurant = document.getElementById('ramen-restaurant').value;
    const rating = document.getElementById('ramen-rating').value;
    const comment = document.getElementById('ramen-comment').value;
    const imageFile = document.getElementById('ramen-image').files[0];
    const imageURL = URL.createObjectURL(imageFile);
    
    const newRamen = {
      id: ramens.length + 1,
      name,
      restaurant,
      rating: parseInt(rating),
      comment,
      image: imageURL
    };
    
    ramens.push(newRamen);
    displayRamens(); // Re-render the ramen menu
  });
}

function main() {
  displayRamens();
  addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);




