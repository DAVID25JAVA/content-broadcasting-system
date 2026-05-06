import apiRequest from "./api.services";

export const approvalService = {
  approveContent: (id) =>
    apiRequest(`/content/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'approved', rejectionReason: null }),
    }),

  rejectContent: (id, reason) =>
    apiRequest(`/content/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'rejected', rejectionReason: reason }),
    }),
};