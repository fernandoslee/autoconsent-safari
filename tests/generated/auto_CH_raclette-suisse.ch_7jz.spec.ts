import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_raclette-suisse.ch_7jz', ['https://www.raclette-suisse.ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
