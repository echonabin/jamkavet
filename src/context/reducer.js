import {
  HANDEL_VIDEO_SELECT,
  HANDEL_MODAL_CLOSE,
  HANDEL_SET_VIDEOS,
} from "./types";
export default (state, action) => {
  switch (action.type) {
    case HANDEL_SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case HANDEL_MODAL_CLOSE:
      return {
        ...state,
        openModal: false,
      };
    case HANDEL_VIDEO_SELECT:
      return {
        ...state,
        selectedVideo: action.payload,
        openModal: true,
      };
    default:
      break;
  }
};
