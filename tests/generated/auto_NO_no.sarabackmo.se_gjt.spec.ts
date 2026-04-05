import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_no.sarabackmo.se_gjt', ['https://no.sarabackmo.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
