interface Usuario {
    nome: string;
    email: string;
    adress?: string;
}

function getUser() {
    return {
        nome: 'Rafael',
        email: 'rafael@rafael.com'
    }
}

function setUser(usuario: Usuario) {
    // .....
}