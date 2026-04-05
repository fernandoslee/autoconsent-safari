import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_missionfranceguichet.fr_irf', ['https://missionfranceguichet.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
