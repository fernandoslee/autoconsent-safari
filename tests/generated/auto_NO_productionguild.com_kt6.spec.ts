import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_productionguild.com_kt6', ['https://productionguild.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
