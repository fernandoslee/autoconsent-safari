import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_profs-edition.com_fhn', ['https://www.profs-edition.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
