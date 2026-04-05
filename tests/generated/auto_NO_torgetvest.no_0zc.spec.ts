import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_torgetvest.no_0zc', ['https://www.torgetvest.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
