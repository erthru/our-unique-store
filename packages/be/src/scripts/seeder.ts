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
    storeName: "Shenzhen Shuyuan Intelligent Selection Technology Co., Ltd.",
  },
  {
    name: "Wholesale 2024 13 Pro Max Unlocked Original 5G LTE Cheap Second Hand Used Mobile Phone Versions 11 12 13 14 XS Max 13Pro Max",
    price: 179,
    imageUrls: [
      "https://s.alicdn.com/@sc04/kf/H69fc6ffc56aa4222be69c4ba21a1040bv.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H6eb948ed421940cb996db8993d5aae83o.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H922fe04fa0554bab956231584d85a5516.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H73f72406ee1b482cbd2f7a1aad528d73Z.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H2f7d237129b54b0db92018df23f29c72o.jpg_720x720q50.jpg",
    ],
    storeName: "Shenzhen Xun Chong Technology Co., Ltd.",
  },
  {
    name: "Wholesale High Quality Original Used Mobile Phone for Phone 12Pro 12Pro Max 4g Mobile Phone 256g",
    price: 256,
    imageUrls: [
      "https://s.alicdn.com/@sc04/kf/Hd2b6cfb242a440959a7a1872569cb09a8.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H889776c8fd65407594a7459a6a2ff8caj.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/Hbbe1cb58f92a48c485a8978b0337e252o.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H62fe142b37754d37b535f8561669164bX.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H84b91bbb956c475ea707aab619dcddadI.jpg_720x720q50.jpg",
    ],
    storeName:
      "Quanzhou Fengze District Gudefeili Trading Firm (individual Business)",
  },
  {
    name: "Wholesale Used Mobile Phones for Phone 11 Used Cell Phones Wholesale Price B 64GB Storage Cheapest",
    price: 150,
    imageUrls: [
      "https://s.alicdn.com/@sc04/kf/H68ddd5a2352a4848b7983b90017ac228O.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H295b5b95f24048849eb133c5b5aec655M.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/Hc6148c23063d4378b57e6e6221357a00h.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/Ha9c5d5257def45bc83caecd7b8de72c7H.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H91621f07a53f44e9b44fcdbed53667a3H.jpg_720x720q50.jpg",
    ],
    storeName: "Dongguan Xunlin E-Commerce Co., Ltd.",
  },
  {
    name: "Original Used Unlock 99-100% New Cell 4g 5g 128gb 256gb X 11 12 13 Pro Max Second Hand Mobile Phone for 14 Pro Max",
    price: 722,
    imageUrls: [
      "https://s.alicdn.com/@sc04/kf/Hdd4e46f9ceb54458ad93117f853cfe22h.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H76a6770fe31441769fcafe1e1ccdc4374.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H7e7c7b9834fc436bb24afed1fc174c617.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H6a6d983a191e431aacd6a3c266c68e96I.jpg_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H8e0b7c4465db4b21825684208c27ca9eC.jpg_720x720q50.jpg",
    ],
    storeName: "Shenzhen Timing Technology Co., Ltd.",
  },
  {
    name: "Wholesale Price Good Condition Used Iphone15 5G Cellular Mobile Phones 6GB RAM 128GB/512GB Unlocked 15Plus 15 14Promax-Original",
    price: 465,
    imageUrls: [
      "https://s.alicdn.com/@sc04/kf/Hfe11d62800624136a76be306acd0bcd6Y.png_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H7dcac53abc584a7aa55cfb589dcef452D.png_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H37dcb2301a0c41e88fb94342276a9234V.png_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/H8bc9ee6a62eb4d4e859c46f93a349018A.png_720x720q50.jpg",
      "https://s.alicdn.com/@sc04/kf/Hc8a9b6a3533e4548a4b7c92f1e999c80W.png_720x720q50.jpg",
    ],
    storeName: "Shenzhen Zhongxing Communication Technology Co., Ltd.",
  },
];

const main = async () => {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: data.map((item) => ({
      id: ulid(),
      sku: `sku-${nanoid()}`,
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
