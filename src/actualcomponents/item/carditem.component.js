import "./carditem.style.css"

export const CardItem = ({user}) => {
    return (
       <li className='list-item' >
          <img src = {`https://i.pravatar.cc/150?img=${user.id}`} alt={user.png} />
                <h1>{user.name} </h1>
                <span>{user.email} </span>
              </li>
            );
};