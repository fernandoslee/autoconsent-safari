import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gioiellimelone.it_p89', ['https://www.gioiellimelone.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
