import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rossdorf.de_4v7', ['https://rossdorf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
