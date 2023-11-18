export default function Divider() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-2 border-piettra-highlight" />
      </div>
    </div>
  );
}
