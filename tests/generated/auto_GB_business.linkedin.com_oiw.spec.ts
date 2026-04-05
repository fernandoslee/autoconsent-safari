import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_business.linkedin.com_oiw', ['https://business.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
