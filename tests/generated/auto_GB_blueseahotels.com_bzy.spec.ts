import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_blueseahotels.com_bzy', ['https://www.blueseahotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
