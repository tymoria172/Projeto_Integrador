import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    imagem: string,
    local: string;
    tema?: Tema| null
}

export default Postagem;