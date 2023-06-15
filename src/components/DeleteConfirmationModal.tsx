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
      <p>¿Estas seguro de borrar esta propiedad?</p>
      <button className="confirm" onClick={onConfirm}>Confirmar</button>
      <button className="cancel" onClick={onCancel}>Cancelar</button>
    </div>
  );
};

export default DeleteConfirmationModal;
