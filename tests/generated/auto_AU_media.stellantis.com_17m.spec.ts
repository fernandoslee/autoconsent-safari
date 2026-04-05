import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_media.stellantis.com_17m', ['https://www.media.stellantis.com/em-en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
