import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_v2.mesetiquettes.com_y5e', ['https://v2.mesetiquettes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
