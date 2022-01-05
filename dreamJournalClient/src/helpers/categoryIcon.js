export function categoryIcon(icon) {
  switch (icon) {
    case 'Straszne':
      return 'ghost';

    case 'Śmieszne':
      return 'emoticon-excited-outline';

    case 'Dziwne':
      return 'alien';

    case 'Smutne':
      return 'emoticon-cry-outline';

    case 'O zwierzętach':
      return 'paw';

    case 'Symboliczne':
      return 'triangle-outline';

    case 'Prorocze':
      return 'christianity-outline';

    case 'Filmowe':
      return 'movie-outline';

    default:
      return 'emoticon-neutral-outline';
  }
}
