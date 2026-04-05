import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_oiseau-magique.com_9qv', ['https://www.oiseau-magique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
