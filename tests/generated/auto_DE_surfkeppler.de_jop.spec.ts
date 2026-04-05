import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_surfkeppler.de_jop', ['https://www.surfkeppler.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
