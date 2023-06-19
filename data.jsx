const data = [
  {
    id: 1,
    category: "breakfast",
    name: "Berry Pancakes",
    description:
      "Fluffy pancakes made with fresh berries and drizzled with maple syrup.",
    price: "8.99",
    image:
      "https://img.taste.com.au/MoN30idU/taste/2016/11/mixed-berry-pancakes-38452-1.jpeg",
  },
  {
    id: 2,
    category: "lunch",
    name: "Chicken Caesar Salad",
    description:
      "Crisp romaine lettuce tossed with grilled chicken, parmesan cheese, and homemade Caesar dressing.",
    price: 9.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fxpWUnMigCofZaRrA2CqI2FtsATncpSysw&usqp=CAU",
  },
  {
    id: 3,
    category: "dinner",
    name: "Grilled Salmon",
    description:
      "Succulent salmon fillet seasoned with herbs and served with a side of roasted vegetables.",
    price: 15.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_4XNmZyM-lR0KCUJgqLq-ytULttEUXVLBA&usqp=CAU",
  },
  {
    id: 4,
    category: "juices",
    name: "Watermelon Juice",
    description:
      "Refreshingly sweet and hydrating juice made from freshly squeezed watermelon.",
    price: 4.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlN9PV_e02lfFyQUSlJCLceJxoTWrCcNgng&usqp=CAU",
  },
  {
    id: 5,
    category: "breakfast",
    name: "Bacon and Eggs",
    description:
      "Classic breakfast combo of crispy bacon, scrambled eggs, and toasted bread.",
    price: 7.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw04H3lTTt6AtFEql0Um4C_nrsLs1nzSHprg&usqp=CAU",
  },
  {
    id: 6,
    category: "lunch",
    name: "Cheeseburger",
    description:
      "Juicy beef patty topped with melted cheese, fresh veggies, and served on a soft bun.",
    price: 10.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwIm2Kae5NuCwWWCDp1tf9O1Xrw0vleqszA&usqp=CAU",
  },
  {
    id: 7,
    category: "dinner",
    name: "Grilled Steak",
    description:
      "Tender and perfectly grilled steak seasoned with a blend of herbs and spices.",
    price: 19.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpm-ju_EcHDmywOwfaJ41OdOyqGtsxqkVsQ&usqp=CAU",
  },
  {
    id: 8,
    category: "juices",
    name: "Orange Juice",
    description:
      "Zesty and tangy orange juice packed with vitamin C and natural goodness.",
    price: 3.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpm-ju_EcHDmywOwfaJ41OdOyqGtsxqkVsQ&usqp=CAU",
  },
  {
    id: 9,
    category: "breakfast",
    name: "Waffles",
    description:
      "Golden and crispy waffles topped with butter, maple syrup, and a dusting of powdered sugar.",
    price: 9.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROe9tsOXUYGauD_h2q3LGl3Wh3zh55KkI-GQ&usqp=CAU",
  },
  {
    id: 10,
    category: "lunch",
    name: "Tomato Soup",
    description:
      "Homemade tomato soup made with ripe tomatoes, herbs, and served with a grilled cheese sandwich for dipping.",
    price: 6.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CeJfqcfSiDomP1tYTm9PXKNMHiixUobhKg&usqp=CAU",
  },
  {
    id: 11,
    category: "dinner",
    name: "Spaghetti and Meatballs",
    description:
      "Classic Italian dish of al dente spaghetti noodles topped with homemade meatballs and marinara sauce.",
    price: 12.99,
    image:
      "https://www.allrecipes.com/thmb/-WqniJ77Ug_6QWGXvvpDRYsucMc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21353-italian-spaghetti-sauce-with-meatballs-3x2-138-1ce49b508a6e483ca909431025e8240d.jpg",
  },
  {
    id: 12,
    category: "juices",
    name: "Pineapple Juice",
    description:
      "Tropical and refreshing juice made from ripe pineapples, perfect for a summer getaway.",
    price: 4.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oSrWCOe8HIexfhg5KXl6cYQfM8gKyFDkDA&usqp=CAU",
  },
  {
    id: 13,
    category: "breakfast",
    name: "Avocado Toast",
    description:
      "Nutritious whole-grain toast topped with creamy avocado slices, a sprinkle of sea salt, and a drizzle of olive oil.",
    price: 7.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmqUNypFbkmqqO_3rhfhO1BnObZ_IO13s8A&usqp=CAU",
  },
  {
    id: 14,
    category: "lunch",
    name: "Grilled Chicken Wrap",
    description:
      "Grilled chicken wrapped in a soft tortilla with fresh veggies and a flavorful dressing.",
    price: 8.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUf41qgFiJvsQ8Uc6NRBXWZT9EbSNyoFELYA&usqp=CAU",
  },
  {
    id: 15,
    category: "dinner",
    name: "Thai Curry",
    description:
      "Aromatic and spicy Thai curry with a medley of vegetables and fragrant jasmine rice.",
    price: 14.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxkE5aGTqkOVx-pqtginsCfxl_vCvscektPw&usqp=CAU",
  },
];

export default data;
