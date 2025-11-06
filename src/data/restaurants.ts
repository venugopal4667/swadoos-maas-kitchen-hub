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

// Menu item images
import upmaImg from "@/assets/menu-item-upma.jpg";
import tomatoBathImg from "@/assets/menu-item-tomato-bath.jpg";
import dalRiceImg from "@/assets/menu-item-dal-rice.jpg";
import sambarRiceImg from "@/assets/menu-item-sambar-rice.jpg";
import lemonRiceImg from "@/assets/menu-item-lemon-rice.jpg";
import curdRiceImg from "@/assets/menu-item-curd-rice.jpg";
import jeeraRiceImg from "@/assets/menu-item-jeera-rice.jpg";
import idlyImg from "@/assets/menu-item-idly.jpg";
import dosaImg from "@/assets/menu-item-dosa.jpg";
import uttapamImg from "@/assets/menu-item-uttapam.jpg";
import chickenPulaoImg from "@/assets/menu-item-chicken-pulao.jpg";
import muttonGonguraImg from "@/assets/menu-item-mutton-gongura.jpg";
import fishCurryImg from "@/assets/menu-item-fish-curry.jpg";
import prawnsFryImg from "@/assets/menu-item-prawns-fry.jpg";
import prawnsCurryImg from "@/assets/menu-item-prawns-curry.jpg";
import pesarattuImg from "@/assets/menu-item-pesarattu.jpg";
import gobiRiceImg from "@/assets/menu-item-gobi-rice.jpg";
import ladiesFingerImg from "@/assets/menu-item-ladies-finger.jpg";

