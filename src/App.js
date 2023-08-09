import { authService } from "fbase";
import { useState } from "react";
import Router from "Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
