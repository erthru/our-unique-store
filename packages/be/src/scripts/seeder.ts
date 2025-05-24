import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import { ulid } from "ulid";

const prisma = new PrismaClient();

const data = [
  {
    name: "Used for iPhone 13 Pro 512GB Storage 5G Display Mobile Phone with US Version",
    price: 199,
    imageUrls: [
      "https://s.alicdn.com/@sc04/kf/Hd1e4340243c34117884060c9565edcfe6.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H9e9b3de3e2d8472fae58d8a2aee07961T.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/Ha5da41911163498098b4cd15b48cb6a7p.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/Hb4dc9aac586a4c39a5f7161a7ae66eeel.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/Hb9eb6e331f494eed9292f124e095aeabY.jpg_720x720q50.jpg",
    ],
    storeName: "Guangzhou Haomi Digital Technology Co., Ltd.",
  },
  {
    name: "7plus Low Prices 100% Original Used Mobile Phones Unlocked Second Hand Smartphone for iphone 7plus 32GB 128GB",
    price: 69,
    imageUrls: [
      "https://s.alicdn.com/@sc04/kf/H7f0bb01feee24054b167503f595baa1cB.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H2893ecd731a24cb3838c466597c3aa36K.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H91977e4760d846f6b38eea454efc3677g.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H652965fac5994861be379dbcd2322bc4q.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H92555dbba71c42ce9169b378080ae002z.jpg_720x720q50.jpg",
    ],
    storeName: "Guangzhou Haomi Digital Technology Co., Ltd.",
  },
];

const main = async () => {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: data.map((item) => ({
      id: ulid(),
      sku: `sku-${Date.now()}`,
      slug: `${item.name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")}-${nanoid()}`,
      name: item.name,
      price: 199,
      imageUrls: item.imageUrls,
      stockQuantity: 10,
      storeName: item.storeName,
      storeReputation: Math.floor(Math.random() * 5) + 1,
    })),
  });
};

main()
  .then(() => {
    console.log("seeder done");
  })
  .catch((err) => console.error(err))
  .finally(async () => {
    await prisma.$disconnect();
  });
