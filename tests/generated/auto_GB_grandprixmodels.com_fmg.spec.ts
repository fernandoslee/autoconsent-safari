import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_grandprixmodels.com_fmg', ['https://www.grandprixmodels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
