import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_swiss-belhotel.com_w2i', ['https://www.swiss-belhotel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
