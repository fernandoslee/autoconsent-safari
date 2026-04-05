import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ukatex-autositzbezuege.de_36w', ['https://www.ukatex-autositzbezuege.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
