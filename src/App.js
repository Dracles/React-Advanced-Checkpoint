import React from "react";
import "./App.css";
import Card from "./component/ProductTable";

function App() {
  const products = [
    {
      category: "High-Tech",
      name: "Laptop MSI GT62VR",
      price: 1600,
      image:
        "https://dyw7ncnq1en5l.cloudfront.net/produits/151/34413/msi-gt62vr-6rd-032_81c572271b5edf63.jpg",
    },
    {
      category: "High-Tech",
      name: "Apple IPhone 11 Pro Max",
      price: 1079,
      image:
        "https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-max-2019-frandroid.png?resize=580,580",
    },
    {
      category: "High-Tech",
      name: "Sony PS5",
      price: 499,
      image: "https://media1.auchan.fr/images/h7d/h9d/15748142923806.jpg",
    },
    {
      category: "High-Tech",
      name: "Halo One: Enceinte Bluetooth",
      price: 179,
      image:
        "https://www.objectif-tendance.fr/2868-tm_thickbox_default/enceinte-bluetooth-halo-one-de-gingko.jpg",
    },
    {
      category: "Meubles",
      name: "Meuble d'Entrée CHARME DES TEMPS",
      price: 2310,
      image:
        "https://www.crozatier.com/czt-content/uploads/2019/07/Charme-des-temps-buffet-2.jpg",
    },
    {
      category: "Meubles",
      name: "Salon 6 places LEXUS",
      price: 850,
      image:
        "https://www.homestyle.dz/pub/media/catalog/product/cache/7fe19f826ed08142ff14d7fad3ce0d32/l/e/lexus.jpg",
    },
    {
      category: "Meubles",
      name: "Chambre à Coucher SULTAN",
      price: 1200,
      image:
        "https://www.homestyle.dz/pub/media/catalog/product/cache/7fe19f826ed08142ff14d7fad3ce0d32/c/h/chambre_sultan_avec_motif.jpg",
    },
    {
      category: "Meubles",
      name: "Meuble Chaussure SONOMA NEW-Bois",
      price: 700,
      image:
        "https://www.homestyle.dz/pub/media/catalog/product/cache/7fe19f826ed08142ff14d7fad3ce0d32/m/c/mc-bs_copy_.jpg",
    },
  ];

  return (
    <div className="container">
      {products.map((elem, index) => (
        <Card
          key={index}
          category={elem.category}
          name={elem.name}
          price={elem.price}
          image={elem.image}
        />
      ))}
    </div>
  );
}

export default App;
