import Image from "next/image";

type MenuItem = {
  src: string;
  alt: string;
  item: string;
  price: string;
  description: string;
};

type Props = {
  items: MenuItem[];
};

export const MenuItemList = ({ items }: Props) => {
  return (
    <div className="">
      {items.map((menuItem, index) => (
        <div key={index} className="m-4">
          <Image
            src={menuItem.src}
            width={400}
            height={400}
            alt={menuItem.alt}
          />
          <div className="flex justify-between">
            <div className="font-extrabold text-white text-xl">
              {menuItem.item}
            </div>
            <div className="font-extrabold text-white text-xl">
              {menuItem.price}
            </div>
          </div>
          <div className="font-extrabold text-white text-s">
            {menuItem.description}
          </div>
        </div>
      ))}
    </div>
  );
};
