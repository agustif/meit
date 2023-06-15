interface DeleteConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="tooltip">
      <p>Are you sure you want to delete this property?</p>
      <button className="confirm" onClick={onConfirm}>Confirm</button>
      <button className="cancel" onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteConfirmationModal;
