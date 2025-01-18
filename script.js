// Menangani perubahan warna navbar saat scroll
const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.replace("bg-transparent", "navbar-color");
  } else if (window.scrollY <= 0) {
    navbar.classList.replace("navbar-color", "bg-transparent");
  }
});

// gallery image
const images = [
  "https://i.pinimg.com/474x/74/ad/1e/74ad1ee2c36086803be643570b0b7453.jpg",
  "https://i.pinimg.com/474x/09/d7/7f/09d77fde44c32bc9bc753c31ae83d328.jpg",
  "https://i.pinimg.com/736x/92/c5/a7/92c5a73d2c483df6d5c0075e46e85acc.jpg",
  "https://i.pinimg.com/474x/cb/50/11/cb5011f3d0c1ee269feaefd7ce86ae41.jpg",
  "https://i.pinimg.com/736x/5a/00/f2/5a00f2b00b1a9d4ee516aa68d60a8b43.jpg",
  "https://i.pinimg.com/736x/4c/36/cb/4c36cb52c0debef86cbcc559ae00bd7f.jpg",
  "https://i.pinimg.com/736x/f3/53/40/f35340d91896e5649404f5325339482f.jpg",
  "https://i.pinimg.com/736x/64/89/5b/64895b3bd499f71c3da4944d807264ac.jpg"
];

const galleryContainer = document.getElementById('gallery-container');

images.forEach(src => {
  const col = document.createElement('div');
  col.className = 'col-6 col-md-3';

  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = src;
  img.className = 'card-img-top';
  img.alt = 'Deskripsi Foto';

  card.appendChild(img);
  col.appendChild(card);
  galleryContainer.appendChild(col);
});

// refresh otomatis
document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("page_refreshed")) {
    console.log("Page will refresh after a short delay");
    sessionStorage.setItem("page_refreshed", "true");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
});


