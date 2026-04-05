import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fahrrad-weindel.de_4or', ['https://www.fahrrad-weindel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
