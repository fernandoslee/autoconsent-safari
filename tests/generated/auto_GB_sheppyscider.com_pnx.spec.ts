import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sheppyscider.com_pnx', ['https://www.sheppyscider.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
