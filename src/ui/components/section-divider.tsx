import { twMerge } from "tailwind-merge";

export function SectionDivider(className: { className?: string }) {
  return (
    <div className="w-full flex justify-center">
      <div
        className={twMerge(
          "w-[80%] border-1 h-[1px] border-calma-grey",
          className && ""
        )}
      />
    </div>
  );
}
