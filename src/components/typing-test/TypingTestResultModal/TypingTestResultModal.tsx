import React from "react";
import { Stat } from "../../Stat";
import { useSaveTestResults } from "./useSaveTestResults";
import { Language } from "@/utils/language/utils";
import { Modal } from "../../Modal";

export interface TypingTestResultModalProps {
  cpm?: number;
  wpm?: number;
  accuracy?: string;
  selectedLanguage: Language;
  modalOpen: boolean;
  onClose: () => void;
}

export function TypingTestResultModal({
  wpm = 0,
  cpm = 0,
  accuracy = "0%",
  selectedLanguage,
  modalOpen,
  onClose,
}: TypingTestResultModalProps) {
  useSaveTestResults(modalOpen, { wpm, cpm, accuracy, selectedLanguage });

  return (
    <Modal
      isOpen={modalOpen}
      title={selectedLanguage}
      onKeyDown={(event) => {
        // Preventing the modal from being closed on space bar as the user will
        // be constantly pressing it while playing the game.
        if (event.key === " ") {
          event.preventDefault();
        }
      }}
      onClose={onClose}
    >
      <div className="stats ml-auto mr-auto w-full text-center">
        <Stat title="WPM" value={wpm} />
        <Stat title="CPM" value={cpm} />
        <Stat title="ACCURACY" value={accuracy} />
      </div>
    </Modal>
  );
}
