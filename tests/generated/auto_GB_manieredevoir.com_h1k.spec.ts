import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_manieredevoir.com_h1k', ['https://www.manieredevoir.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
