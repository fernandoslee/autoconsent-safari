import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fellnasen-retter.de_r4l', ['https://www.fellnasen-retter.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
