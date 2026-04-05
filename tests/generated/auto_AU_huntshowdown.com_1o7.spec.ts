import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_huntshowdown.com_1o7', ['https://www.huntshowdown.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
