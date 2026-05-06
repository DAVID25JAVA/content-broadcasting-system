import apiRequest from "./api.services";

export const contentService = {
  // Teacher - get only their content
  getMyContent: (teacherId) =>
    apiRequest(`/content?teacherId=${teacherId}`),

  // Principal - get all content
  getAllContent: () =>
    apiRequest('/content'),

  // Get pending only
  getPendingContent: () =>
    apiRequest('/content?status=pending'),

  // Get single content
  getContentById: (id) =>
    apiRequest(`/content/${id}`),

  // Teacher upload new content
  uploadContent: (data) =>
    apiRequest('/content', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Get active content for public live page
  getActiveContent: (teacherId) =>
    apiRequest(`/content?teacherId=${teacherId}&status=approved`),
};