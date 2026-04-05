import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_moebelstiftung.de_kcw', ['https://www.moebelstiftung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
