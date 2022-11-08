
import { FC } from 'react';
import { Cloth } from '../../types/cloth';
import { MenuItem } from '../menu-item/menu-item.component';



interface ClothListProps {
    clothes:Cloth[],
}
export const MenuList:FC<ClothListProps> = ({clothes})=>{
    return (
        <div className='flex flex-wrap gap-10 justify-center '>
           {clothes.map(({ image , ...c}) =>{
            return <MenuItem imagePath={image} {...c} key={c.id}/>
           })}
        </div>
    )
}