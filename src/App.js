import './App.css';
import { ChatEngine } from 'react-chat-engine';


function App() {
  return (
    <div className="App">
      <ChatEngine
        height = "100vh"
        projectID = "e554b6fb-1e43-46c3-9f82-436f441324ca"
        userName = "vishwa"
        userSecret = "1234np"
      />
      {/* every thing ok */}
    </div>
  );
}

export default App;
