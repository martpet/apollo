import {
  AuthenticatorTransportFuture,
  CredentialDeviceType,
} from "@simplewebauthn/server";

export interface Passkey {
  credId: string;
  credPublicKey: Uint8Array;
  internalUserId: string;
  webauthnUserId: string;
  counter: number;
  deviceType: CredentialDeviceType;
  backupEligible: boolean;
  backedUp: boolean;
  transports?: AuthenticatorTransportFuture;
  createdAt: Date;
  lastUsedAt: Date;
}
