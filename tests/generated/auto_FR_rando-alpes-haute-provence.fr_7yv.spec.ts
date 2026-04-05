import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rando-alpes-haute-provence.fr_7yv', ['https://www.rando-alpes-haute-provence.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
