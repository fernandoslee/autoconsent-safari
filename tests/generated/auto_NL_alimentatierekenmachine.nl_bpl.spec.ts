import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_alimentatierekenmachine.nl_bpl', ['https://alimentatierekenmachine.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
