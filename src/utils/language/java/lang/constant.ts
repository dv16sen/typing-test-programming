// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function constant({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.lang.constant")) return [];

  return [
    ...repeat("ClassDesc", veryRareMultiplier),
    ...repeat("Constable", veryRareMultiplier),
    ...repeat("ConstantDesc", veryRareMultiplier),
    ...repeat("ConstantDescs", veryRareMultiplier),
    ...repeat("DirectMethodHandleDesc", veryRareMultiplier),
    ...repeat("DynamicCallSiteDesc", veryRareMultiplier),
    ...repeat("DynamicConstantDesc", veryRareMultiplier),
    ...repeat("MethodHandleDesc", veryRareMultiplier),
    ...repeat("MethodTypeDesc", veryRareMultiplier),
  ];
}