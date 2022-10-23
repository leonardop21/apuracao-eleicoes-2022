
# Apuração das eleições 2022
Painel integrado via api com o TSE (Tribunal Superior Eleitoral) para acompanhamento da apuração das eleições 2022 em tempo real.

Apuração por estados (governador, deputado estadual, deputado federal, senador e presidente) e a nível nacional (Presidente)

## Como funciona
 - Atualização no frontend ocorre a cada 15 segundos, sem necessidade de recarregar a página
 - Caso o dado solicitado no TSE, esteja indisponível, os dados anteriores continuam sendo mostrados na tela
 - Atualização no backend ocorre a cada 60 segundos, busca os dados no TSE, recupera as últimas notícias no portal e envia uma solicitação de limpeza de cache.
 - Permite visualizar a apuração por estados ou a nível nacional



Neste projeto está disponível apenas as consultas de simulação e o frontend já buildado.


## Screenshots
### Apuração a nível nacional

![App Screenshot](https://i.imgur.com/JuhDNFo.png)

## Apuração por estado 
![App Screenshot](https://i.imgur.com/hpQnqNv.png)

## Stack utilizada

**Front-end:** VueJs, Bootstrap 4

**Back-end:** PHP

