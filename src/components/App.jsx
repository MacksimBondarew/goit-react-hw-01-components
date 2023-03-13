import { FriendList } from './Friends/FriendsList';
import user from './Data/to/user';
import { Profile } from './Profile/Profile';
import data from './Data/to/data';
import { Statistics } from './Statistics/Statistics'; 
import friends from './Data/to/friends';
import transactions from './Data/to/transactions';
import { TransactionHistory } from '../components/transition/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile  
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
