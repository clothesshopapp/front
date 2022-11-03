import { FC } from "react";

interface MenuItemProps {
  imagePath: string;
  title: string;
  price: number;
  size: string;
}


export const MenuItem: FC<MenuItemProps> = ({
  imagePath,
  title,
  price,
  size,
}) => {
  return (
    <div className="w-64 h-64 shadow-2xl rounded-2xl p-4">
      <div className="h-36 relative">
        <img
          className=" top-0 left-0  w-full h-full  absolute"
          src={imagePath}
          alt="cloth"
        />
        <span className=" absolute bottom-5 right-0  bg-neutral-900/50 color text-white p-2 rounded-xl text-sm">
          розмір {size}
        </span>
      </div>
      <div className=" mt-2">
        <p>
          <span className="text-amber-600 font-bold"> {title}</span>{" "}
          "Buttercream" з капюшоном.
        </p>
        <span className="text-amber-600 font-bold">{price} uah</span>
      </div>
    </div>
  );
};
