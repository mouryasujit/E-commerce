import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "equipment",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_wCF1Sz2VvCaxycfS8XnbiSqSmaV7WnVMPkAethunGsrBI0PbHN2DmfJBYPz1JsgEbPg&usqp=CAU",
    imageAlt: "Singing equipment banner",
    text: "Singing equipment",
    subText: "Upto 30% off",
  },
  {
    _id: uuid(),
    categoryName: "shoes",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808764/Ecom-home-categories/shoes-banner_pqvhrl.jpg",
    imageAlt: "Sports shoes banner",
    text: "Fancy shoes",
    subText: "Upto 25% off",
  },
  {
    _id: uuid(),
    categoryName: "jerseys",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808774/Ecom-home-categories/jerseys-banner_sve0ue.jpg",
    imageAlt: "Original team jerseys banner",
    text: "Pop Crew jerseys",
    subText: "Upto 20% off",
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    imageSrc:
      "https://res.cloudinary.com/mohitdhatrak/image/upload/v1648808772/Ecom-home-categories/accessories-banner_e2m846.jpg",
    imageAlt: "Sports accessories banner",
    text: "Pop accessories",
    subText: "Upto 50% off",
  },
];
