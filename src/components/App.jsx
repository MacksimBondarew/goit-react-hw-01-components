
import user from './Data/to/user';
import { Profile } from './Profile/Profile';
import data from './Data/to/data';
import { Statistics } from './Statistics/Statistics'; 

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
    </div>
  );
};
