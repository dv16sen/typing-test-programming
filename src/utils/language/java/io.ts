// Auto-generated file. Do not edit.
import { Settings } from "@/types";
import { repeat } from "@/utils/utils";

export function io({ veryRareMultiplier, rareMultiplier, commonMultiplier, enabledPackages }: Settings) {
  if (!enabledPackages || !enabledPackages.has("java.io")) return [];

  return [
    ...repeat("BufferedInputStream", veryRareMultiplier),
    ...repeat("BufferedOutputStream", veryRareMultiplier),
    ...repeat("BufferedReader", veryRareMultiplier),
    ...repeat("BufferedWriter", veryRareMultiplier),
    ...repeat("ByteArrayInputStream", veryRareMultiplier),
    ...repeat("ByteArrayOutputStream", veryRareMultiplier),
    ...repeat("CharArrayReader", veryRareMultiplier),
    ...repeat("CharArrayWriter", veryRareMultiplier),
    ...repeat("CharConversionException", veryRareMultiplier),
    ...repeat("Closeable", veryRareMultiplier),
    ...repeat("Console", veryRareMultiplier),
    ...repeat("DataInput", veryRareMultiplier),
    ...repeat("DataInputStream", veryRareMultiplier),
    ...repeat("DataOutput", veryRareMultiplier),
    ...repeat("DataOutputStream", veryRareMultiplier),
    ...repeat("EOFException", veryRareMultiplier),
    ...repeat("Externalizable", veryRareMultiplier),
    ...repeat("File", veryRareMultiplier),
    ...repeat("FileDescriptor", veryRareMultiplier),
    ...repeat("FileFilter", veryRareMultiplier),
    ...repeat("FileInputStream", veryRareMultiplier),
    ...repeat("FileNotFoundException", veryRareMultiplier),
    ...repeat("FileOutputStream", veryRareMultiplier),
    ...repeat("FilePermission", veryRareMultiplier),
    ...repeat("FilePermissionCollection", veryRareMultiplier),
    ...repeat("FileReader", veryRareMultiplier),
    ...repeat("FileWriter", veryRareMultiplier),
    ...repeat("FilenameFilter", veryRareMultiplier),
    ...repeat("FilterInputStream", veryRareMultiplier),
    ...repeat("FilterOutputStream", veryRareMultiplier),
    ...repeat("FilterReader", veryRareMultiplier),
    ...repeat("FilterWriter", veryRareMultiplier),
    ...repeat("Flushable", veryRareMultiplier),
    ...repeat("IOError", veryRareMultiplier),
    ...repeat("IOException", rareMultiplier),
    ...repeat("InputStream", veryRareMultiplier),
    ...repeat("InputStreamReader", veryRareMultiplier),
    ...repeat("InterruptedIOException", veryRareMultiplier),
    ...repeat("InvalidClassException", veryRareMultiplier),
    ...repeat("InvalidObjectException", veryRareMultiplier),
    ...repeat("LineNumberInputStream", veryRareMultiplier),
    ...repeat("LineNumberReader", veryRareMultiplier),
    ...repeat("NotActiveException", veryRareMultiplier),
    ...repeat("NotSerializableException", veryRareMultiplier),
    ...repeat("ObjectInput", veryRareMultiplier),
    ...repeat("ObjectInputFilter", veryRareMultiplier),
    ...repeat("ObjectInputStream", veryRareMultiplier),
    ...repeat("ObjectInputValidation", veryRareMultiplier),
    ...repeat("ObjectOutput", veryRareMultiplier),
    ...repeat("ObjectOutputStream", veryRareMultiplier),
    ...repeat("ObjectStreamClass", veryRareMultiplier),
    ...repeat("ObjectStreamConstants", veryRareMultiplier),
    ...repeat("ObjectStreamException", veryRareMultiplier),
    ...repeat("ObjectStreamField", veryRareMultiplier),
    ...repeat("OptionalDataException", veryRareMultiplier),
    ...repeat("OutputStream", veryRareMultiplier),
    ...repeat("OutputStreamWriter", veryRareMultiplier),
    ...repeat("PipedInputStream", veryRareMultiplier),
    ...repeat("PipedOutputStream", veryRareMultiplier),
    ...repeat("PipedReader", veryRareMultiplier),
    ...repeat("PipedWriter", veryRareMultiplier),
    ...repeat("PrintStream", veryRareMultiplier),
    ...repeat("PrintWriter", veryRareMultiplier),
    ...repeat("PushbackInputStream", veryRareMultiplier),
    ...repeat("PushbackReader", veryRareMultiplier),
    ...repeat("RandomAccessFile", veryRareMultiplier),
    ...repeat("Reader", veryRareMultiplier),
    ...repeat("SequenceInputStream", veryRareMultiplier),
    ...repeat("Serial", veryRareMultiplier),
    ...repeat("SerialCallbackContext", veryRareMultiplier),
    ...repeat("Serializable", commonMultiplier),
    ...repeat("SerializablePermission", veryRareMultiplier),
    ...repeat("StreamCorruptedException", veryRareMultiplier),
    ...repeat("StreamTokenizer", veryRareMultiplier),
    ...repeat("StringBufferInputStream", veryRareMultiplier),
    ...repeat("StringReader", veryRareMultiplier),
    ...repeat("StringWriter", veryRareMultiplier),
    ...repeat("SyncFailedException", veryRareMultiplier),
    ...repeat("UTFDataFormatException", veryRareMultiplier),
    ...repeat("UncheckedIOException", veryRareMultiplier),
    ...repeat("UnsupportedEncodingException", veryRareMultiplier),
    ...repeat("WinNTFileSystem", veryRareMultiplier),
    ...repeat("WriteAbortedException", veryRareMultiplier),
    ...repeat("Writer", veryRareMultiplier),
  ];
}