export interface MenuItem {
  name: string;
  price: number;
  image: string;
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
      { name: "Millet Upma", price: 60, image: upmaImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
      { name: "Dal Rice", price: 90, image: dalRiceImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Curd Rice", price: 65, image: curdRiceImg },
      { name: "Jeera Rice", price: 75, image: jeeraRiceImg },
      { name: "Idly", price: 50, image: idlyImg },
      { name: "Dosa", price: 60, image: dosaImg },
      { name: "Uttapam", price: 70, image: uttapamImg },
    ],
  },
  {
    id: "ghar-ka-zaika",
    name: "GharKaZaika",
    emoji: "🍛",
    description: "Simple homemade comfort meals",
    image: gharkaZaikaImg,
    menu: [
      { name: "Dal Rice", price: 90, image: dalRiceImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Curd Rice", price: 65, image: curdRiceImg },
      { name: "Millet Upma", price: 60, image: upmaImg },
      { name: "Pesarattu", price: 75, image: pesarattuImg },
      { name: "Idly", price: 50, image: idlyImg },
      { name: "Dosa", price: 60, image: dosaImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
      { name: "Uttapam", price: 70, image: uttapamImg },
    ],
  },
  {
    id: "ammas-kitchen",
    name: "Amma's Kitchen",
    emoji: "🍗",
    description: "Traditional homely dishes — both veg & non-veg",
    image: ammasKitchenImg,
    menu: [
      { name: "Chicken Pulao", price: 180, image: chickenPulaoImg },
      { name: "Mutton Gongura", price: 250, image: muttonGonguraImg },
      { name: "Fish Curry", price: 200, image: fishCurryImg },
      { name: "Prawns Fry", price: 280, image: prawnsFryImg },
      { name: "Prawns Curry", price: 270, image: prawnsCurryImg },
      { name: "Dal Rice", price: 90, image: dalRiceImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
      { name: "Curd Rice", price: 65, image: curdRiceImg },
    ],
  },
  {
    id: "zaika-gharana",
    name: "Zaika Gharana",
    emoji: "🍲",
    description: "Rich, flavorful, traditional dishes",
    image: zaikaGharanaImg,
    menu: [
      { name: "Chicken Pulao", price: 180, image: chickenPulaoImg },
      { name: "Mutton Gongura", price: 250, image: muttonGonguraImg },
      { name: "Fish Curry", price: 200, image: fishCurryImg },
      { name: "Prawns Curry", price: 270, image: prawnsCurryImg },
      { name: "Prawns Fry", price: 280, image: prawnsFryImg },
      { name: "Gobi Rice", price: 110, image: gobiRiceImg },
      { name: "Jeera Rice", price: 75, image: jeeraRiceImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
    ],
  },
  {
    id: "rasoda-tales",
    name: "Rasoda Tales",
    emoji: "🫕",
    description: "Vegetarian specialties with homely touch",
    image: rasodaTalesImg,
    menu: [
      { name: "Millet Upma", price: 60, image: upmaImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Curd Rice", price: 65, image: curdRiceImg },
      { name: "Pesarattu", price: 75, image: pesarattuImg },
      { name: "Idly", price: 50, image: idlyImg },
      { name: "Dosa", price: 60, image: dosaImg },
      { name: "Uttapam", price: 70, image: uttapamImg },
      { name: "Ladies Finger Curry", price: 120, image: ladiesFingerImg },
    ],
  },
  {
    id: "swad-sutra",
    name: "Swad Sutra",
    emoji: "🍢",
    description: "Signature mix of veg comfort dishes",
    image: swadSutraImg,
    menu: [
      { name: "Millet Upma", price: 60, image: upmaImg },
      { name: "Dal Rice", price: 90, image: dalRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Curd Rice", price: 65, image: curdRiceImg },
      { name: "Gobi Rice", price: 110, image: gobiRiceImg },
      { name: "Jeera Rice", price: 75, image: jeeraRiceImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
      { name: "Pesarattu", price: 75, image: pesarattuImg },
      { name: "Dosa", price: 60, image: dosaImg },
      { name: "Uttapam", price: 70, image: uttapamImg },
    ],
  },
  {
    id: "mitti-ki-rasoi",
    name: "Mitti Ki Rasoi",
    emoji: "🍚",
    description: "Earthy, traditional Andhra-style flavors",
    image: mittiKiRasoiImg,
    menu: [
      { name: "Mutton Gongura", price: 250, image: muttonGonguraImg },
      { name: "Chicken Pulao", price: 180, image: chickenPulaoImg },
      { name: "Fish Curry", price: 200, image: fishCurryImg },
      { name: "Prawns Fry", price: 280, image: prawnsFryImg },
      { name: "Prawns Curry", price: 270, image: prawnsCurryImg },
      { name: "Dal Rice", price: 90, image: dalRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Curd Rice", price: 65, image: curdRiceImg },
      { name: "Jeera Rice", price: 75, image: jeeraRiceImg },
    ],
  },
  {
    id: "ghar-se-khaana",
    name: "GharSeKhaana",
    emoji: "🍛",
    description: "Comforting all-day meals — vegetarian focus",
    image: gharSeKhaanaImg,
    menu: [
      { name: "Millet Upma", price: 60, image: upmaImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
      { name: "Dal Rice", price: 90, image: dalRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Curd Rice", price: 65, image: curdRiceImg },
      { name: "Gobi Rice", price: 110, image: gobiRiceImg },
      { name: "Jeera Rice", price: 75, image: jeeraRiceImg },
      { name: "Idly", price: 50, image: idlyImg },
      { name: "Dosa", price: 60, image: dosaImg },
    ],
  },
  {
    id: "nanis-rasoi",
    name: "Nani's Rasoi",
    emoji: "🧆",
    description: "Old-fashioned, soul-touching home meals",
    image: nanisRasoiImg,
    menu: [
      { name: "Chicken Pulao", price: 180, image: chickenPulaoImg },
      { name: "Mutton Gongura", price: 250, image: muttonGonguraImg },
      { name: "Fish Curry", price: 200, image: fishCurryImg },
      { name: "Prawns Curry", price: 270, image: prawnsCurryImg },
      { name: "Dal Rice", price: 90, image: dalRiceImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Curd Rice", price: 65, image: curdRiceImg },
      { name: "Ladies Finger Curry", price: 120, image: ladiesFingerImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
    ],
  },
  {
    id: "tadka-tales",
    name: "Tadka Tales",
    emoji: "🥘",
    description: "Fusion of spicy, flavorful dishes",
    image: tadkaTalesImg,
    menu: [
      { name: "Chicken Pulao", price: 180, image: chickenPulaoImg },
      { name: "Prawns Fry", price: 280, image: prawnsFryImg },
      { name: "Mutton Gongura", price: 250, image: muttonGonguraImg },
      { name: "Gobi Rice", price: 110, image: gobiRiceImg },
      { name: "Jeera Rice", price: 75, image: jeeraRiceImg },
      { name: "Tomato Bath Rice", price: 80, image: tomatoBathImg },
      { name: "Sambar Rice", price: 95, image: sambarRiceImg },
      { name: "Lemon Rice", price: 70, image: lemonRiceImg },
      { name: "Dosa", price: 60, image: dosaImg },
      { name: "Uttapam", price: 70, image: uttapamImg },
    ],
  },
];
