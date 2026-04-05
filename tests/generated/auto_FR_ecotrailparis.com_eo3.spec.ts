import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ecotrailparis.com_eo3', ['https://www.ecotrailparis.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
