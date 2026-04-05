import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kickbackshow.com_k3y', ['https://www.kickbackshow.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
