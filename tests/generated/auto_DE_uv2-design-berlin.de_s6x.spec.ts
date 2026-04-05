import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uv2-design-berlin.de_s6x', ['https://www.uv2-design-berlin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
