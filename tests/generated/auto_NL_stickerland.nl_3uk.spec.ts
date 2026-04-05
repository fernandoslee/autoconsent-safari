import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stickerland.nl_3uk', ['https://www.stickerland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
