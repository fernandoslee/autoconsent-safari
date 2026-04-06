import generateCMPTests from '../playwright/runner';

generateCMPTests('Onetrust', ['https://national-lottery.co.uk'], {
    skipRegions: ['US', 'FR', 'DE'],
});
