import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deutsches-museum.de_3wl', ['https://www.deutsches-museum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
