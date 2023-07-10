import css from './friendslist.module.css'
import PropTypes from 'prop-types'
import { FriendsListItem } from './friendslistitem'

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

