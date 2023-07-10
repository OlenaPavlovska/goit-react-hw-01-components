import css from './friendslist.module.css'
import PropTypes from 'prop-types'

export const FriendsList = ({ friends }) => {
    return (
        <ul className={css.friendslist}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendsListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
               </ul>
    )
}

FriendsList.prototypes = {
    friends: PropTypes.array.isRequired
}

const FriendsListItem = ({ avatar, name, isOnline }) => {
   return( <li className={css.item} >
  { <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span> }
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name" >{name}</p>
    </li>
   )
}
FriendsListItem.prototypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired
}