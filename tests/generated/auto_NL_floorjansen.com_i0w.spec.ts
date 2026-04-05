import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_floorjansen.com_i0w', ['https://www.floorjansen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
