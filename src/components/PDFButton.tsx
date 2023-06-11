const PDFButton = ({ onClick, disabled }: { onClick: () => void, disabled: boolean }) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>Download List PDF</button>
  );
}

export default PDFButton;
