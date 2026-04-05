import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trainstore-and-more.de_09l', ['https://trainstore-and-more.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
