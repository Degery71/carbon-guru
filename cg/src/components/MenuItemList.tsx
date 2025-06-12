import Image from "next/image";

type MenuItem = {
  src: string;
  alt: string;
  item: string;
  description: string;
};

type Props = {
  items: MenuItem[];
};

export const MenuItemList = ({ items }: Props) => {
  return (
    <div>
      {items.map((menuItem, index) => (
        <div key={index} className="mb-4">
          <Image
            src={menuItem.src}
            width={400}
            height={400}
            alt={menuItem.alt}
          />
          <div className="font-extrabold text-white text-xl items-start">
            {menuItem.item}
          </div>
          <div className="font-extrabold text-white text-s items-start">
            {menuItem.description}
          </div>
        </div>
      ))}
    </div>
  );
};
