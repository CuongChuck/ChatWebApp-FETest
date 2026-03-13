import { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onEmojiClick = (emojiData) => {
    setMsg((prevMsg) => prevMsg + emojiData.emoji);
  };

  return (
    <div className='bg-white rounded-2 d-flex flex-row align-items-center p-2 position-relative'>
      <button onClick={() => setOpen(!open)} className="btn">
        <FontAwesomeIcon icon={faFaceGrin} />
      </button>
      <div className="position-absolute bottom-0">
        <EmojiPicker open={open} onEmojiClick={onEmojiClick} />
      </div>
      {file && (
        <div className="badge bg-light text-dark p-2 mb-2 d-flex align-items-center">
          <span>{file.name}</span>
          <button className="btn-close ms-2" onClick={() => setFile(null)}></button>
        </div>
      )}
      <input
        type="text"
        className="border-0 chat w-100"
        onClick={() => setOpen(false)}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <input
        type="file"
        className="d-none"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <FontAwesomeIcon icon={faPaperclip} className="mx-3" role="button" onClick={handleFileClick} />
      <FontAwesomeIcon
        icon={faPaperPlane}
        className="me-3 text-white bg-primary rounded-circle p-2 text-center"
        role="button"
      />
    </div>
  );
};

export default ChatBox;