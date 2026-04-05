import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_firefightersfirstcu.org_8a6', ['https://www.firefightersfirstcu.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
