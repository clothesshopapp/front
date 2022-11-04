import { FooterLink } from "./footer-link/footer-link.component"

export const Footer = ()=>{
    return(
        <div className="pt-12 pb-8 bg-gray-800">
            <h3 className="uppercase text-zinc-500 font-bold text-xs">контакти</h3>
            <ul className="text-gray-400 text-xs mt-6 ">
               <FooterLink href={"tel:+38044 123 45 67"}>+38044 123 45 67</FooterLink>
               <FooterLink href={"mailto:info@clothesshop"}>info@clothesshop</FooterLink>
            </ul>
        </div>
    )
}

