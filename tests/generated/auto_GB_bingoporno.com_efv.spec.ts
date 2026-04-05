import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bingoporno.com_efv', ['https://www.bingoporno.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
