import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    categoryName: "equipment",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4yqMqAmhaWgPDw1WJ0aSgMReLZWJfLTPZA&usqp=CAU",
    imageAlt: "Pop Shirt",
    bestSeller: true,
    title: "Punching bag",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 4,
    price: 2000,
    percentDiscount: 20,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "equipment",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiavNW2IOkigVFz08LRsWNNNaIFRyF-sOew&usqp=CAU",
    imageAlt: "Cricket bat (season)",
    bestSeller: false,
    title: "Bag",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 5,
    price: 20000,
    percentDiscount: 15,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "equipment",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806686/Ecom-products/football_tglyvh.jpg",
    imageAlt: "Football Puma",
    bestSeller: true,
    title: "Football Puma",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 4,
    price: 4000,
    percentDiscount: 30,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "equipment",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806672/Ecom-products/javelin_aisnkq.jpg",
    imageAlt: "Javelin",
    bestSeller: false,
    title: "Javelin",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 5,
    price: 12000,
    percentDiscount: 20,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "apparel",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806683/Ecom-products/sweatshirt_euknao.jpg",
    imageAlt: "Asics sweatshirt",
    bestSeller: false,
    title: "Asics sweatshirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 4,
    price: 5500,
    percentDiscount: 10,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "apparel",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806682/Ecom-products/sweatpants_zae1zb.jpg",
    imageAlt: "Adidas sweatpants",
    bestSeller: true,
    title: "Sweatpants Adidas",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 5,
    price: 3000,
    percentDiscount: 15,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "shoes",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806680/Ecom-products/stud-shoes_ekch4u.jpg",
    imageAlt: "Stud shoes (football)",
    bestSeller: false,
    title: "Stud (football) shoes",
    description:
      "Soft, thin synthetic leather upper for a great fit and ball feel, has textured pattern, printed detail, Nike Swoosh on the forefoot and backfoot, a reinforced heel collar. Agility traction pattern for faster release and maximum responsiveness",
    sellerName: "OnSport",
    rating: 5,
    price: 10000,
    percentDiscount: 30,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "shoes",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806678/Ecom-products/running-shoes_qlzkil.jpg",
    imageAlt: "Sports (running) shoes",
    bestSeller: false,
    title: "Running (sports) shoes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 4,
    price: 15000,
    percentDiscount: 25,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "shoes",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806681/Ecom-products/spikes-shoes_f4vvqd.jpg",
    imageAlt: "Spike shoes",
    bestSeller: true,
    title: "Spike shoes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 4,
    price: 8000,
    percentDiscount: 20,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "jerseys",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806675/Ecom-products/cricket-jersey_j2pgjo.jpg",
    imageAlt: "Cricket India jersey",
    bestSeller: false,
    title: "Indian cricket jersey",
    description:
      "Original jersey of the Indian cricket team. Typography printed, Regular length, Polo collar, Short, regular sleeves, Knitted polyester fabric, machine wash.",
    sellerName: "OnSport",
    rating: 4,
    price: 2000,
    percentDiscount: 10,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "jerseys",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4yqMqAmhaWgPDw1WJ0aSgMReLZWJfLTPZA&usqp=CAU",
    imageAlt: "Football Argentina jersey",
    bestSeller: false,
    title: "Argentina football jersey",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 3,
    price: 4000,
    percentDiscount: 22,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "jerseys",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806664/Ecom-products/basketball-jersey_pcha07.jpg",
    imageAlt: "Basketball jersey",
    bestSeller: true,
    title: "Basketball jersey",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 5,
    price: 5000,
    percentDiscount: 5,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648811626/Ecom-products/ball-keychain_qfxkss.jpg",
    imageAlt: "3D sports keychain",
    bestSeller: false,
    title: "3D sports keychain",
    description:
      "3D Sports, Basketball, Volleyball, Football, key chains. Can be given as a gift to sports' lovers.",
    sellerName: "OnSport",
    rating: 2,
    price: 400,
    percentDiscount: 10,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648806686/Ecom-products/tennis-keychain_f4jgjj.jpg",
    imageAlt: "Tennis keychain",
    bestSeller: true,
    title: "Tennis keychain",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 4,
    price: 600,
    percentDiscount: 20,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "Bag ",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiavNW2IOkigVFz08LRsWNNNaIFRyF-sOew&usqp=CAU",
    imageAlt: "Sports trophy",
    bestSeller: false,
    title: "Bag",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aut perspiciatis similique pariatur amet nisi quod ipsam quibusdam sit dolore.",
    sellerName: "OnSport",
    rating: 3,
    price: 1000,
    percentDiscount: 15,
    quantityInCart: 0,
  },
  {
    _id: uuid(),
    categoryName: "trophies-medals",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4yqMqAmhaWgPDw1WJ0aSgMReLZWJfLTPZA&usqp=CAU",
    imageAlt: "Sports medals",
    bestSeller: true,
    title: "Sports medals",
    description:
      "Metal award medals with neck ribbon - Gold, Silver, Bronze. Made of premium quality metal, zinc alloy, our medals can be preserved for a long time.",
    sellerName: "OnSport",
    rating: 4,
    price: 600,
    percentDiscount: 5,
    quantityInCart: 0,
  },
];
