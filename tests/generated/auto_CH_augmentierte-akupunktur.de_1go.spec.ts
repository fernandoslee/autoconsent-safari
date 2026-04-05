import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_augmentierte-akupunktur.de_1go', ['https://augmentierte-akupunktur.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
