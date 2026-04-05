import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wgaufbau-dresden.de_w96', ['https://www.wgaufbau-dresden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
