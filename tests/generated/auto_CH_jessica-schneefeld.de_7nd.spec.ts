import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_jessica-schneefeld.de_7nd', ['https://www.jessica-schneefeld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
