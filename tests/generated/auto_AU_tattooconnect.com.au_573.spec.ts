import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tattooconnect.com.au_573', ['https://tattooconnect.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
