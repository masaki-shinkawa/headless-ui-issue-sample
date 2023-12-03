import { useState } from "react";
import { Dialog } from "@headlessui/react";

const Sample = () => {
  const [isOpenPrimary, setIsOpenPrimary] = useState(false);
  const [isOpenSecondary, setIsOpenSecondary] = useState(false);
  const handleOpen = () => {
    setIsOpenPrimary(true);
    setIsOpenSecondary(true);
  };

  const handleClose = () => {};

  const contents = [...new Array(500)].map((_, index) => <p key={index}>{index}</p>);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open
      </button>
      {/* Dialog1 */}
      <Dialog open={isOpenPrimary} onClose={handleClose} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-start justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto w-[50vw] h-[40vh] max-w-sm overflow-scroll rounded bg-white">
              <Dialog.Title>Primary Dialog</Dialog.Title>
              {contents}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      {/* Dialog2 */}
      <Dialog open={isOpenSecondary} onClose={handleClose} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-end justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto w-[50vw] h-[40vh] max-w-sm overflow-scroll rounded bg-white">
              <Dialog.Title>Secondary Dialog</Dialog.Title>
              {contents}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Sample;
