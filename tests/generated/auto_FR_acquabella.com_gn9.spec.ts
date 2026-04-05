import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_acquabella.com_gn9', ['https://www.acquabella.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
