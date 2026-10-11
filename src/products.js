// Product catalog. Names and descriptions are written for this store; photos
// are public-domain stock (see src/assets/products/CREDITS.md). Before launch,
// check specs and prices against what you actually stock and swap in your own
// product photos.
import earbuds from "./assets/products/earbuds.jpg";
import headphones from "./assets/products/headphones.jpg";
import speaker from "./assets/products/speaker.jpg";
import laptop from "./assets/products/laptop.jpg";
import monitor from "./assets/products/monitor.jpg";
import webcam from "./assets/products/webcam.jpg";
import phone from "./assets/products/phone.jpg";
import watch from "./assets/products/watch.jpg";
import chargingDock from "./assets/products/charging-dock.jpg";
import ganCharger from "./assets/products/gan-charger.jpg";
import powerBank from "./assets/products/power-bank.jpg";

const products = [
  {
    id: 1,
    rating: 4.5,
    reviews: [],
    price: 129.99,
    countInStock: 12,
    name: "Wireless Noise-Cancelling Earbuds with Spatial Audio",
    category: "audio",
    image: earbuds,
    description:
      "Adaptive active noise cancellation that adjusts to your surroundings, plus a transparency mode for when you need to hear the world. Spatial audio, multipoint Bluetooth 5.4 to stay connected to your phone and laptop at once, and up to 8 hours of listening (32 hours with the case). The pocket-size case charges over USB-C or any Qi wireless pad. IPX5 sweat and splash resistant.",
  },
  {
    id: 2,
    rating: 4.5,
    reviews: [],
    price: 199.99,
    countInStock: 8,
    name: "Over-Ear Wireless Headphones with Hybrid ANC",
    category: "audio",
    image: headphones,
    description:
      "Large 50mm drivers deliver deep, detailed sound, and hybrid noise cancellation quiets planes, trains and open offices. Get up to 60 hours of battery life with ANC off; a 10-minute USB-C charge adds 5 hours. Plush memory-foam ear cushions, a detachable boom mic for calls and gaming, and a 3.5mm wired mode when the battery runs out.",
  },
  {
    id: 3,
    rating: 4,
    reviews: [],
    price: 49.99,
    countInStock: 20,
    name: "Portable Bluetooth Speaker, Waterproof IP67",
    category: "audio",
    image: speaker,
    description:
      "Small enough for a backpack pocket, loud enough for the backyard. IP67 dust- and waterproof, so it survives the beach and the pool. Up to 15 hours of playtime, USB-C charging, and stereo pairing with a second speaker for wider sound. Built-in mic for hands-free calls.",
  },
  {
    id: 4,
    rating: 4.5,
    reviews: [],
    price: 1099.99,
    countInStock: 5,
    name: '14" AI Laptop, 16GB RAM, 1TB SSD, 2.8K OLED Display',
    category: "computers",
    image: laptop,
    description:
      "A thin-and-light laptop built for AI features, with a dedicated neural processor (NPU) for on-device tasks like live captions, background blur and photo editing. The 14-inch 2.8K OLED display is vivid and sharp. 16GB of fast memory and a 1TB SSD keep everything snappy, and you get all-day battery life. Two USB-C/Thunderbolt ports, USB-A, HDMI, Wi-Fi 7, and a 1080p webcam with privacy shutter.",
  },
  {
    id: 5,
    rating: 5,
    reviews: [],
    price: 549.99,
    countInStock: 3,
    name: '27" QHD OLED Gaming Monitor, 240Hz, 0.03ms',
    category: "computers",
    image: monitor,
    description:
      "True blacks and infinite contrast from a 27-inch 2560x1440 OLED panel. A 240Hz refresh rate and 0.03ms response time make fast games feel incredibly smooth, and G-Sync and FreeSync compatibility prevent tearing. HDR True Black 400, 99% DCI-P3 color, and a USB-C port with 90W charging, so one cable powers your laptop. Height, tilt and swivel adjustable stand.",
  },
  {
    id: 6,
    rating: 4,
    reviews: [],
    price: 89.99,
    countInStock: 15,
    name: "4K Webcam with AI Auto-Framing and Dual Mics",
    category: "computers",
    image: webcam,
    description:
      "Look sharp on every call with 4K resolution and automatic light correction. AI auto-framing keeps you centered as you move, and dual noise-reducing microphones pick up your voice, not the keyboard. Plug-and-play over USB-C with a universal clip for monitors and laptops, plus a built-in privacy cover.",
  },
  {
    id: 7,
    rating: 4.5,
    reviews: [],
    price: 699.99,
    countInStock: 6,
    name: "Unlocked 5G Smartphone, 256GB, 6.5\" 120Hz Display",
    category: "phones & wearables",
    image: phone,
    description:
      "A fast, unlocked 5G phone that works with major US carriers. The 6.5-inch 120Hz AMOLED display is bright enough for direct sun. The 50MP main camera with optical image stabilization takes great low-light shots, and built-in AI tools help you edit photos, summarize notes and translate calls. 256GB of storage, a 5,000mAh battery with fast charging, and Qi2 magnetic wireless charging.",
  },
  {
    id: 8,
    rating: 4.5,
    reviews: [],
    price: 249.99,
    countInStock: 2,
    name: "GPS Smartwatch with Health Tracking, 14-Day Battery",
    category: "phones & wearables",
    image: watch,
    description:
      "A rugged smartwatch that tracks heart rate, blood oxygen, sleep stages and stress around the clock. Built-in multi-band GPS maps your runs, rides and hikes accurately, even without your phone. It has 100+ sport modes, smartphone notifications and a battery that lasts up to 14 days. 5 ATM water resistant for swimming.",
  },
  {
    id: 9,
    rating: 4,
    reviews: [],
    price: 59.99,
    countInStock: 10,
    name: "3-in-1 Wireless Charging Station for Phone, Watch and Earbuds",
    category: "accessories",
    image: chargingDock,
    description:
      "Charge your phone, smartwatch and earbuds at the same time from one tidy stand on your nightstand or desk. The phone pad supports fast wireless charging in portrait or landscape, so you can watch videos while it charges. Foreign-object detection and temperature control keep your devices safe. Includes a USB-C cable and wall adapter.",
  },
  {
    id: 10,
    rating: 5,
    reviews: [],
    price: 39.99,
    countInStock: 25,
    name: "65W GaN USB-C Fast Charger with 6ft Cable",
    category: "accessories",
    image: ganCharger,
    description:
      "GaN (gallium nitride) technology makes this charger about half the size of a standard laptop brick. 65W USB-C Power Delivery fast-charges laptops, tablets and phones, taking most phones from 0 to 50% in about 30 minutes. Comes with a braided 6ft USB-C to USB-C cable and a USB-C to USB-A adapter for older accessories.",
  },
  {
    id: 11,
    rating: 4,
    reviews: [],
    price: 29.99,
    countInStock: 18,
    name: "Slim 10,000mAh Portable Power Bank, 20W USB-C",
    category: "accessories",
    image: powerBank,
    description:
      "Keep your phone going all day: 10,000mAh fully charges most phones about twice. 20W USB-C fast charging works in both directions, so you can recharge the power bank itself quickly too. There's a second USB-A port for charging two devices at once, and an aluminum shell that slips into a pocket. Approved for carry-on luggage.",
  },
];

export default products;
