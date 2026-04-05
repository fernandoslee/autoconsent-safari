import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kvarnvideo.se_nnh', ['https://www.kvarnvideo.se/se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
