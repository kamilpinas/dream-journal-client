export function dreamToSharedDream(dream, username) {
  return {
    sharedOn: new Date(),
    votes: 0,
    username: username,
    dream: dream,
  };
}
