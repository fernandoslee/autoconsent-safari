import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sjosidenhorten.no_w8e', ['https://www.sjosidenhorten.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
