// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function util({
  veryRareMultiplier,
  rareMultiplier,
  extremelyCommonMultiplier,
  veryCommonMultiplier,
  commonMultiplier,
  enabledPackages,
}: LanguageSettings) {
  if (!enabledPackages.has("java.util")) return [];

  return [
    ...repeat("AbstractCollection", veryRareMultiplier),
    ...repeat("AbstractList", veryRareMultiplier),
    ...repeat("AbstractMap", veryRareMultiplier),
    ...repeat("AbstractQueue", veryRareMultiplier),
    ...repeat("AbstractSequentialList", veryRareMultiplier),
    ...repeat("AbstractSet", veryRareMultiplier),
    ...repeat("ArrayDeque", rareMultiplier),
    ...repeat("ArrayList", extremelyCommonMultiplier),
    ...repeat("Arrays", extremelyCommonMultiplier),
    ...repeat("Base64", veryRareMultiplier),
    ...repeat("BitSet", veryRareMultiplier),
    ...repeat("Calendar", rareMultiplier),
    ...repeat("Collection", veryCommonMultiplier),
    ...repeat("Collections", extremelyCommonMultiplier),
    ...repeat("Comparator", commonMultiplier),
    ...repeat("ConcurrentModificationException", veryRareMultiplier),
    ...repeat("Currency", veryRareMultiplier),
    ...repeat("Date", commonMultiplier),
    ...repeat("Deque", rareMultiplier),
    ...repeat("Dictionary", veryRareMultiplier),
    ...repeat("DoubleSummaryStatistics", veryRareMultiplier),
    ...repeat("DuplicateFormatFlagsException", veryRareMultiplier),
    ...repeat("EmptyStackException", veryRareMultiplier),
    ...repeat("EnumMap", veryRareMultiplier),
    ...repeat("EnumSet", veryRareMultiplier),
    ...repeat("Enumeration", veryRareMultiplier),
    ...repeat("EventListener", veryRareMultiplier),
    ...repeat("EventListenerProxy", veryRareMultiplier),
    ...repeat("EventObject", veryRareMultiplier),
    ...repeat("FormatFlagsConversionMismatchException", veryRareMultiplier),
    ...repeat("Formattable", veryRareMultiplier),
    ...repeat("FormattableFlags", veryRareMultiplier),
    ...repeat("Formatter", veryRareMultiplier),
    ...repeat("FormatterClosedException", veryRareMultiplier),
    ...repeat("GregorianCalendar", veryRareMultiplier),
    ...repeat("HashMap", veryCommonMultiplier),
    ...repeat("HashSet", commonMultiplier),
    ...repeat("Hashtable", rareMultiplier),
    ...repeat("HexFormat", veryRareMultiplier),
    ...repeat("IdentityHashMap", rareMultiplier),
    ...repeat("IllegalFormatCodePointException", veryRareMultiplier),
    ...repeat("IllegalFormatConversionException", veryRareMultiplier),
    ...repeat("IllegalFormatException", veryRareMultiplier),
    ...repeat("IllegalFormatFlagsException", veryRareMultiplier),
    ...repeat("IllegalFormatPrecisionException", veryRareMultiplier),
    ...repeat("IllegalFormatWidthException", veryRareMultiplier),
    ...repeat("IllformedLocaleException", veryRareMultiplier),
    ...repeat("InputMismatchException", veryRareMultiplier),
    ...repeat("IntSummaryStatistics", veryRareMultiplier),
    ...repeat("InvalidPropertiesFormatException", veryRareMultiplier),
    ...repeat("Iterator", extremelyCommonMultiplier),
    ...repeat("LinkedHashMap", rareMultiplier),
    ...repeat("LinkedHashSet", rareMultiplier),
    ...repeat("LinkedList", commonMultiplier),
    ...repeat("List", extremelyCommonMultiplier),
    ...repeat("ListIterator", veryRareMultiplier),
    ...repeat("ListResourceBundle", veryRareMultiplier),
    ...repeat("Locale", commonMultiplier),
    ...repeat("LongSummaryStatistics", veryRareMultiplier),
    ...repeat("Map", veryCommonMultiplier),
    ...repeat("MissingFormatArgumentException", veryRareMultiplier),
    ...repeat("MissingFormatWidthException", veryRareMultiplier),
    ...repeat("MissingResourceException", veryRareMultiplier),
    ...repeat("NavigableMap", veryRareMultiplier),
    ...repeat("NavigableSet", veryRareMultiplier),
    ...repeat("NoSuchElementException", veryRareMultiplier),
    ...repeat("Objects", extremelyCommonMultiplier),
    ...repeat("Observable", veryRareMultiplier),
    ...repeat("Observer", veryRareMultiplier),
    ...repeat("Optional", extremelyCommonMultiplier),
    ...repeat("OptionalDouble", veryRareMultiplier),
    ...repeat("OptionalInt", veryRareMultiplier),
    ...repeat("OptionalLong", veryRareMultiplier),
    ...repeat("PrimitiveIterator", veryRareMultiplier),
    ...repeat("PriorityQueue", rareMultiplier),
    ...repeat("Properties", veryRareMultiplier),
    ...repeat("PropertyPermission", veryRareMultiplier),
    ...repeat("PropertyPermissionCollection", veryRareMultiplier),
    ...repeat("PropertyResourceBundle", veryRareMultiplier),
    ...repeat("Queue", rareMultiplier),
    ...repeat("Random", commonMultiplier),
    ...repeat("RandomAccess", veryRareMultiplier),
    ...repeat("ResourceBundle", veryRareMultiplier),
    ...repeat("Scanner", veryRareMultiplier),
    ...repeat("ServiceConfigurationError", veryRareMultiplier),
    ...repeat("ServiceLoader", veryRareMultiplier),
    ...repeat("Set", commonMultiplier),
    ...repeat("SimpleTimeZone", veryRareMultiplier),
    ...repeat("SortedMap", veryRareMultiplier),
    ...repeat("SortedSet", veryRareMultiplier),
    ...repeat("Spliterator", veryRareMultiplier),
    ...repeat("Spliterators", veryRareMultiplier),
    ...repeat("SplittableRandom", veryRareMultiplier),
    ...repeat("Stack", rareMultiplier),
    ...repeat("StringJoiner", veryRareMultiplier),
    ...repeat("StringTokenizer", veryRareMultiplier),
    ...repeat("TimeZone", rareMultiplier),
    ...repeat("Timer", rareMultiplier),
    ...repeat("TimerTask", rareMultiplier),
    ...repeat("TooManyListenersException", veryRareMultiplier),
    ...repeat("TreeMap", rareMultiplier),
    ...repeat("TreeSet", rareMultiplier),
    ...repeat("UUID", commonMultiplier),
    ...repeat("UnknownFormatConversionException", veryRareMultiplier),
    ...repeat("UnknownFormatFlagsException", veryRareMultiplier),
    ...repeat("Vector", rareMultiplier),
    ...repeat("WeakHashMap", rareMultiplier),
  ];
}