import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_morgansindallconstruction.com_2c2', ['https://www.morgansindallconstruction.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
