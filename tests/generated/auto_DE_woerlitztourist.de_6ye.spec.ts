import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_woerlitztourist.de_6ye', ['https://www.woerlitztourist.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
