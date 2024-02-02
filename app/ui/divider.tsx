import clsx from "clsx";

export default function Divider({ className }: { className?: string }) {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div
          className={clsx(
            "w-full border-t border-2 border-piettra-highlight",
            className
          )}
        />
      </div>
    </div>
  );
}
