import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dicomlibrary.com_ovu', ['https://www.dicomlibrary.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
