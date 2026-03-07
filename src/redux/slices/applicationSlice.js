import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import toast from 'react-hot-toast';

export const fetchApplications = createAsyncThunk(
  'applications/fetchApplications',
  async ({ page = 0, size = 10, jobId = null } = {}, { rejectWithValue }) => {
    try {
      const url = jobId 
        ? `/hr/jobs/${jobId}/applications?page=${page}&size=${size}`
        : `/hr/applications?page=${page}&size=${size}`;
      const response = await api.get(url);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch applications');
    }
  }
);

export const updateApplicationStatus = createAsyncThunk(
  'applications/updateStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/hr/applications/${id}/status?status=${status}`);
      toast.success(`Application status updated to ${status}`);
      return response.data.data;
    } catch (error) {
      toast.error('Failed to update application status');
      return rejectWithValue(error.response?.data?.message || 'Failed to update status');
    }
  }
);

export const submitApplication = createAsyncThunk(
  'applications/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/public/applications', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Application submitted successfully');
      return response.data.data;
    } catch (error) {
      toast.error('Failed to submit application');
      return rejectWithValue(error.response?.data?.message || 'Failed to submit application');
    }
  }
);

const initialState = {
  applications: [],
  isLoading: false,
  error: null,
  totalPages: 0,
  currentPage: 0,
  stats: {
    total: 0,
    applied: 0,
    reviewed: 0,
    rejected: 0,
    hired: 0,
  },
};

const applicationSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Applications
      .addCase(fetchApplications.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applications = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.number;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update Status
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        const index = state.applications.findIndex(a => a.id === action.payload.id);
        if (index !== -1) {
          state.applications[index] = action.payload;
        }
      });
  },
});

export const { clearError } = applicationSlice.actions;
export default applicationSlice.reducer;