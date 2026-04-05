import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_leds-and-more.de_ujn', ['https://leds-and-more.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
