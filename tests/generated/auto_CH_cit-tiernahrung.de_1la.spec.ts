import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cit-tiernahrung.de_1la', ['https://cit-tiernahrung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
