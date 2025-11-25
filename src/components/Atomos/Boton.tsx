interface propsBoton{
    nombre: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export function Boton(props: propsBoton){
    const { nombre, onClick, type = "button" } = props;

    return (
        <>
            <button 
                className="btn btn-primary" 
                onClick={onClick}
                type={type}
            >
                {nombre}
            </button>
        </>
    );
}
