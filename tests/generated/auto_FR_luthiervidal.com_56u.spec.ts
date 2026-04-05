import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_luthiervidal.com_56u', ['https://luthiervidal.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
