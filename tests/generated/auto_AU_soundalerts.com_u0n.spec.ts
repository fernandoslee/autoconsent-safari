import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_soundalerts.com_u0n', ['https://soundalerts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
