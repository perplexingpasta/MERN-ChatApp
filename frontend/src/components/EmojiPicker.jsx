import { useEffect, useRef, useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const EmojiPicker = ({ onSelectEmoji }) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const pickerRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setPickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <svg
        ref={iconRef}
        xmlns="http://www.w3.org/2000/svg"
        width="1.2rem"
        height="1.2rem"
        viewBox="0 0 24 24"
        onClick={() => setPickerVisible(!isPickerVisible)}
        className="cursor-pointer"
      >
        <path
          fill="#c0c0c0"
          d="M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m3.5 6A1.5 1.5 0 0 1 17 9.5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 14 9.5A1.5 1.5 0 0 1 15.5 8m-7 0A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 8.5 11A1.5 1.5 0 0 1 7 9.5A1.5 1.5 0 0 1 8.5 8m3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.81 2.04-2.78 3.5-5.11 3.5"
        ></path>
      </svg>
      {isPickerVisible && (
        <div className="relative bottom-10 left-10">
          <Picker
            data={data}
            previewPosition="none"
            onEmojiSelect={(emoji) => {
              onSelectEmoji(emoji.native);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
