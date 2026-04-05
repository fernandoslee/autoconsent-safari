import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_catalogue.killgerm.com_wf3', ['https://catalogue.killgerm.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
