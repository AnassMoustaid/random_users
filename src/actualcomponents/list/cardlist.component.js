import { CardItem } from "../item/carditem.component" ;
import "./cardlist.style.css";

export const CardList = (props) => {
    return (
        <ul className='list'>
          {props.user.map((u) => {
            // return (
            //   <li className='list-item' 
            //    key={user.id} >
            //     <h1>{user.name} </h1>
            //     <span>{user.email} </span>
            //   </li>
            // );
            return <CardItem key={u.id} user={u} />
          })}
        </ul>
    )
}