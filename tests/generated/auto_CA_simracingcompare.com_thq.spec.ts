import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_simracingcompare.com_thq', ['https://simracingcompare.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
