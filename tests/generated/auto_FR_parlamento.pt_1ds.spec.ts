import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_parlamento.pt_1ds', ['https://www.parlamento.pt/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
