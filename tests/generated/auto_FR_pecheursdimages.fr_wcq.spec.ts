import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pecheursdimages.fr_wcq', ['https://www.pecheursdimages.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
