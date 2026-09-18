import audiA3Red from "../assets/fleet/audi-a3-convertible.png";
import audiA3White from "../assets/fleet/audi-a3-convertible-white.png";
import audiA4 from "../assets/fleet/audi-a4.png";
import audiA6 from "../assets/fleet/audi-a6-white.png";
import audiQ7 from "../assets/fleet/audi-q7-white.png";
import bentleyRed from "../assets/fleet/bentley-convertible-red.png";
import bentleySunroof from "../assets/fleet/bentley-sunroof-white.png";
import bmw5 from "../assets/fleet/bmw-5-series-white.png";
import bmwConvertible from "../assets/fleet/bmw-convertible-white.png";
import defender from "../assets/fleet/land-rover-defender-white.png";
import fortuner from "../assets/fleet/toyota-fortuner.png";
import gwagon from "../assets/fleet/mercedes-g-wagon-white.png";
import hummer from "../assets/fleet/hummer-h2-white.png";
import hyundaiVerna from "../assets/fleet/hyundai-verna-white.png";
import jaguarXf from "../assets/fleet/jaguar-xf-white.png";
import jaguarXjl from "../assets/fleet/jaguar-xjl-white.png";
import limousine from "../assets/fleet/limousine-long-new-white.png";
import maybach from "../assets/fleet/mercedes-maybach-white.png";
import mercedesC300 from "../assets/fleet/mercedes-c-300-white.png";
import mercedesCla from "../assets/fleet/mercedes-cla-white.png";
import mercedesConvertible from "../assets/fleet/mercedes-convertible-white.png";
import mercedesConvertibleRed from "../assets/fleet/mercedes-convertible-red.png";
import mercedesEClass from "../assets/fleet/mercedes-e-class-white.png";
import miniRed from "../assets/fleet/mini-cooper-convertible-red.png";
import mustangRed from "../assets/fleet/mustang-gt-red.png";
import porscheBoxsterRed from "../assets/fleet/porsche-boxster-red.png";
import rangeRoverEvoqueRed from "../assets/fleet/range-rover-evoque-convertible-red.png";
import rangeRoverSport from "../assets/fleet/range-rover-sport-sv-white.png";
import rangeRoverVelar from "../assets/fleet/range-rover-velar-autobiography-white.png";
import rollsRoyce from "../assets/fleet/rolls-royce-ghost.png";
import vintage from "../assets/fleet/vintage-luxury-white.png";
import limousineExteriorFront from "../assets/limousine/limousine-exterior-front.jpg.asset.json";
import limousineExteriorAngle from "../assets/limousine/limousine-exterior-angle.jpg.asset.json";
import limousineInteriorSeat from "../assets/limousine/limousine-interior-seat.jpg.asset.json";
import limousineInteriorBar from "../assets/limousine/limousine-interior-bar.jpg.asset.json";
import mercedesConvertibleFront from "../assets/real-fleet/mercedes-convertible-front.jpg.asset.json";
import mercedesConvertibleAngle from "../assets/real-fleet/mercedes-convertible-angle.jpg.asset.json";
import audiA6Front from "../assets/real-fleet/audi-a6-front.jpg.asset.json";
import audiA6Rear from "../assets/real-fleet/audi-a6-rear.jpg.asset.json";
import bmw5Front from "../assets/real-fleet/bmw-5-series-front.jpg.asset.json";
import bmw5Rear from "../assets/real-fleet/bmw-5-series-rear.jpg.asset.json";
import rangeRoverSportFront from "../assets/real-fleet/range-rover-sport-front.jpg.asset.json";
import rangeRoverSportAngle from "../assets/real-fleet/range-rover-sport-angle.jpg.asset.json";
import rangeRoverSportRear from "../assets/real-fleet/range-rover-sport-rear.jpg.asset.json";
import bentleyConvertibleFront from "../assets/real-fleet/bentley-convertible-front.jpg.asset.json";
import bentleyConvertibleRear from "../assets/real-fleet/bentley-convertible-rear.jpg.asset.json";
import bentleyConvertibleSide from "../assets/real-fleet/bentley-convertible-side.jpg.asset.json";
import audiA3ConvertibleFront from "../assets/real-fleet/audi-a3-convertible-front.jpg.asset.json";
import audiA3ConvertibleRear from "../assets/real-fleet/audi-a3-convertible-rear.jpg.asset.json";
import porscheBoxsterRoof from "../assets/real-fleet/porsche-boxster-roof.jpg.asset.json";
import porscheBoxsterOpen from "../assets/real-fleet/porsche-boxster-open.jpg.asset.json";

export const WHATSAPP_NUMBER = "919990569473";
export const PHONE_LINK = "tel:+919990569473";
export const PHONE_DISPLAY = "+91 99905 69473";

