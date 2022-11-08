import { FC, PropsWithChildren } from "react"

interface FooterLinksProps {
    href:string
}


export const FooterLink:FC<FooterLinksProps & PropsWithChildren> = ({href , children}) =>{
    return(
       <>
        <li className="last:mt-2"><a href={href} className="hover:text-white  hover:underline ">{children}</a></li>
       </>
    )
}