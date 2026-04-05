import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_xwiki.sonia.de_nj0', ['https://xwiki.sonia.de/bin/view/Main/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
