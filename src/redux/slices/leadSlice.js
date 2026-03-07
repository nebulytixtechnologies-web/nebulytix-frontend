import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';
import toast from 'react-hot-toast';

export const fetchLeads = createAsyncThunk(
  'leads/fetchLeads',
  async ({ page = 0, size = 10, status = null } = {}, { rejectWithValue }) => {
    try {
      const url = status 
        ? `/admin/leads?page=${page}&size=${size}&status=${status}`
        : `/admin/leads?page=${page}&size=${size}`;
      const response = await api.get(url);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch leads');
    }
  }
);

export const updateLeadStatus = createAsyncThunk(
  'leads/updateStatus',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/admin/leads/${id}/status?status=${status}`);
      toast.success(`Lead status updated to ${status}`);
      return response.data.data;
    } catch (error) {
      toast.error('Failed to update lead status');
      return rejectWithValue(error.response?.data?.message || 'Failed to update status');
    }
  }
);

export const assignLead = createAsyncThunk(
  'leads/assign',
  async ({ leadId, subAdminId }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/admin/leads/${leadId}/assign?subAdminId=${subAdminId}`);
      toast.success('Lead assigned successfully');
      return response.data.data;
    } catch (error) {
      toast.error('Failed to assign lead');
      return rejectWithValue(error.response?.data?.message || 'Failed to assign lead');
    }
  }
);

const initialState = {
  leads: [],
  isLoading: false,
  error: null,
  totalPages: 0,
  currentPage: 0,
  stats: {
    total: 0,
    new: 0,
    contacted: 0,
    qualified: 0,
  },
};

const leadSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Leads
      .addCase(fetchLeads.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leads = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.number;
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update Status
      .addCase(updateLeadStatus.fulfilled, (state, action) => {
        const index = state.leads.findIndex(l => l.id === action.payload.id);
        if (index !== -1) {
          state.leads[index] = action.payload;
        }
      })
      // Assign Lead
      .addCase(assignLead.fulfilled, (state, action) => {
        const index = state.leads.findIndex(l => l.id === action.payload.id);
        if (index !== -1) {
          state.leads[index] = action.payload;
        }
      });
  },
});

export const { clearError } = leadSlice.actions;
export default leadSlice.reducer;