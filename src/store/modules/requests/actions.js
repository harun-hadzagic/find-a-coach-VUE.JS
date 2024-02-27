export default {
  contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
      coachId: payload.coachId,
      id: new Date().toISOString(),
    };
    context.commit('addRequest', newRequest);
  },
};
