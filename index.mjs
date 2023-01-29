/*!
    @e53e04ac/ipp5-configuration/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from 'base';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { unwrap } from 'hold';

/** @type {import('.').Ipp5Configuration.Constructor} */
const constructor = ((options) => {

    const _options = ({
        path: hold(() => {
            return unwrap(options.path);
        }),
    });

    /** @type {import('.').Ipp5Configuration._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        directory: hold(() => {
            return FileEntry(_options.path());
        }),
        metadata: hold(() => {
            return _self.directory().resolve('metadata.json').readJsonSync();
        }),
    });

    /** @type {import('.').Ipp5Configuration.Self} */
    const self = ({
        ...Base({}),
        _Ipp5Configuration: (() => {
            return _self;
        }),
        tmpDirectory: hold(() => {
            return FileEntry(_self.metadata().tmpDirectory);
        }),
        backendApiDirectory: hold(() => {
            return FileEntry(_self.metadata().backendApiDirectory);
        }),
        backendBatchDirectory: hold(() => {
            return FileEntry(_self.metadata().backendBatchDirectory);
        }),
        backendIdpDirectory: hold(() => {
            return FileEntry(_self.metadata().backendIdpDirectory);
        }),
        backendStaticDirectory: hold(() => {
            return FileEntry(_self.metadata().backendStaticDirectory);
        }),
        staticDistDirectory: hold(() => {
            return FileEntry(_self.metadata().staticDistDirectory);
        }),
        get az() {
            return _self.metadata().az;
        },
        get docker() {
            return _self.metadata().docker;
        },
        get node() {
            return _self.metadata().node;
        },
        get realm() {
            return _self.metadata().realm;
        },
        urns: {
            get frontendUrn() {
                return `urn:${self.realm}:frontned`;
            },
            get backendApiUrn() {
                return `urn:${self.realm}:backend-api`;
            },
            get backendBatchUrn() {
                return `urn:${self.realm}:backend-batch`;
            },
            get backendBatchAdlibitumClientUrn() {
                return `urn:${self.realm}:backend-batch:adlibitum:client:default`;
            },
            get backendBatchAdlibitumServerUrn() {
                return `urn:${self.realm}:backend-batch:adlibitum:server:default`;
            },
            get backendIdpUrn() {
                return `urn:${self.realm}:backend-idp`;
            },
            get backendIdpChallengeTokenUrn() {
                return `urn:${self.realm}:backend-idp:challenge-token`;
            },
            get backendIdpRegisterUrn() {
                return `urn:${self.realm}:backend-idp:register`;
            },
            get backendIdpTokenUrn() {
                return `urn:${self.realm}:backend-idp:token`;
            },
            get backendStaticUrn() {
                return `urn:${self.realm}:backend-static`;
            },
        },
        privateKeys: {
            get backendBatchAdlibitumClientPrivateKey() {
                return _self.directory().resolve('.backend-batch-adlibitum-client-private-key.pem').readStringSync();
            },
            get backendIdpChallengeTokenPrivateKey() {
                return _self.directory().resolve('.backend-idp-challenge-token-private-key.pem').readStringSync();
            },
            get backendIdpRegisterPrivateKey() {
                return _self.directory().resolve('.backend-idp-register-private-key.pem').readStringSync();
            },
            get backendIdpTokenPrivateKey() {
                return _self.directory().resolve('.backend-idp-token-private-key.pem').readStringSync();
            },
        },
        publicKeys: {
            get backendBatchAdlibitumClientPublicKey() {
                return _self.directory().resolve('.backend-batch-adlibitum-client-public-key.pem').readStringSync();
            },
            get backendIdpChallengeTokenPublicKey() {
                return _self.directory().resolve('.backend-idp-challenge-token-public-key.pem').readStringSync();
            },
            get backendIdpRegisterPublicKey() {
                return _self.directory().resolve('.backend-idp-register-public-key.pem').readStringSync();
            },
            get backendIdpTokenPublicKey() {
                return _self.directory().resolve('.backend-idp-token-public-key.pem').readStringSync();
            },
        },
        frontend: {
            get containerImageName() {
                return `${self.realm}-frontend`;
            },
            get containerTimezoneId() {
                return 'Asia/Tokyo';
            },
            get containerAppGroup() {
                return 'webappgroup';
            },
            get containerAppUser() {
                return 'webappuser';
            },
            get containerAppDirectoryPath() {
                return '/opt/frontend/';
            },
            get containerAppEntrypoint() {
                return "nginx -g 'daemon off;'";
            },
            get containerAppPort() {
                return 3000;
            },
            get url() {
                return `https://${self.realm}.azurewebsites.net/v5/`;
            },
        },
        backendStatic: {
            get containerImageName() {
                return `${self.realm}-backend-static`;
            },
            get containerTimezoneId() {
                return 'Asia/Tokyo';
            },
            get containerAppGroup() {
                return 'webappgroup';
            },
            get containerAppUser() {
                return 'webappuser';
            },
            get containerAppDirectoryPath() {
                return '/opt/backend-static/';
            },
            get containerAppEntrypoint() {
                return 'node main.mjs';
            },
            get containerAppPort() {
                return 3000;
            },
            get url() {
                return `https://${self.realm}-backend-static.azurewebsites.net/v5/`;
            },
            get httpPathPrefix() {
                return '/v5/';
            },
            get containerDocumentRootDirectoryPath() {
                return '/opt/static/';
            },
        },
        backendIdp: {
            get containerImageName() {
                return `${self.realm}-backend-idp`;
            },
            get containerTimezoneId() {
                return 'Asia/Tokyo';
            },
            get containerAppGroup() {
                return 'webappgroup';
            },
            get containerAppUser() {
                return 'webappuser';
            },
            get containerAppDirectoryPath() {
                return '/opt/backend-idp/';
            },
            get containerAppEntrypoint() {
                return 'node main.mjs';
            },
            get containerAppPort() {
                return 3000;
            },
            get url() {
                return `https://${self.realm}-backend-idp.azurewebsites.net/v5/idp/`;
            },
            get httpPathPrefix() {
                return '/v5/idp/';
            },
            get storageAccountName() {
                return self.defaultStorageAccount.name;
            },
        },
        backendApi: {
            get containerImageName() {
                return `${self.realm}-backend-api`;
            },
            get containerTimezoneId() {
                return 'Asia/Tokyo';
            },
            get containerAppGroup() {
                return 'webappgroup';
            },
            get containerAppUser() {
                return 'webappuser';
            },
            get containerAppDirectoryPath() {
                return '/opt/backend-api/';
            },
            get containerAppEntrypoint() {
                return 'node main.mjs';
            },
            get containerAppPort() {
                return 3000;
            },
            get url() {
                return `https://${self.realm}-backend-api.azurewebsites.net/v5/api/`;
            },
            get httpPathPrefix() {
                return '/v5/api/';
            },
            get containerBackendMountPath() {
                return '/mnt/backend';
            },
        },
        backendBatch: {
            get containerImageName() {
                return `${self.realm}-backend-batch`;
            },
            get containerTimezoneId() {
                return `Asia/Tokyo`;
            },
            get containerAppDirectoryPath() {
                return `/opt/backend-batch/`;
            },
            get containerAppGroup() {
                return `webappgroup`;
            },
            get containerAppUser() {
                return `webappuser`;
            },
            get containerAppEntrypoint() {
                return `node main.mjs`;
            },
            get containerAppPort() {
                return 3000;
            },
            get url() {
                return `https://${self.realm}-backend-batch.azurewebsites.net/v5/batch/`;
            },
            get httpPathPrefix() {
                return `/v5/batch/`;
            },
            get containerBackendMountPath() {
                return `/mnt/backend`;
            },
            get containerBackendBatchMountPath() {
                return `/mnt/backend-batch`;
            },
            get vaultName() {
                return self.defaultKeyvault.name;
            },
        },
        defaultResouceGroup: {
            get subscription() {
                return _self.metadata().subscription;
            },
            get name() {
                return _self.metadata().group;
            },
            get location() {
                return _self.metadata().location;
            },
        },
        defaultKeyvault: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get location() {
                return self.defaultResouceGroup.location;
            },
            get name() {
                return `${self.realm}`;
            },
        },
        defaultStorageAccount: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get location() {
                return self.defaultResouceGroup.location;
            },
            get name() {
                return `${self.realm}`;
            },
        },
        defaultAcr: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get location() {
                return self.defaultResouceGroup.location;
            },
            get name() {
                return `${self.realm}`;
            },
        },
        defaultAppservicePlan: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get location() {
                return self.defaultResouceGroup.location;
            },
            get name() {
                return `${self.realm}`;
            },
        },
        frontendWebapp: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get name() {
                return `${self.realm}`;
            },
            get plan() {
                return self.defaultAppservicePlan.name;
            },
            get deploymentContainerImageName() {
                return `${self.defaultAcr.name}.azurecr.io/${self.frontend.containerImageName}:latest`;
            },
        },
        backendStaticWebapp: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get name() {
                return `${self.realm}-backend-static`;
            },
            get plan() {
                return self.defaultAppservicePlan.name;
            },
            get deploymentContainerImageName() {
                return `${self.defaultAcr.name}.azurecr.io/${self.backendStatic.containerImageName}:latest`;
            },
        },
        backendIdpWebapp: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get name() {
                return `${self.realm}-backend-idp`;
            },
            get plan() {
                return self.defaultAppservicePlan.name;
            },
            get deploymentContainerImageName() {
                return `${self.defaultAcr.name}.azurecr.io/${self.backendIdp.containerImageName}:latest`;
            },
        },
        backendApiWebapp: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get name() {
                return `${self.realm}-backend-api`;
            },
            get plan() {
                return self.defaultAppservicePlan.name;
            },
            get deploymentContainerImageName() {
                return `${self.defaultAcr.name}.azurecr.io/${self.backendApi.containerImageName}:latest`;
            },
        },
        backendBatchWebapp: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get resourceGroup() {
                return self.defaultResouceGroup.name;
            },
            get name() {
                return `${self.realm}-backend-batch`;
            },
            get plan() {
                return self.defaultAppservicePlan.name;
            },
            get deploymentContainerImageName() {
                return `${self.defaultAcr.name}.azurecr.io/${self.backendBatch.containerImageName}:latest`;
            },
        },
        backendStorageShare: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get accountName() {
                return self.defaultStorageAccount.name;
            },
            get name() {
                return `backend`;
            },
        },
        backendBatchStorageShare: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get accountName() {
                return self.defaultStorageAccount.name;
            },
            get name() {
                return `backend-batch`;
            },
        },
        pendingStorageTable: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get accountName() {
                return self.defaultStorageAccount.name;
            },
            get name() {
                return `pending`;
            },
        },
        registeredStorageTable: {
            get subscription() {
                return self.defaultResouceGroup.subscription;
            },
            get accountName() {
                return self.defaultStorageAccount.name;
            },
            get name() {
                return `registered`;
            },
        },
    });

    return self;

});

/** @type {import('.').Ipp5Configuration.Companion} */
const companion = ({
    from: ((path) => {
        return constructor({ path });
    }),
});

/** @type {import('.').Ipp5Configuration.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5Configuration };
