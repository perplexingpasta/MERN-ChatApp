import { useRef, useState } from "react";
import { BsSend, BsFillImageFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import EmojiPicker from "../EmojiPicker";
import usePreviewImg from "../../hooks/usePreviewImg";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

// CHANGES FOR IMAGE SHARING

const MessageInputWImage = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  const imageRef = useRef(null);
  const { onClose } = useDisclosure();
  const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();

  return (
    <div>
      <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <div className="relative top-[1.8rem] left-2 max-w-12">
            <EmojiPicker onSelectEmoji={handleEmojiSelect} />
          </div>
          <input
            type="text"
            className="border text-sm rounded-lg pl-8 block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3 top-4"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <BsSend />
            )}
          </button>
        </div>
      </form>

      <div className="cursor-pointer">
        <BsFillImageFill size={20} onClick={() => imageRef.current.click()} />
        <input type="file" hidden ref={imageRef} onChange={handleImageChange} />
      </div>
      <Modal
        isOpen={imgUrl}
        onClose={() => {
          onClose();
          setImgUrl("");
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="mt-5 w-full">
              <img src={imgUrl} alt="" />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MessageInputWImage;
