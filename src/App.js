import './App.css';
import { Authenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App() {
  return (
    <div className='main'>
    <Authenticator>
      {({ signOut, user}) => (
        <div className="App">
          <p> Hey, {user.username}, welcome to my channel, with auth! </p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </Authenticator>
    </div>
  );
}

export default App;
