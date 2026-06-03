import { assetPath } from "@/lib/asset";

interface IContentMenu {
  img: string;
  title: string;
  className?: string;
}
const SIZE = "h-32 w-32 flex justify-center items-center mt-6";
const listContentMenu: IContentMenu[] =
  [
    {
      img: assetPath('/images/apple.png'),
      title: 'Apple',
      className: SIZE
    },
    {
      img: assetPath('/images/nike.jpg'),
      title: 'Nike',
      className: SIZE
    },
    {
      img: assetPath('/images/adidas.jpg'),
      title: 'Adidas',
      className: SIZE
    },
    {
      img: assetPath('/images/puma.jpg'),
      title: 'Puma',
      className: SIZE
    },
    {
      img: assetPath('/images/redbull.jpg'),
      title: 'RedBull',
      className: SIZE
    },
    {
      img: assetPath('/images/pepsi.jpg'),
      title: 'Pepsi',
      className: SIZE
    },
    {
      img: assetPath('/images/heineken.jpg'),
      title: 'Heineken',
      className: SIZE
    },
    {
      img: assetPath('/images/Bundesliga.png'),
      title: 'Bundesliga',
      className: SIZE
    },
    {
      img: assetPath('/images/MILO.jpg'),
      title: 'Milo',
      className: SIZE
    },
    {
      img: assetPath('/images/chevrolet.jpg'),
      title: 'Chevrolet',
      className: SIZE
    },
    {
      img: assetPath('/images/Coca-Cola.png'),
      title: 'CocaCola',
      className: SIZE
    },
    {
      img: assetPath('/images/Tiger.png'),
      title: 'Tiger',
      className: SIZE
    },
    {
      img: assetPath('/images/Castrol.png'),
      title: 'Castrol',
      className: SIZE
    },
    {
      img: assetPath('/images/Chivas.png'),
      title: 'Chivas',
      className: SIZE
    },

  ];
export default listContentMenu;
