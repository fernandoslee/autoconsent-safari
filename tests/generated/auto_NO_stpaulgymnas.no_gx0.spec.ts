import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_stpaulgymnas.no_gx0', ['https://www.stpaulgymnas.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
