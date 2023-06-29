import { Router } from "express";
import {
  addMessage,
  getMessages,
  addImageMessage,
  addAudioMessage,
  getInitialiseContactWithMessages,
} from "../controllers/MessageController.js";
import multer from "multer";

const router = Router();

const uploadAudio = multer({ dest: "upload/recordings" });
const uploadImage = multer({ dest: "upload/images" });

router.post("/add-message", addMessage);
router.get("/get-messages/:from/:to", getMessages);
router.post("/add-image-message", uploadImage.single("image"), addImageMessage);
router.post("/add-audio-message", uploadImage.single("audio"), addAudioMessage);
router.get("/get-initial-contacts/:from", getInitialiseContactWithMessages);

export default router;
