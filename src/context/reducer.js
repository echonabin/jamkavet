import {
  HANDEL_VIDEO_SELECT,
  HANDEL_MODAL_CLOSE,
  HANDEL_SET_VIDEOS,
  HANDEL_FEATURE_VIDEOS,
  HANDEL_LOAD_MORE,
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
    case HANDEL_FEATURE_VIDEOS:
      return {
        ...state,
        featuredVideo: action.payload,
      };
    case HANDEL_LOAD_MORE:
      return {
        ...state,
        maxResults: 16,
      };
    default:
      break;
  }
};
