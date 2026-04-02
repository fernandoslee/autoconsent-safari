import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.forgeofempires.com_it2', ['https://de-play.forgeofempires.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
