// Auto-generated file. Do not edit.
import { LanguageSettings } from "@/utils/language/settings";
import { repeat } from "@/utils/utils";

export function channels({ veryRareMultiplier, enabledPackages }: LanguageSettings) {
  if (!enabledPackages.has("java.nio.channels")) return [];

  return [
    ...repeat("AcceptPendingException", veryRareMultiplier),
    ...repeat("AlreadyBoundException", veryRareMultiplier),
    ...repeat("AlreadyConnectedException", veryRareMultiplier),
    ...repeat("AsynchronousByteChannel", veryRareMultiplier),
    ...repeat("AsynchronousChannel", veryRareMultiplier),
    ...repeat("AsynchronousChannelGroup", veryRareMultiplier),
    ...repeat("AsynchronousCloseException", veryRareMultiplier),
    ...repeat("AsynchronousFileChannel", veryRareMultiplier),
    ...repeat("AsynchronousServerSocketChannel", veryRareMultiplier),
    ...repeat("AsynchronousSocketChannel", veryRareMultiplier),
    ...repeat("ByteChannel", veryRareMultiplier),
    ...repeat("CancelledKeyException", veryRareMultiplier),
    ...repeat("Channel", veryRareMultiplier),
    ...repeat("Channels", veryRareMultiplier),
    ...repeat("ClosedByInterruptException", veryRareMultiplier),
    ...repeat("ClosedChannelException", veryRareMultiplier),
    ...repeat("ClosedSelectorException", veryRareMultiplier),
    ...repeat("CompletionHandler", veryRareMultiplier),
    ...repeat("ConnectionPendingException", veryRareMultiplier),
    ...repeat("DatagramChannel", veryRareMultiplier),
    ...repeat("FileChannel", veryRareMultiplier),
    ...repeat("FileLock", veryRareMultiplier),
    ...repeat("FileLockInterruptionException", veryRareMultiplier),
    ...repeat("GatheringByteChannel", veryRareMultiplier),
    ...repeat("IllegalBlockingModeException", veryRareMultiplier),
    ...repeat("IllegalChannelGroupException", veryRareMultiplier),
    ...repeat("IllegalSelectorException", veryRareMultiplier),
    ...repeat("InterruptedByTimeoutException", veryRareMultiplier),
    ...repeat("InterruptibleChannel", veryRareMultiplier),
    ...repeat("MembershipKey", veryRareMultiplier),
    ...repeat("MulticastChannel", veryRareMultiplier),
    ...repeat("NetworkChannel", veryRareMultiplier),
    ...repeat("NoConnectionPendingException", veryRareMultiplier),
    ...repeat("NonReadableChannelException", veryRareMultiplier),
    ...repeat("NonWritableChannelException", veryRareMultiplier),
    ...repeat("NotYetBoundException", veryRareMultiplier),
    ...repeat("NotYetConnectedException", veryRareMultiplier),
    ...repeat("OverlappingFileLockException", veryRareMultiplier),
    ...repeat("Pipe", veryRareMultiplier),
    ...repeat("ReadPendingException", veryRareMultiplier),
    ...repeat("ReadableByteChannel", veryRareMultiplier),
    ...repeat("ScatteringByteChannel", veryRareMultiplier),
    ...repeat("SeekableByteChannel", veryRareMultiplier),
    ...repeat("SelectableChannel", veryRareMultiplier),
    ...repeat("SelectionKey", veryRareMultiplier),
    ...repeat("Selector", veryRareMultiplier),
    ...repeat("ServerSocketChannel", veryRareMultiplier),
    ...repeat("ShutdownChannelGroupException", veryRareMultiplier),
    ...repeat("SocketChannel", veryRareMultiplier),
    ...repeat("UnresolvedAddressException", veryRareMultiplier),
    ...repeat("UnsupportedAddressTypeException", veryRareMultiplier),
    ...repeat("WritableByteChannel", veryRareMultiplier),
    ...repeat("WritePendingException", veryRareMultiplier),
  ];
}
