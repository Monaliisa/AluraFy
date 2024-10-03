INSERT INTO Artista (nome, imagem, createdAt, updatedAt)
VALUES
('Imagine Dragons', 'https://lastfm.freetls.fastly.net/i/u/770x0/51919b1d56fa751ad2ea9b28a746a155.jpg#51919b1d56fa751ad2ea9b28a746a155', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Coldplay','https://i.discogs.com/aFS7UbMCFk0ewldrBop7b-hQcpObwPE9eZstKP4gYzE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI5NzM1/LTE3MjAwNjU1MTEt/NzM3Mi5qcGVn.jpeg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Taylor Swift','https://lastfm.freetls.fastly.net/i/u/770x0/e3177f6a88bfa5ba3feabdb93340c9da.jpg#e3177f6a88bfa5ba3feabdb93340c9da', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ed Sheeran', 'https://lastfm.freetls.fastly.net/i/u/770x0/2509d5b4b176e8dde9a86664a84a23fb.jpg#2509d5b4b176e8dde9a86664a84a23fb', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Adele', 'https://lastfm.freetls.fastly.net/i/u/770x0/70e86ffb2b7af32eee63cf6bbbcefcba.jpg#70e86ffb2b7af32eee63cf6bbbcefcba', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Bruno Mars', 'https://lastfm.freetls.fastly.net/i/u/770x0/283e3b3f17e57674faa092f1ce5358f6.jpg#283e3b3f17e57674faa092f1ce5358f6', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Beyoncé', 'https://lastfm.freetls.fastly.net/i/u/770x0/9f9d14d04d5901c06751cd0140213ab5.jpg#9f9d14d04d5901c06751cd0140213ab5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('The Weeknd', 'https://lastfm.freetls.fastly.net/i/u/770x0/52fa02d1eaac9b86d61be53ce7dee8f3.jpg#52fa02d1eaac9b86d61be53ce7dee8f3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Lady Gaga', 'https://lastfm.freetls.fastly.net/i/u/770x0/49da29b0277743bcbae8f598ca1e4ff6.jpg#49da29b0277743bcbae8f598ca1e4ff6', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Post Malone', 'https://lastfm.freetls.fastly.net/i/u/770x0/c2d4a3532ef11adb2a71ce7df84f1143.jpg#c2d4a3532ef11adb2a71ce7df84f1143', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Dua Lipa', 'https://lastfm.freetls.fastly.net/i/u/770x0/e3dfe4e5b3860bf0b30d642b89364c3a.jpg#e3dfe4e5b3860bf0b30d642b89364c3a', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Katy Perry', 'https://lastfm.freetls.fastly.net/i/u/770x0/2cab8961f3d4cf1486861a7e58b2192a.jpg#2cab8961f3d4cf1486861a7e58b2192a', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Rihanna', 'https://lastfm.freetls.fastly.net/i/u/770x0/3fd40f19bb5475f9aa5b1a5be32fd67f.jpg#3fd40f19bb5475f9aa5b1a5be32fd67f', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Maroon 5', 'https://lastfm.freetls.fastly.net/i/u/770x0/d9ff1625d5477b75aad82a2e89e8f19c.jpg#d9ff1625d5477b75aad82a2e89e8f19c', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Travis Scott', 'https://lastfm.freetls.fastly.net/i/u/770x0/fdc7ed8bdd61f05d77c8f685cc76d155.jpg#fdc7ed8bdd61f05d77c8f685cc76d155', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Musicas (titulo, id_artista, capa_da_musica, genero, link, createdAt, updatedAt)
VALUES
('Radioactive', 1, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277396.jpg', 'Rock', 'https://link-da-musica.com/radioactive', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Fix You', 2, 'https://lastfm.freetls.fastly.net/i/u/770x0/622617821a6b40048456b8c15c805adc.jpg#622617821a6b40048456b8c15c805adc', 'Alternative', 'https://link-da-musica.com/fix-you', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Blank Space', 3, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277406.jpg', 'Pop', 'https://link-da-musica.com/blank-space', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Perfect', 4, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277411.jpg', 'Pop', 'https://link-da-musica.com/perfect', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Someone Like You', 5, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277416.jpg', 'Pop', 'https://link-da-musica.com/someone-like-you', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('24K Magic', 6, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277421.jpg', 'Funk', 'https://link-da-musica.com/24k-magic', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Crazy in Love', 7, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277426.jpg', 'R&B', 'https://link-da-musica.com/crazy-in-love', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Blinding Lights', 8, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277431.jpg', 'Synthwave', 'https://link-da-musica.com/blinding-lights', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Levitating', 9, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277436.jpg', 'Pop', 'https://link-da-musica.com/levitating', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Teenage Dream', 10, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277441.jpg', 'Pop', 'https://link-da-musica.com/teenage-dream', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Stay', 11, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277446.jpg', 'Pop', 'https://link-da-musica.com/stay', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Girls Like You', 12, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277451.jpg', 'Pop', 'https://link-da-musica.com/girls-like-you', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Sicko Mode', 13, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277456.jpg', 'Hip Hop', 'https://link-da-musica.com/sicko-mode', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Hotline Bling', 14, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277461.jpg', 'Hip Hop', 'https://link-da-musica.com/hotline-bling', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Watermelon Sugar', 15, 'https://br.web.img3.acsta.net/pictures/19/09/16/09/22/5277466.jpg', 'Pop', 'https://link-da-musica.com/watermelon-sugar', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
