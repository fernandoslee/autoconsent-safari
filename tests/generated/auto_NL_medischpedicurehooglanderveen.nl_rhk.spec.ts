import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_medischpedicurehooglanderveen.nl_rhk', ['https://medischpedicurehooglanderveen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
