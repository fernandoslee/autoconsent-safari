import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_howespercival.com_c6u', ['https://www.howespercival.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
