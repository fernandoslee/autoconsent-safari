import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kunstmuseenkrefeld.de_6p0', ['https://kunstmuseenkrefeld.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
