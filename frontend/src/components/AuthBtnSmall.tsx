export function AuthBtnSmall({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="btn btn-neutral btn-sm mt-2 rounded-md text-white"
      onClick={onClick}
    >
      {label}
    </button>
  );
}