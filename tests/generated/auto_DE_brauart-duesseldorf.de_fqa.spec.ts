import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brauart-duesseldorf.de_fqa', ['https://brauart-duesseldorf.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
