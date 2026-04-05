import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sosamitie.org_o1q', ['https://www.sosamitie.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
