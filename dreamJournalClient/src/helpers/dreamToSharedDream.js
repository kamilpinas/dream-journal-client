export function dreamToSharedDream(dream, username) {
  return {
    sharedOn: new Date(),
    votes: 0,
    username: username,
    title: dream.title,
    description: dream.description,
    category: dream.category,
  };
}