export type FleetCar = {
  name: string;
  category: string;
  image: string;
  alt: string;
  priceValue: number;
  price: string;
  duration: string;
  speed: string;
  seats: string;
  airbags: string;
  transmission: string;
};

const rawCars: Array<[string, string, string, number, string, string, string, string]> = [
  ["Mercedes Convertible White", "Luxury Convertible", mercedesConvertible, 20000, "250 km/h", "4 seats", "7 airbags", "9-speed Automatic"],
  ["Audi A6 White", "Executive Sedan", audiA6, 10000, "250 km/h", "5 seats", "8 airbags", "7-speed Automatic"],
  ["Bmw 5 Series White", "Luxury Sedan", bmw5, 12000, "250 km/h", "5 seats", "6 airbags", "8-speed Automatic"],
  ["Bentley Convertible Red", "Luxury Convertible", bentleyRed, 70000, "335 km/h", "4 seats", "8 airbags", "8-speed Automatic"],
  ["Audi A3 Convertible White", "Convertible", audiA3White, 16000, "220 km/h", "4 seats", "6 airbags", "7-speed Automatic"],
  ["Porsche Boxster Red", "Sports Convertible", porscheBoxsterRed, 120000, "275 km/h", "2 seats", "6 airbags", "7-speed PDK"],
  ["Jaguar Xf White", "Luxury Sedan", jaguarXf, 13000, "250 km/h", "5 seats", "7 airbags", "8-speed Automatic"],
  ["Mercedes Convertible Red", "Luxury Convertible", mercedesConvertibleRed, 20000, "250 km/h", "4 seats", "7 airbags", "9-speed Automatic"],
  ["Audi Q7 7 Seater White", "7-Seater SUV", audiQ7, 16000, "234 km/h", "7 seats", "8 airbags", "8-speed Automatic"],
  ["Mercedes C 300 White", "Luxury Sedan", mercedesC300, 14000, "250 km/h", "5 seats", "7 airbags", "9-speed Automatic"],
  ["Mercedes Cla White", "Luxury Sedan", mercedesCla, 13000, "250 km/h", "5 seats", "7 airbags", "8-speed Automatic"],
  ["Jaguar Xjl White", "Luxury Sedan", jaguarXjl, 20000, "250 km/h", "5 seats", "8 airbags", "8-speed Automatic"],
  ["Mini Cooper Convertible Red", "Convertible", miniRed, 15000, "210 km/h", "4 seats", "6 airbags", "7-speed Automatic"],
  ["Rolls Royce Sedan White", "Ultra Luxury Sedan", rollsRoyce, 200000, "250 km/h", "5 seats", "8 airbags", "8-speed Automatic"],
  ["Mercedes Maybach White", "Ultra Luxury Sedan", maybach, 40000, "250 km/h", "4–5 seats", "8 airbags", "9-speed Automatic"],
  ["Gwagon White", "Luxury SUV", gwagon, 90000, "210 km/h", "5 seats", "9 airbags", "9-speed Automatic"],
  ["Audi A4 White", "Executive Sedan", audiA4, 7000, "250 km/h", "5 seats", "8 airbags", "7-speed Automatic"],
  ["Limousine Long New White", "Luxury Limousine", limousine, 18000, "180 km/h", "8 seats", "6 airbags", "9-speed Automatic"],
  ["Range Rover Evoque Convertible Red", "Convertible SUV", rangeRoverEvoqueRed, 75000, "209 km/h", "4 seats", "7 airbags", "9-speed Automatic"],
  ["Bmw Convertible White", "Convertible", bmwConvertible, 20000, "250 km/h", "4 seats", "6 airbags", "8-speed Automatic"],
  ["Audi A3 Convertible Red", "Convertible", audiA3Red, 18000, "220 km/h", "4 seats", "6 airbags", "7-speed Automatic"],
  ["Mustang GT Red", "Sports Coupe", mustangRed, 90000, "250 km/h", "4 seats", "8 airbags", "6-speed Manual"],
  ["Mercedes E Class White", "Luxury Sedan", mercedesEClass, 20000, "250 km/h", "5 seats", "7 airbags", "9-speed Automatic"],
  ["Vintages White", "Classic Car", vintage, 21000, "160 km/h", "4 seats", "2 airbags", "4-speed Manual"],
  ["Range Rover Velar White", "Luxury SUV", rangeRoverVelar, 40000, "225 km/h", "5 seats", "6 airbags", "8-speed Automatic"],
  ["Fortuner Legender White", "7-Seater SUV", fortuner, 10000, "175 km/h", "7 seats", "7 airbags", "6-speed Automatic"],
  ["Range Rover Sport White", "Luxury SUV", rangeRoverSport, 40000, "250 km/h", "5 seats", "8 airbags", "8-speed Automatic"],
  ["Bentley Sunroof White", "Luxury Sedan", bentleySunroof, 45000, "333 km/h", "5 seats", "8 airbags", "8-speed Automatic"],
  ["Hummee H2 White", "Luxury SUV", hummer, 48000, "160 km/h", "5–6 seats", "4 airbags", "4-speed Automatic"],
  ["Defender White", "Luxury SUV", defender, 45000, "191 km/h", "5–6 seats", "6 airbags", "8-speed Automatic"],
  ["Verna New Model White", "Premium Sedan", hyundaiVerna, 4000, "195 km/h", "5 seats", "6 airbags", "7-speed Automatic"],
];

