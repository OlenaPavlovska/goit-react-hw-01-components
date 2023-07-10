import ProfileData from "./profile/profile.jsx"
import user from "./profile/user.json"

import { StatisticData } from "./data/data.jsx"
import data from "./data/data.json"

import { FriendsList } from "./friends/friendslist.jsx"
import friends from './friends/friends.json'

import { TransactionHistory } from "./Transaction/transaction.jsx"
import items from "./Transaction/transaction.json"

export const App = () => {
  return (
    <>
      <ProfileData profile={[user]} />

      <StatisticData
     title="Upload stats"
      stats={data}
/>
      <FriendsList
        friends={friends}
      />
      <TransactionHistory
      items={items}/>
    </>
    
  );
}