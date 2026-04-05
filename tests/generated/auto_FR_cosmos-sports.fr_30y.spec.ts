import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cosmos-sports.fr_30y', ['https://www.cosmos-sports.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
