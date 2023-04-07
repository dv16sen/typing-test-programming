// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function cert({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.security.cert")) return [];

  return [
    ...repeat("CRL", veryRareMultiplier),
    ...repeat("CRLException", veryRareMultiplier),
    ...repeat("CRLReason", veryRareMultiplier),
    ...repeat("CRLSelector", veryRareMultiplier),
    ...repeat("CertPath", veryRareMultiplier),
    ...repeat("CertPathBuilder", veryRareMultiplier),
    ...repeat("CertPathBuilderException", veryRareMultiplier),
    ...repeat("CertPathBuilderResult", veryRareMultiplier),
    ...repeat("CertPathBuilderSpi", veryRareMultiplier),
    ...repeat("CertPathChecker", veryRareMultiplier),
    ...repeat("CertPathParameters", veryRareMultiplier),
    ...repeat("CertPathValidator", veryRareMultiplier),
    ...repeat("CertPathValidatorException", veryRareMultiplier),
    ...repeat("CertPathValidatorResult", veryRareMultiplier),
    ...repeat("CertPathValidatorSpi", veryRareMultiplier),
    ...repeat("CertSelector", veryRareMultiplier),
    ...repeat("CertStore", veryRareMultiplier),
    ...repeat("CertStoreException", veryRareMultiplier),
    ...repeat("CertStoreParameters", veryRareMultiplier),
    ...repeat("CertStoreSpi", veryRareMultiplier),
    ...repeat("Certificate", veryRareMultiplier),
    ...repeat("CertificateEncodingException", veryRareMultiplier),
    ...repeat("CertificateException", veryRareMultiplier),
    ...repeat("CertificateExpiredException", veryRareMultiplier),
    ...repeat("CertificateFactory", veryRareMultiplier),
    ...repeat("CertificateFactorySpi", veryRareMultiplier),
    ...repeat("CertificateNotYetValidException", veryRareMultiplier),
    ...repeat("CertificateParsingException", veryRareMultiplier),
    ...repeat("CertificateRevokedException", veryRareMultiplier),
    ...repeat("CollectionCertStoreParameters", veryRareMultiplier),
    ...repeat("Extension", veryRareMultiplier),
    ...repeat("LDAPCertStoreParameters", veryRareMultiplier),
    ...repeat("PKIXBuilderParameters", veryRareMultiplier),
    ...repeat("PKIXCertPathBuilderResult", veryRareMultiplier),
    ...repeat("PKIXCertPathChecker", veryRareMultiplier),
    ...repeat("PKIXCertPathValidatorResult", veryRareMultiplier),
    ...repeat("PKIXParameters", veryRareMultiplier),
    ...repeat("PKIXReason", veryRareMultiplier),
    ...repeat("PKIXRevocationChecker", veryRareMultiplier),
    ...repeat("PolicyNode", veryRareMultiplier),
    ...repeat("PolicyQualifierInfo", veryRareMultiplier),
    ...repeat("TrustAnchor", veryRareMultiplier),
    ...repeat("URICertStoreParameters", veryRareMultiplier),
    ...repeat("X509CRL", veryRareMultiplier),
    ...repeat("X509CRLEntry", veryRareMultiplier),
    ...repeat("X509CRLSelector", veryRareMultiplier),
    ...repeat("X509CertSelector", veryRareMultiplier),
    ...repeat("X509Certificate", veryRareMultiplier),
    ...repeat("X509Extension", veryRareMultiplier),
  ];
}