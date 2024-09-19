import { ImageSourcePropType } from "react-native";

export type Game = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  icon: ImageSourcePropType;
};

export type Tournament = {
  id: number;
  game: Game;
  location: string;
  date: Date;
  price: number;
  slotAvailable: number;
};

export const Games: Game[] = [
  {
    id: 0,
    name: "God of War Ragnarok",
    image: require("./assets/images/game_1.jpg"),
    icon: require("./assets/images/game_1_logo.png"),
  },
];

export const Tournaments: Tournament[] = [
  {
    id: 0,
    game: Games[0],
    location: "Online Tourney",
    date: new Date(),
    price: 0,
    slotAvailable: 3,
  },
  {
    id: 1,
    game: Games[0],
    location: "Online Tourney",
    date: new Date(),
    price: 0,
    slotAvailable: 3,
  },
  {
    id: 2,
    game: Games[0],
    location: "Online Tourney",
    date: new Date(),
    price: 0,
    slotAvailable: 3,
  },
  {
    id: 3,
    game: Games[0],
    location: "Online Tourney",
    date: new Date(),
    price: 0,
    slotAvailable: 3,
  },
  {
    id: 4,
    game: Games[0],
    location: "Online Tourney",
    date: new Date(),
    price: 0,
    slotAvailable: 3,
  },
];
