# Mini site — Edi Taxista

Site de uma página só, direto ao ponto, com o visual preto e amarelo de táxi da arte enviada. Tudo leva para o WhatsApp.

## Conteúdo da página

1. **Topo** — nome "Edi Taxista", frase "Seu destino em boas mãos", botão "Chamar no WhatsApp" e imagem de um táxi (imagem gerada provisória, trocada depois pela foto real do carro).
2. **Três diferenciais** — Segurança (viagem com total tranquilidade), Pontualidade (chego no horário com compromisso), Conforto (veículo limpo, climatizado e bem cuidado).
3. **Serviços** — viagens rápidas ou longas, aeroporto, eventos, consultas e compromissos, dia a dia.
4. **Área de atendimento** — Centro e Centro Expandido de São Paulo, base em Perdizes.
5. **Confiança** — selo "Atendimento com qualidade e respeito sempre" e a frase "Confiança que te leva tranquilo ao seu destino".
6. **Chamada final + rodapé** — botão grande de WhatsApp e o número visível.

## Contato

Todos os botões abrem uma conversa no WhatsApp para **+55 11 94042-8057**, já com uma mensagem pronta ("Olá Edi, gostaria de solicitar uma corrida"). Há também um link para ligar direto pelo celular.

## Visual

Fundo preto, amarelo táxi como cor de destaque, texto branco, cantos arredondados, tipografia forte e condensada nos títulos — mesma pegada da arte enviada, sem usar a foto do motorista.

## Detalhes técnicos

- Página em `src/routes/index.tsx` (substitui a tela inicial padrão), com seções em componentes dentro de `src/components/`.
- Paleta preto/amarelo definida como tokens em `src/styles.css` (oklch), sem cores fixas nos componentes.
- Fonte carregada via `<link>` no `__root.tsx`.
- Imagem do táxi gerada e salva em `src/assets/`, importada no componente do topo; fácil de trocar quando a foto real chegar.
- `head()` da rota com título, descrição e og/twitter próprios (SEO local: "Táxi em Perdizes, São Paulo").
- Sem backend: nenhum formulário, apenas links `wa.me` e `tel:`.
