interface Props {
    onClick: () => void;
}

const Button = ({ onClick }: Props) => (
    <button onClick={onClick}>Search</button>
);

export default Button;
