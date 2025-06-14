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
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((menuItem, index) => (
        <div
          key={index}
          // className="w-full p-4 flex flex-col items-center" // Responsive widths
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-4 flex flex-col items-center" // Responsive widths
        >
          <div className="w-full flex justify-center mb-3">
            <Image
              src={menuItem.src}
              width={400}
              height={400}
              alt={menuItem.alt}
              placeholder="blur"
              // onError={}
              className="object-cover max-w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full">
            <div className="flex justify-between items-baseline">
              <h3 className="font-extrabold text-white text-lg md:text-xl">
                {menuItem.item}
              </h3>
              <span className="font-extrabold text-white text-lg md:text-xl">
                {menuItem.price}
              </span>
            </div>
            <p className="font-medium text-white/80 text-sm mt-1 text-left">
              {menuItem.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
