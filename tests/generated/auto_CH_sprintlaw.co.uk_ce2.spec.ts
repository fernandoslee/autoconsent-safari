import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sprintlaw.co.uk_ce2', ['https://sprintlaw.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
