import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_homoeopathie-heute.de_su7', ['https://www.homoeopathie-heute.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
