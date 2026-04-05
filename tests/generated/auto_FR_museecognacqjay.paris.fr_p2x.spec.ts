import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_museecognacqjay.paris.fr_p2x', ['https://www.museecognacqjay.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
