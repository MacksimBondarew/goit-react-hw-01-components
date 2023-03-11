
import user from './Data/user';
import Profile from './Profile/ProfileUser'


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
    </div>
  );
};