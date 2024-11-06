const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const properties = [
    {
      name: "Forest Cabin",
      tagline: "Escape to nature",
      category: "Cabin",
      image: "https://images.unsplash.com/photo-1470165515910-1f4a8cded6d2",
      country: "Sweden",
      description: "Wooden cabin surrounded by lush forest and wildlife.",
      price: 220,
      guests: 4,
      bedrooms: 2,
      beds: 3,
      baths: 1,
      amenities: "Fireplace, BBQ, Outdoor Deck",
      profileId: "user_2oTGLobcvLW3sFtiAuxuiRYL4Tq",
    },
    {
      name: "Vintage Airstream",
      tagline: "Retro adventure on wheels",
      category: "Airstream",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      country: "USA",
      description: "A vintage airstream in a scenic location.",
      price: 180,
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
      amenities: "WiFi, Kitchen, Air Conditioning",
      profileId: "user_2oTGLobcvLW3sFtiAuxuiRYL4Tq",
    },
    {
      name: "Cozy Tent",
      tagline: "Camping under the stars",
      category: "Tent",
      image: "https://images.unsplash.com/photo-1559099430-b65e5e5440a6",
      country: "Canada",
      description: "A simple tent setup with a breathtaking view.",
      price: 50,
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 0,
      amenities: "Outdoor Shower, BBQ",
      profileId: "user_2oTGLobcvLW3sFtiAuxuiRYL4Tq",
    },
    {
      name: "Warehouse Loft",
      tagline: "Industrial charm",
      category: "Warehouse",
      image: "https://images.unsplash.com/photo-1600607681015-8d7cfb0435b2",
      country: "USA",
      description: "Converted warehouse loft with industrial decor.",
      price: 200,
      guests: 6,
      bedrooms: 2,
      beds: 3,
      baths: 2,
      amenities: "WiFi, Gym, Parking",
      profileId: "user_2oTGLobcvLW3sFtiAuxuiRYL4Tq",
    },
    {
      name: "Fairytale Cottage",
      tagline: "Live in a storybook",
      category: "Cottage",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
      country: "UK",
      description: "A charming cottage with a fairytale vibe.",
      price: 150,
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 1,
      amenities: "Fireplace, Garden, Pet Friendly",
      profileId: "user_2oTGLobcvLW3sFtiAuxuiRYL4Tq",
    },
    {
      name: "Magical Hideaway",
      tagline: "Enchanted getaway",
      category: "Magic",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      country: "Iceland",
      description: "A magical, secluded retreat with otherworldly vibes.",
      price: 320,
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 1,
      amenities: "WiFi, Fireplace, Stargazing Deck",
      profileId: "user_2oTGLobcvLW3sFtiAuxuiRYL4Tq",
    },
    {
      name: "Container Home",
      tagline: "Eco-friendly living",
      category: "Container",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
      country: "Finland",
      description: "A sustainable container home in a serene setting.",
      price: 150,
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
      amenities: "WiFi, Solar Power, Air Conditioning",
      profileId: "user_2oTGLobcvLW3sFtiAuxuiRYL4Tq",
    },
    // Add more properties as needed for "Caravan," "Tiny," and "Lodge"
  ];

  for (const property of properties) {
    await prisma.property.create({
      data: property,
    });
  }

  console.log("Seeding completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
