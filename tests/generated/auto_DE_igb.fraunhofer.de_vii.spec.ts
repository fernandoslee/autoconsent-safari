import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_igb.fraunhofer.de_vii', ['https://www.igb.fraunhofer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
