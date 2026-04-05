import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinemadureel.org_cgj', ['https://www.cinemadureel.org/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
