import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_leasys.com_1n7', ['https://www.leasys.com/uk/english?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
