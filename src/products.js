const products = [
  {
    id: 1,
    rating: 5,
    reviews: [],
    price: 150,
    countInStock: 4,
    name: "Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip",
    category: "electronics",
    image:
      "https://m.media-amazon.com/images/I/51PbyjVSxsL._AC_SX679_.jpg",
    description:
      " Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Rose Gold (Latest Model), Charging Cable, User Manual Connectivity Bluetooth Headphone Design Behind the Neck Product Details Sweat Proof No Foldable/Collapsible Yes Deep Bass Yes Water Resistant No Monaural No Controls Volume Control, Magnetic Switch Control Other Features Magnetic Earpiece, Voice Assistance Support With Microphone Yes Sound Features Impedance 32 Ohms Connectivity Features Bluetooth Version 4.2 Battery Life 7 hrs Charging Time 2 Play Time 7 hrs Standby Time 100 hrs Dimensions Weight 19 g Warranty Domestic Warranty 1 Year Warranty Summary 1 Year Carry into Service Centre Warranty Warranty Service Type Carry-in to Service Centre or Call our Customer Care - 9360942527 Covered in Warranty Manufacturing Defects Not Covered in Warranty Any Physical Damage and Accessories",
  },
  {
    id: 2,
    rating: 5,
    reviews: [],
    price: 370,
    countInStock: 2,
    name: "Apple iPhone 11, 64GB, Yellow - Fully Unlocked (Renewed), SIM removal tool",
    category: "mobiles",
    image:
      "https://m.media-amazon.com/images/I/51PBqTnGQCL._AC_SX679_.jpg",
    description:
      "Product works and looks like new. Backed by the 90-day Amazon Renewed Guarantee and 32MP (F2.2) front camera 16.95 cm (6.7-inch) sAMOLED Plus - Infinity-O display, FHD+ capacitive touchscreen with 1080 x 2400 pixels resolution, Contrast Ratio: 78960:1 Memory, Storage & SIM: 6GB RAM, 128GB internal memory expandable up to 512GB | Dedicated Memory slot Android v10.0 operating system with 2.2GHz+1.8GHz Qualcomm | SD730G octa core processor",
  },
  {
    id: 3,
    rating: 4.25,
    reviews: [],
    price: 569,
    countInStock: 5,
    name: "2021 Newest Dell Inspiron 3000 Laptop, 15.6 HD LED-Backlit Display",
    category: "electronics",
    image:
      "https://m.media-amazon.com/images/I/81zuU5gsJ4L._AC_SX679_.jpg",
    description:
      "Intel Pentium Silver N5030 Processor, Online Meeting Ready, Webcam, HDMI, Win10 Home, Black (16GB RAM | 2TB HDD) (6MB Cache, up to 4.1 GHz)  laptop Windows 10 Home Single Language, English  videocard Intel® UHD Graphics with shared graphics memory  memory 8GB, 1x8GB, DDR4, 3200MHz  harddrive 512GB M.2 PCIe NVMe Solid State Drive  color Pebble (Top cover is Pebble color, Base and Palmrest are Black color)",
  },
  {
    id: 4,
    rating: 4.5,
    reviews: [],
    price: 22.99,
    countInStock: 5,
    name: "USB C Hub HDMI Adapter for MacBook Pro 2019/2018/2017",
    category: "electronics",
    image:
      "https://m.media-amazon.com/images/I/71Fz2A31r7L._AC_SX679_.jpg",
    description:
      "MOKiN 5 in 1 Dongle USB-C to HDMI, Sd/TF Card Reader and 2 Ports USB 3.0 (Silver, USB-C Hub (5-in-1): Extend one 4K UHD HDMI port, two supper speed USB 3. 0 ports, one SD menmory card slot and one TF momory card slot from one USB-C/thunderbolt 3/ type c port ",
  },
  {
    id: 5,
    rating: 5,
    reviews: [],
    price: 12.99,
    countInStock: 7,
    name: "Wireless Mouse, 2.4G Noiseless Mouse with USB Receiver, Windows System (Light Blue)",
    category: "electronics",
    image:
      "https://m.media-amazon.com/images/I/61OFdNSRluL._AC_SX679_.jpg",
    description:
      "Portable Computer Mice for PC, Tablet, Laptop with Windows System (Light Blue), Sleek design and responsive buttons, provides very soft click with less noise, no more disturbing for others with the loud clicking sound",
  },
  {
    id: 6,
    rating: 5,
    reviews: [],
    price: 34.99,
    countInStock: 6,
    name: "Wireless Keyboard and Mouse,JOYACCESS USB Slim Wireless Keyboard Mouse",
    category: "electronics",
    image:
      "https://m.media-amazon.com/images/I/61PNH6J1U6L._AC_SX679_.jpg",
    description:
      "Wireless Keyboard and Mouse,JOYACCESS USB Slim Wireless Keyboard Mouse with Numeric Keypad Compatible with iMac Mac PC Laptop Tablet Computer Windows (Silver White) & Storage Internal Storage128 GB ProcessorA12 Bionic Chip Phone Build & Convenience Height15.09 cms Width7.57 cms Thickness0.83 cms Weight194 grams Water ResistantYes SensorsBarometer, Accelerometer, Proximity, Ambient Light",
  },
  {
    id: 7,
    rating: 5,
    reviews: [],
    price: 74.99,
    countInStock: 6,
    name: "RiotPWR ESL Gaming Controller for iOS - Mobile Console Gaming",
    category: "electronics",
    image:
      "https://m.media-amazon.com/images/I/71XVGDVkCJL._SX522_.jpg",
    description:
      "Play Xbox xCloud, Playstation, Apple Arcade, COD Mobile & More. The MFI certified variant has a Lightning cable that plugs directly into your iOS device for the lowest latency connection available not to mention the direction connection means there is no risk of a dropped Bluetooth connection.",
  },
  {
    id: 8,
    rating: 5,
    reviews: [],
    price: 12.89,
    countInStock: 6,
    name: "FYY Electronic Organizer, Travel Cable Organizer Bag Pouch Electronic Accessories",
    category: "electronics",
    image:
      "https://m.media-amazon.com/images/I/81hLyL0rX2S._AC_SY450_.jpg",
    description:
      "FYY Electronic Organizer, Travel Cable Organizer Bag Pouch Electronic Accessories Carry Case Portable Waterproof Double Layers All-in-One Storage Bag for Cable, Cord, Charger, Phone, Earphone Black. ProcessorA12 Bionic Chip Phone Build & Convenience Height15.09 cms Width7.57 cms Thickness0.83 cms Weight194 grams Water ResistantYes SensorsBarometer, Accelerometer, Proximity, Ambient Light",
  },
  {
    id: 9,
    rating: 5,
    reviews: [],
    price: 65,
    countInStock: 6,
    name: "Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player",
    category: "electronics",
    image:
      "https://m.media-amazon.com/images/I/71Im8dBbQwL._AC_SX466_.jpg",
    description:
      "Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Aqua Turquoise (VSC-550BT-TU). THREE SPEED BELT-DRIVEN TURNTABLE - This 3-speed (33 1/3, 45, 78 rpm) suitcase record player features UPGRADED PREMIUM SOUND QUALITY and sits on sound isolating feet that prevent vibration. It is perfect for your living room, bedroom or office.",
  },
];

export default products;
