import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_consumentenbond.nl_pyr', ['https://www.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
