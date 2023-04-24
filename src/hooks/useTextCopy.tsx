import { useState } from "react";
import { customToast } from "../utils/Toast";

type onCopyFn = (text: string) => Promise<boolean>;

function useCopyClipBoard(): [boolean, onCopyFn] {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onCopy: onCopyFn = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
      customToast("복사완료!", "success");

      return true;
    } catch (error) {
      console.error(error);
      setIsCopy(false);
      customToast("복사실패", "error");

      return false;
    }
  };

  return [isCopy, onCopy];
}

export default useCopyClipBoard;
