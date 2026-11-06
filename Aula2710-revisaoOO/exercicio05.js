
class Musica {
    constructor(titulo, artista, album, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.album = album;
        this.duracao = duracao;
    }

    tocar(nome) {
        if (nome === this.titulo) {
            console.log("Tocando: " + this.titulo + " - " + this.artista);
        } else {
            console.log("Música não localizada");
        }
    }
}

let musica1 = new Musica("No Corre", "Artista 1", "Album 1", "3:20");
let musica2 = new Musica("Sem Freio", "Artista 2", "Album 2", "2:50");
let musica3 = new Musica("Beat Pesado", "Artista 3", "Album 3", "4:00");

musica1.tocar("No Corre");
musica2.tocar("Sem Freio");
musica3.tocar("Musica Errada");
