import React from 'react';
import '../CSS/Menu.css'
const Menu = () => {
   const style = {
    color: "#3FEA6ACD"
   }
  const dishes = [
    {
      name: "BBQ Ribs",
      image: "https://cookingwithcurls.com/wp-content/uploads/2013/02/Guinness-BBQ-Ribs-22.jpg",
      price:"₹280"
    },
    {
      name: "Pulled Pork Burger",
      image: "https://gethealthyu.com/wp-content/uploads/2014/09/BBQ-Pork-Sandwich.jpg", 
      price:"₹170"
    },
    {
        name:"Beef Brisket",
        image:"https://www.oberpfalz-beef.de/media/image/6d/a2/91/1-IMG_0433.jpg",
        price:"₹200"
    },
    {
        name:"BBQ Chicken Wings",
        image:"https://www.theblackpeppercorn.com/wp-content/uploads/2017/09/Smoked-BBQ-Chicken-Wings-close-hires-1400x933.jpg",
        price:"₹130"
    },
    {
        name:"Smoked Sausages",
        image:"https://th.bing.com/th/id/OIP.vkJ_Nxh6KPMBc2BX1y6NLAHaE8?rs=1&pid=ImgDetMain",
        price:"₹200"
    },
    {
        name:"Grilled Steak",
        image:"https://blog.thermoworks.com/wp-content/uploads/2017/06/ribeye_compound_butter_smoke_mk4-79-of-88.jpg",
        price:"₹320"
    },
    {
        name:"BBQ Pork Belly",
        image:"https://www.chilesandsmoke.com/wp-content/uploads/2022/10/Pork-Belly-Burnt-Ends_Sweet-Heat_Featured.jpg",
        price:"₹110"
    },
    {
        name:"Beef Kabobs",
        image:"https://th.bing.com/th/id/OIP.FTKcSyMAdHKL6xORlWoamAHaE8?rs=1&pid=ImgDetMain",
        price:"₹190"
    },
    {
        name:"BBQ Chicken Burger",
        image:"https://th.bing.com/th/id/OIP.jZm-gjczwtscOy0EAdaBEAHaLF?rs=1&pid=ImgDetMain",
        price:"₹140"
    },
    {
        name:"Smoked Beef Ribs",
        image:"https://theshortordercook.com/wp-content/uploads/2021/08/Smoked-Beef-Short-Ribs-featured-portrait-plate-of-ribs-in-the-center-and-parsley-and-napkin-utensils-in-the-top-left-e1629742877456.jpg",
        price:"₹280"
    },
    
    {
        name:"BBQ Brisket Burger",
        image:"https://cdn.mos.cms.futurecdn.net/tqztcMcTtPFSRSG2uSwxdB.jpg",
        price:"₹180"
    },
    
    {
        name:"Beef Burger with BBQ Sauce",
        image:"https://th.bing.com/th/id/OIP.LwKbtTbnkvLqIdCqWWtH7gHaIN?rs=1&pid=ImgDetMain",
        price:"₹200"
    },
    
    {
        name:"Beef Tacos",
        image:"https://th.bing.com/th/id/OIP.OOqcQo8g-HQdHVghjW3ggAHaIJ?w=900&h=990&rs=1&pid=ImgDetMain",
        price:"₹150"
    },
    
    {
        name:"Beef Stir-Fry",
        image:"https://khalisbazar.com/wp-content/uploads/2014/05/Ginger-Beef-Stir-Fry-recipe.jpg",
        price:"₹180"
    },
    
    {
        name:"Beef Chili",
        image:"https://www.aristella.in/blog/wp-content/uploads/2023/10/Chicken-kebab.webp",
        price:"₹90"
    },
    
    {
        name:"Chicken Shawarma",
        image:"https://th.bing.com/th/id/OIF.FMvS5NYSulVs6xSYY6vgDw?rs=1&pid=ImgDetMain",
        price:"₹130"
    }
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {dishes.map((dish, index) => (
          <div className="menu-item" key={index}>
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <h4 style={style}>Price: {dish.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
