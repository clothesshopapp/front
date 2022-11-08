import { FooterLink } from "./footer-link/footer-link.component"

export const Footer = ()=>{
    return(
        <div className="py-12 bg-gray-800 px-12">
            <h3 className="uppercase text-zinc-500 font-bold text-xs">контакти</h3>
            <ul className="text-gray-400 text-xs mt-6  ">
               <FooterLink href={"tel:+38044 123 45 67"}>+38044 123 45 67</FooterLink>
               <FooterLink href={"mailto:info@clothesshop"}>info@clothesshop</FooterLink>
            </ul>
            <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] top-0 mt-8 border-zinc-500" />
            <a href="/" className="text-xl semibold text-white mt-8 block">
                    👖 ClothesShop
                </a>
        </div>
    )
}

