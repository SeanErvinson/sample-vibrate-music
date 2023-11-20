import useSound from "use-sound";
import sound from "./assets/sounds/sound.mp3";
import "./App.css";

function App() {
	const [playActive] = useSound(sound, {
		volume: 0.25,
	});
	const handleOnClickVibrate = () => {
		navigator.vibrate([
			100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100,
			30, 100,
		]);
	};

	return (
		<div>
			<button type="button" onClick={handleOnClickVibrate}>
				Vibrate
			</button>
			<button type="button" onClick={playActive}>
				Play
			</button>
		</div>
	);
}

export default App;