export const fleetCars: FleetCar[] = rawCars.map(
  ([name, category, image, priceValue, speed, seats, airbags, transmission]) => ({
    name,
    category,
    image,
    alt: `${name} available for luxury car rental`,
    priceValue,
    price: `₹${priceValue.toLocaleString("en-IN")}`,
    duration: "13 hours",
    speed,
    seats,
    airbags,
    transmission,
  }),
);

const limousinePhotos = [
  { src: limousine, alt: "Limousine Long New White studio view" },
  { src: limousineExteriorFront.url, alt: "White wedding limousine decorated with flowers, front view" },
  { src: limousineExteriorAngle.url, alt: "White wedding limousine decorated with flowers, angled view" },
  { src: limousineInteriorSeat.url, alt: "Limousine passenger cabin with leather seating" },
  { src: limousineInteriorBar.url, alt: "Limousine cabin bar and entertainment area" },
];

export type CarPhoto = { src: string; alt: string; contain?: boolean };

export const realCarPhotos: Record<string, CarPhoto[]> = {
  "Mercedes Convertible White": [
    { src: mercedesConvertible, alt: "Mercedes Convertible White studio view", contain: true },
    { src: mercedesConvertibleFront.url, alt: "White Mercedes convertible front view" },
    { src: mercedesConvertibleAngle.url, alt: "White Mercedes convertible angled view" },
  ],
  "Audi A6 White": [
    { src: audiA6, alt: "Audi A6 White studio view", contain: true },
    { src: audiA6Front.url, alt: "White Audi A6 front view" },
    { src: audiA6Rear.url, alt: "White Audi A6 rear view" },
  ],
  "Bmw 5 Series White": [
    { src: bmw5, alt: "BMW 5 Series White studio view", contain: true },
    { src: bmw5Front.url, alt: "White BMW 5 Series front view" },
    { src: bmw5Rear.url, alt: "White BMW 5 Series rear view" },
  ],
  "Bentley Convertible Red": [
    { src: bentleyRed, alt: "Bentley Convertible Red studio view", contain: true },
    { src: bentleyConvertibleFront.url, alt: "Red Bentley convertible front view" },
    { src: bentleyConvertibleRear.url, alt: "Red Bentley convertible rear view" },
    { src: bentleyConvertibleSide.url, alt: "Red Bentley convertible side view" },
  ],
  "Audi A3 Convertible White": [
    { src: audiA3White, alt: "Audi A3 Convertible White studio view", contain: true },
    { src: audiA3ConvertibleFront.url, alt: "White Audi A3 convertible front view" },
    { src: audiA3ConvertibleRear.url, alt: "White Audi A3 convertible rear view" },
  ],
  "Porsche Boxster Red": [
    { src: porscheBoxsterRed, alt: "Porsche Boxster Red studio view", contain: true },
    { src: porscheBoxsterRoof.url, alt: "Red Porsche Boxster rear view with roof closed" },
    { src: porscheBoxsterOpen.url, alt: "Red Porsche Boxster angled view with roof open" },
  ],
  "Limousine Long New White": limousinePhotos.map((photo, index) => ({ ...photo, contain: index === 0 })),
  "Range Rover Sport White": [
    { src: rangeRoverSport, alt: "Range Rover Sport White studio view", contain: true },
    { src: rangeRoverSportFront.url, alt: "Black Range Rover Sport front view" },
    { src: rangeRoverSportAngle.url, alt: "Black Range Rover Sport angled view" },
    { src: rangeRoverSportRear.url, alt: "Black Range Rover Sport rear view" },
  ],
};

export function carPhotosFor(car: FleetCar): CarPhoto[] {
  return realCarPhotos[car.name] ?? [{ src: car.image, alt: car.alt, contain: true }];
}

export function bookingLink(car: FleetCar) {
  const message = `Hello Chaudhary Luxury Cars, I would like to book the ${car.name} (${car.category}). The listed starting price is ${car.price} for ${car.duration}. Please confirm availability, final price, and pickup details. I understand the package includes fuel, driver, decoration, and toll; extra kilometres and extra time depend on the car.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function findCar(name?: string): FleetCar {
  const match = name ? fleetCars.find((car) => car.name.toLowerCase() === name.toLowerCase()) : undefined;
  return match ?? fleetCars[0]!;
}
