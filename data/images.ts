/**
 * PLACEHOLDER PHOTOS
 * ------------------
 * Every image on the site is a stock Unsplash photo, NOT a photo of Misheel's products.
 * TODO: Replace each URL with a real photo. The easiest way:
 *   1. Drop files into /public/images (e.g. /public/images/honey-cake.jpg)
 *   2. Change the value here to "/images/honey-cake.jpg"
 * If a URL fails to load, <PlaceholderImage> falls back to a soft gradient block.
 */
const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const photos = {
  cheesecake: unsplash("1533134242443-d4fd215305ad"), // TODO: real photo
  layerCake: unsplash("1571115177098-24ec42ed204d"), // TODO: real photo
  chocolateCake: unsplash("1578985545062-69928b1d9587"), // TODO: real photo
  berryCake: unsplash("1464349095431-e9a21285b5f3"), // TODO: real photo
  creamCake: unsplash("1565958011703-44f9829ba187"), // TODO: real photo
  croissants: unsplash("1555507036-ab1f4038808a"), // TODO: real photo
  pastries: unsplash("1486427944299-d1955d23e34d"), // TODO: real photo
  cinnamonRolls: unsplash("1509365465985-25d11c17e812"), // TODO: real photo
  macarons: unsplash("1569864358642-9d1684040f43"), // TODO: real photo
  cookies: unsplash("1558961363-fa8fdf82db35"), // TODO: real photo
  breadLoaves: unsplash("1509440159596-0249088772ff"), // TODO: real photo
  baguette: unsplash("1568471173242-461f0a730452"), // TODO: real photo
  ryeBread: unsplash("1549931319-a545dcf3bc73"), // TODO: real photo
  softBread: unsplash("1517433670267-08bbd4be890f"), // TODO: real photo
  birthdayCake: unsplash("1563729784474-d77dbb933a9e"), // TODO: real photo
  pinkCake: unsplash("1535141192574-5d4897c12636"), // TODO: real photo
  weddingCake: unsplash("1535254973040-607b474cb50d"), // TODO: real photo
  cupcakes: unsplash("1426869884541-df7117556757"), // TODO: real photo
  baker: unsplash("1556910103-1c02745aae4d"), // TODO: photo of Misheel / the kitchen
} as const;
