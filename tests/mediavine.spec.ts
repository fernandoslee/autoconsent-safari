import generateCMPTests from '../playwright/runner';

generateCMPTests('consentmanager.net', ['https://www.passionforsavings.com/', 'https://europeupclose.com/'], {
    skipRegions: ['US', 'CA', 'AU'],
});
