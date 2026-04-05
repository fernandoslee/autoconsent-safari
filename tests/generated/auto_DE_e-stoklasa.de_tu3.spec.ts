import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_e-stoklasa.de_tu3', ['https://www.e-stoklasa.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
