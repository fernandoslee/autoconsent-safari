import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_downtownsenter.no_iyg', ['https://www.downtownsenter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
