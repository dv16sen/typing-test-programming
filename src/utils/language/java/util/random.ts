// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function random({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.util.random")) return [];

  return [
    ...repeat("RandomGenerator", veryRareMultiplier),
    ...repeat("RandomGeneratorFactory", veryRareMultiplier),
  ];
}