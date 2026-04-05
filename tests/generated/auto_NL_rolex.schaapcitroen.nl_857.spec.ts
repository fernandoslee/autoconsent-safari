import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rolex.schaapcitroen.nl_857', ['https://rolex.schaapcitroen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
