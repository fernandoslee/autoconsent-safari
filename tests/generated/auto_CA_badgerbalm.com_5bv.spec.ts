import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_badgerbalm.com_5bv', ['https://www.badgerbalm.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
