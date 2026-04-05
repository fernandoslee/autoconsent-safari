import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kickstarter.de_11s', ['https://www.kickstarter.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
