// Sample coffee shop locations and menu data
const coffeeShops = [
    {
        name: "Coffee Shop 1",
        latlng: [40.7128, -74.0060],
        menu: ["Latte", "Cappuccino", "Espresso"],
      },
    {
      name: "Coffee Shop 2",
      latlng: [34.0522, -118.2437],
      menu: ["Americano", "Flat White", "Macchiato", "Cortado"],
    },
    {
      name: "Coffee Shop 3",
      latlng: [51.5074, -0.1278],
      menu: ["Iced Coffee", "Cold Brew", "Affogato", "Chai Latte"],
    },
  ];
  
 // ... (previous code)

// Function to display coffee locations on the map
  function displayCoffeeLocations(map) {
    coffeeShops.forEach((coffeeShop) => {
      const marker = L.marker(coffeeShop.latlng).addTo(map);
  
      // Create a custom popup with coffee shop name and "View Menu" button
      const popupContent = `<b>${coffeeShop.name}</b><br><button onclick="showCoffeeMenu('${coffeeShop.name}', ${JSON.stringify(
        coffeeShop.menu
      )})">View Menu</button>`;
      marker.bindPopup(popupContent);
    });
  }
  
  
  function showCoffeeMenu(coffeeShopName, menuItems) {
    const coffeeMenuModal = document.getElementById("coffeeMenuModal");
    const coffeeShopTitle = coffeeMenuModal.querySelector("#coffeeShopTitle");
    const coffeeMenuList = coffeeMenuModal.querySelector("#coffeeMenuList");
  
    // Set the coffee shop name as the title
    coffeeShopTitle.textContent = coffeeShopName;
  
    // Clear any existing menu items
    coffeeMenuList.innerHTML = "";
  
    // Create list items for each menu item and add them to the modal
    menuItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      coffeeMenuList.appendChild(listItem);
    });
  
    // Show the modal
    coffeeMenuModal.style.display = "block";
  }
  
    // Update the modal content with the coffee shop name and menu
    coffeeShopNameElem.textContent = coffeeShopName;
    coffeeMenuList.innerHTML = coffeeMenu.map((coffee) => `<li>${coffee}</li>`).join('');
  
  // Function to open the map modal
  function openMapModal() {
    const mapModal = document.getElementById('mapModal');
    mapModal.style.display = 'block';
  
    // Initialize the map when the modal is opened
    const defaultLatLng = [40.7128, -74.0060];
    const map = L.map('map').setView(defaultLatLng, 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    displayCoffeeLocations(map);
  }
  
  // ... (remaining code)
  
  // Function to show the coffee menu
  function showCoffeeMenu(coffeeShopName, coffeeMenu) {
    const menuModal = document.getElementById('menuModal');
    const coffeeShopNameElem = menuModal.querySelector('.coffee-shop-name');
    const coffeeMenuList = menuModal.querySelector('.coffee-menu-list');
  
    // Update the modal content with the coffee shop name and menu
    coffeeShopNameElem.textContent = coffeeShopName;
    coffeeMenuList.innerHTML = coffeeMenu.map((coffee) => `<li>${coffee}</li>`).join('');
  
    // Open the modal
    menuModal.style.display = 'block';
  }
  
  // Function to close the menu modal
  function closeMenuModal() {
    const menuModal = document.getElementById('menuModal');
    menuModal.style.display = 'none';
  }
  
  // Function to open the map modal
  function openMapModal() {
    const mapModal = document.getElementById('mapModal');
    mapModal.style.display = 'block';
  
    // Initialize the map when the modal is opened
    const defaultLatLng = [40.7128, -74.0060];
    const map = L.map('map').setView(defaultLatLng, 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    displayCoffeeLocations(map);
  }
  
  // Function to close the map modal
  function closeMapModal() {
    const mapModal = document.getElementById('mapModal');
    mapModal.style.display = 'none';
  }
  