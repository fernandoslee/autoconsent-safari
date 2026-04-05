import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_grorudsenter.no_6qy', ['https://www.grorudsenter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
