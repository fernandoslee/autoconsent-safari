import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kirchenbezirk-crailsheim-blaufelden.de_3mk', ['https://www.kirchenbezirk-crailsheim-blaufelden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
