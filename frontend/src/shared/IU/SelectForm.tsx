import Select from 'react-select';
import { useTranslation } from 'react-i18next';

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  placeholder: string;
  className: string;
  onChange: (value: string) => void;
};

const SelectForm = ({ onChange, options, placeholder, className }: Props) => {
  const { t } = useTranslation();

  return (
    <Select
      formatOptionLabel={(option) => t(option.label)}
      className={className}
      placeholder={t(placeholder)}
      onChange={(value) => {
        onChange(value);
      }}
      options={options}
    />
  );
};

export default SelectForm;
