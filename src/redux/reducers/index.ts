import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import categories from './categoryReducer'
import tags from './tagReducer'
import homeBlogs from './homeBlogsReducer'
import blogsCategory from './blogsCategoryReducer'
import otherInfo from './otherInfoReducer'
import blogsUser from './blogsUserReducer'
import comments from './commentReducer'
import socket from './socketReducer'

export default combineReducers({
  auth,
  alert,
  categories,
  tags,
  homeBlogs,
  blogsCategory,
  otherInfo,
  blogsUser,
  comments,
  socket
})