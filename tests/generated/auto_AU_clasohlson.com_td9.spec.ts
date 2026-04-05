import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_clasohlson.com_td9', ['https://www.clasohlson.com/se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
