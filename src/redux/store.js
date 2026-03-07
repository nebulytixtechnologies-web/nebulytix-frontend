import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import projectReducer from './slices/projectSlice'
import leadReducer from './slices/leadSlice'
import jobReducer from './slices/jobSlice'
import applicationReducer from './slices/applicationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    leads: leadReducer,
    jobs: jobReducer,
    applications: applicationReducer,
  },
})