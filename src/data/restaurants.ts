import swadoosRasoiImg from "@/assets/restaurant-swadoos-rasoi.jpg";
import gharkaZaikaImg from "@/assets/restaurant-gharkazaika.jpg";
import ammasKitchenImg from "@/assets/restaurant-ammas-kitchen.jpg";
import zaikaGharanaImg from "@/assets/restaurant-zaika-gharana.jpg";
import rasodaTalesImg from "@/assets/restaurant-rasoda-tales.jpg";
import swadSutraImg from "@/assets/restaurant-swad-sutra.jpg";
import mittiKiRasoiImg from "@/assets/restaurant-mitti-ki-rasoi.jpg";
import gharSeKhaanaImg from "@/assets/restaurant-gharsekhaana.jpg";
import nanisRasoiImg from "@/assets/restaurant-nanis-rasoi.jpg";
import tadkaTalesImg from "@/assets/restaurant-tadka-tales.jpg";

export interface MenuItem {
  name: string;
  price: number;
  image?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  emoji: string;
  description: string;
  image: string;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: "swadoos-rasoi",
    name: "Swadoos Rasoi",
    emoji: "🏠",
    description: "Balanced mix of traditional home-style dishes",
    image: swadoosRasoiImg,
    menu: [
      { name: "Millet Upma", price: 60 },
      { name: "Tomato Bath Rice", price: 80 },
      { name: "Dal Rice", price: 90 },
      { name: "Sambar Rice", price: 95 },
      { name: "Lemon Rice", price: 70 },
      { name: "Curd Rice", price: 65 },
      { name: "Jeera Rice", price: 75 },
      { name: "Idly", price: 50 },
      { name: "Dosa", price: 60 },
      { name: "Uttapam", price: 70 },
    ],
  },
  {
    id: "ghar-ka-zaika",
    name: "GharKaZaika",
    emoji: "🍛",
    description: "Simple homemade comfort meals",
    image: gharkaZaikaImg,
    menu: [
      { name: "Dal Rice", price: 90 },
      { name: "Sambar Rice", price: 95 },
      { name: "Lemon Rice", price: 70 },
      { name: "Curd Rice", price: 65 },
      { name: "Millet Upma", price: 60 },
      { name: "Pesarattu", price: 75 },
      { name: "Idly", price: 50 },
      { name: "Dosa", price: 60 },
      { name: "Tomato Bath Rice", price: 80 },
      { name: "Uttapam", price: 70 },
    ],
  },
  {
    id: "ammas-kitchen",
    name: "Amma's Kitchen",
    emoji: "🍗",
    description: "Traditional homely dishes — both veg & non-veg",
    image: ammasKitchenImg,
    menu: [
      { name: "Chicken Pulao", price: 180 },
      { name: "Mutton Gongura", price: 250 },
      { name: "Fish Curry", price: 200 },
      { name: "Prawns Fry", price: 280 },
      { name: "Prawns Curry", price: 270 },
      { name: "Dal Rice", price: 90 },
      { name: "Sambar Rice", price: 95 },
      { name: "Lemon Rice", price: 70 },
      { name: "Tomato Bath Rice", price: 80 },
      { name: "Curd Rice", price: 65 },
    ],
  },
  {
    id: "zaika-gharana",
    name: "Zaika Gharana",
    emoji: "🍲",
    description: "Rich, flavorful, traditional dishes",
    image: zaikaGharanaImg,
    menu: [
      { name: "Chicken Pulao", price: 180 },
      { name: "Mutton Gongura", price: 250 },
      { name: "Fish Curry", price: 200 },
      { name: "Prawns Curry", price: 270 },
      { name: "Prawns Fry", price: 280 },
      { name: "Gobi Rice", price: 110 },
      { name: "Jeera Rice", price: 75 },
      { name: "Tomato Bath Rice", price: 80 },
      { name: "Sambar Rice", price: 95 },
      { name: "Lemon Rice", price: 70 },
    ],
  },
  {
    id: "rasoda-tales",
    name: "Rasoda Tales",
    emoji: "🫕",
    description: "Vegetarian specialties with homely touch",
    image: rasodaTalesImg,
    menu: [
      { name: "Millet Upma", price: 60 },
      { name: "Tomato Bath Rice", price: 80 },
      { name: "Sambar Rice", price: 95 },
      { name: "Lemon Rice", price: 70 },
      { name: "Curd Rice", price: 65 },
      { name: "Pesarattu", price: 75 },
      { name: "Idly", price: 50 },
      { name: "Dosa", price: 60 },
      { name: "Uttapam", price: 70 },
      { name: "Ladies Finger Curry", price: 120 },
    ],
  },
  {
    id: "swad-sutra",
    name: "Swad Sutra",
    emoji: "🍢",
    description: "Signature mix of veg comfort dishes",
    image: swadSutraImg,
    menu: [
      { name: "Millet Upma", price: 60 },
      { name: "Dal Rice", price: 90 },
      { name: "Lemon Rice", price: 70 },
      { name: "Curd Rice", price: 65 },
      { name: "Gobi Rice", price: 110 },
      { name: "Jeera Rice", price: 75 },
      { name: "Tomato Bath Rice", price: 80 },
      { name: "Pesarattu", price: 75 },
      { name: "Dosa", price: 60 },
      { name: "Uttapam", price: 70 },
    ],
  },
  {
    id: "mitti-ki-rasoi",
    name: "Mitti Ki Rasoi",
    emoji: "🍚",
    description: "Earthy, traditional Andhra-style flavors",
    image: mittiKiRasoiImg,
    menu: [
      { name: "Mutton Gongura", price: 250 },
      { name: "Chicken Pulao", price: 180 },
      { name: "Fish Curry", price: 200 },
      { name: "Prawns Fry", price: 280 },
      { name: "Prawns Curry", price: 270 },
      { name: "Dal Rice", price: 90 },
      { name: "Lemon Rice", price: 70 },
      { name: "Sambar Rice", price: 95 },
      { name: "Curd Rice", price: 65 },
      { name: "Jeera Rice", price: 75 },
    ],
  },
  {
    id: "ghar-se-khaana",
    name: "GharSeKhaana",
    emoji: "🍛",
    description: "Comforting all-day meals — vegetarian focus",
    image: gharSeKhaanaImg,
    menu: [
      { name: "Millet Upma", price: 60 },
      { name: "Tomato Bath Rice", price: 80 },
      { name: "Dal Rice", price: 90 },
      { name: "Lemon Rice", price: 70 },
      { name: "Sambar Rice", price: 95 },
      { name: "Curd Rice", price: 65 },
      { name: "Gobi Rice", price: 110 },
      { name: "Jeera Rice", price: 75 },
      { name: "Idly", price: 50 },
      { name: "Dosa", price: 60 },
    ],
  },
  {
    id: "nanis-rasoi",
    name: "Nani's Rasoi",
    emoji: "🧆",
    description: "Old-fashioned, soul-touching home meals",
    image: nanisRasoiImg,
    menu: [
      { name: "Chicken Pulao", price: 180 },
      { name: "Mutton Gongura", price: 250 },
      { name: "Fish Curry", price: 200 },
      { name: "Prawns Curry", price: 270 },
      { name: "Dal Rice", price: 90 },
      { name: "Sambar Rice", price: 95 },
      { name: "Lemon Rice", price: 70 },
      { name: "Curd Rice", price: 65 },
      { name: "Ladies Finger Curry", price: 120 },
      { name: "Tomato Bath Rice", price: 80 },
    ],
  },
  {
    id: "tadka-tales",
    name: "Tadka Tales",
    emoji: "🥘",
    description: "Fusion of spicy, flavorful dishes",
    image: tadkaTalesImg,
    menu: [
      { name: "Chicken Pulao", price: 180 },
      { name: "Prawns Fry", price: 280 },
      { name: "Mutton Gongura", price: 250 },
      { name: "Gobi Rice", price: 110 },
      { name: "Jeera Rice", price: 75 },
      { name: "Tomato Bath Rice", price: 80 },
      { name: "Sambar Rice", price: 95 },
      { name: "Lemon Rice", price: 70 },
      { name: "Dosa", price: 60 },
      { name: "Uttapam", price: 70 },
    ],
  },
];
