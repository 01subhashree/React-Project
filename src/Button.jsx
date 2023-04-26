import { useDispatch } from "react-redux";
import { updateAlphabetData } from "./reducer/buttonSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  const handleClick = (letter) => {
    dispatch(updateAlphabetData({ letter }));
  };

  return (
    <div className="button">
      {Array.from({ length: 30 }, (_, i) => String.fromCharCode(i + 65)).map(
        (letter) => (
          <button key={letter} onClick={() => handleClick(letter)}>
            {letter}
          </button>
        )
      )}
    </div>
  );
};

export default Buttons;
