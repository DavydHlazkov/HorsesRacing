import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { backToStart, subscribe } from "../../Redux/horses/horsesSlice";
import RaceTrack from "../Track/Track";
import "./App.css"

const socket = io("localhost:3002");

function App() {

  const dispatch = useDispatch();
  const horses = useSelector((state) => state.horses.horses);
  const [isStarted, setIsStarted] = useState(false);
  const isFinished = horses.map((el)=>el.distance).every(e=>e !==1000)

  useEffect(() => {
    if (isFinished === false) {
      socket.disconnect();
    }
  }, [isFinished]);

  const start = () => {
    socket.connect();
    socket.emit("start");
    socket.on("ticker", (data) => {
      dispatch(subscribe(data));
      setIsStarted(true);
    });
  };

  const newRace = () =>{
    socket.disconnect();
    dispatch(backToStart());
    setIsStarted(false)
  }

  return (
    <div className="app">
      <div>
        { !isStarted ? <button className="btn" onClick={start}>START</button>: null}
        {isStarted === true ? <button className="btn"  onClick={newRace}>NEW GAME</button> : null}
        {!isStarted ? <p>Press START for new horses race</p> : null }
      </div>
      <RaceTrack />
    </div>
  );
}

export default App;
