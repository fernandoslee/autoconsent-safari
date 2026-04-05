import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pharmacologymentor.com_qtt', ['https://pharmacologymentor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
