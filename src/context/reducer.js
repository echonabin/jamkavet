import {
  HANDEL_VIDEO_SELECT,
  HANDEL_MODAL_CLOSE,
  HANDEL_SET_VIDEOS,
  HANDEL_FEATURE_VIDEOS,
  HANDEL_SET_BLOGS,
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
    //  Blogs Part
    case HANDEL_SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        isLoading: false,
      };
    default:
      break;
  }
};
