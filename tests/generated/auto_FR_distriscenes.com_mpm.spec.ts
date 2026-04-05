import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_distriscenes.com_mpm', ['https://distriscenes.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
