/*!
    @e53e04ac/ipp5-configuration/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Base } from 'base';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { ValueOrGet } from 'hold';

export declare namespace Ipp5Configuration {

    type Metadata = {
        readonly subscription: string;
        readonly group: string;
        readonly location: string;
        readonly realm: string;
        readonly az: string;
        readonly docker: string;
        readonly node: string;
        readonly tmpDirectory: string;
        readonly backendApiDirectory: string;
        readonly backendBatchDirectory: string;
        readonly backendIdpDirectory: string;
        readonly backendStaticDirectory: string;
        readonly staticDirectory: string;
        readonly staticDistDirectory: string;
    };

    type Options = {
        readonly path: ValueOrGet<string>;
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly directory: Get<FileEntry>;
        readonly metadata: Get<Metadata>;
    };

    type Self = Base & {
        readonly _Ipp5Configuration: Get<_Self>;
        readonly az: string;
        readonly docker: string;
        readonly node: string;
        readonly realm: string;
        readonly directories: {
            readonly tmpDirectory: FileEntry;
            readonly backendApiDirectory: FileEntry;
            readonly backendBatchDirectory: FileEntry;
            readonly backendIdpDirectory: FileEntry;
            readonly backendStaticDirectory: FileEntry;
            readonly staticDirectory: FileEntry;
            readonly staticDistDirectory: FileEntry;
        };
        readonly urns: {
            readonly frontendUrn: string;
            readonly backendApiUrn: string;
            readonly backendBatchUrn: string;
            readonly backendBatchAdlibitumClientUrn: string;
            readonly backendBatchAdlibitumServerUrn: string;
            readonly backendIdpUrn: string;
            readonly backendIdpChallengeTokenUrn: string;
            readonly backendIdpRegisterUrn: string;
            readonly backendIdpTokenUrn: string;
            readonly backendStaticUrn: string;
        };
        readonly privateKeys: {
            readonly backendBatchAdlibitumClientPrivateKey: string;
            readonly backendIdpChallengeTokenPrivateKey: string;
            readonly backendIdpRegisterPrivateKey: string;
            readonly backendIdpTokenPrivateKey: string;
        };
        readonly publicKeys: {
            readonly backendBatchAdlibitumClientPublicKey: string;
            readonly backendIdpChallengeTokenPublicKey: string;
            readonly backendIdpRegisterPublicKey: string;
            readonly backendIdpTokenPublicKey: string;
        };
        readonly frontend: {
            readonly containerImageName: string;
            readonly containerTimezoneId: string;
            readonly containerAppGroup: string;
            readonly containerAppUser: string;
            readonly containerAppDirectoryPath: string;
            readonly containerAppEntrypoint: string;
            readonly containerAppPort: number;
            readonly url: string;
        };
        readonly backendStatic: {
            readonly containerImageName: string;
            readonly containerTimezoneId: string;
            readonly containerAppGroup: string;
            readonly containerAppUser: string;
            readonly containerAppDirectoryPath: string;
            readonly containerAppEntrypoint: string;
            readonly containerAppPort: number;
            readonly url: string;
            readonly httpPathPrefix: string;
            readonly containerDocumentRootDirectoryPath: string;
        };
        readonly backendIdp: {
            readonly containerImageName: string;
            readonly containerTimezoneId: string;
            readonly containerAppGroup: string;
            readonly containerAppUser: string;
            readonly containerAppDirectoryPath: string;
            readonly containerAppEntrypoint: string;
            readonly containerAppPort: number;
            readonly url: string;
            readonly httpPathPrefix: string;
            readonly storageAccountName: string;
        };
        readonly backendApi: {
            readonly containerImageName: string;
            readonly containerTimezoneId: string;
            readonly containerAppGroup: string;
            readonly containerAppUser: string;
            readonly containerAppDirectoryPath: string;
            readonly containerAppEntrypoint: string;
            readonly containerAppPort: number;
            readonly url: string;
            readonly httpPathPrefix: string;
            readonly containerBackendMountPath: string;
        };
        readonly backendBatch: {
            readonly containerImageName: string;
            readonly containerTimezoneId: string;
            readonly containerAppGroup: string;
            readonly containerAppUser: string;
            readonly containerAppDirectoryPath: string;
            readonly containerAppEntrypoint: string;
            readonly containerAppPort: number;
            readonly url: string;
            readonly httpPathPrefix: string;
            readonly containerBackendMountPath: string;
            readonly containerBackendBatchMountPath: string;
            readonly vaultName: string;
        };
        readonly defaultResouceGroup: {
            readonly subscription: string;
            readonly name: string;
            readonly location: string;
        };
        readonly defaultKeyvault: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly location: string;
        };
        readonly defaultStorageAccount: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly location: string;
        };
        readonly defaultAcr: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly location: string;
        };
        readonly defaultAppservicePlan: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly location: string;
        };
        readonly frontendWebapp: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly plan: string;
            readonly deploymentContainerImageName: string;
        };
        readonly backendStaticWebapp: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly plan: string;
            readonly deploymentContainerImageName: string;
        };
        readonly backendIdpWebapp: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly plan: string;
            readonly deploymentContainerImageName: string;
        };
        readonly backendApiWebapp: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly plan: string;
            readonly deploymentContainerImageName: string;
        };
        readonly backendBatchWebapp: {
            readonly subscription: string;
            readonly resourceGroup: string;
            readonly name: string;
            readonly plan: string;
            readonly deploymentContainerImageName: string;
        };
        readonly backendStorageShare: {
            readonly subscription: string;
            readonly accountName: string;
            readonly name: string;
        };
        readonly backendBatchStorageShare: {
            readonly subscription: string;
            readonly accountName: string;
            readonly name: string;
        };
        readonly pendingStorageTable: {
            readonly subscription: string;
            readonly accountName: string;
            readonly name: string;
        };
        readonly registeredStorageTable: {
            readonly subscription: string;
            readonly accountName: string;
            readonly name: string;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = {
        readonly from: {
            (path: string): Self;
        };
    };

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5Configuration = Ipp5Configuration.Self;

export declare const Ipp5Configuration: Ipp5Configuration.ConstructorWithCompanion;
