import { Control, Controller, FieldValues, FieldValue, UseFormSetValue } from 'react-hook-form';

interface BlockComponentProps {
    onRemove: (index: number) => void;
    control: Control<FieldValues>;
    index: number;
}

const BlockComponent: React.FC<BlockComponentProps> = ({ onRemove, control, index }) => {
    return (
        <div>
            <Controller
                name={`blocks[${index}].input`}
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} placeholder="Введите текст" />}
            />
            <Controller
                name={blocks[${index}].checkbox}
                control={control}
                defaultValue={false}
                render={({ field }) => <input type="checkbox" {...field} />}
            />
            <button type="button" onClick={() => onRemove(index)}>
                Удалить блок
            </button>
        </div>
    );
};

export default BlockComponent;