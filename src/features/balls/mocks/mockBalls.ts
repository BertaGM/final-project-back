import type { BallsStructure } from "../types.js";

const mockBalls: BallsStructure[] = [
  {
    _id: "656241b0c4ddfcae991f0b13",
    ballName: "Harry Potter crew",
    isAvailable: true,
    collection: "Harry Potter",
    shop: "Etsy",
    yearRelease: 2019,
    price: 15.99,
    imageUrl: "https://i.ibb.co/9nQ7X0R/harry-potter.webp",
    description:
      "Pack of Harry Potter Christmas balls, with the main cast. They are made of plush, filled with foam",
    isTengui: true,
  },
  {
    _id: "656241c6c4ddfcae991f4237",
    ballName: "My neighbor Totoro",
    isAvailable: true,
    collection: "My neighbor Totoro",
    shop: "Ebay",
    yearRelease: 2015,
    price: 20.5,
    imageUrl: "https://i.ibb.co/c1CykR8/totoro.webp",
    description: "My neighbor Totoro main cast glitter balls",
    isTengui: false,
  },
];

export default mockBalls;
