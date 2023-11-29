const servicos = [
    {
        imagem: `//img.icons8.com/color/96/money-bag.png`,
        servico: 'Crédito Consignado',
        texto: `O empréstimo consignado é muito conhecido dos <strong>aposentados</strong>, <strong>pensionistas</strong> e <strong>funcionários públicos</strong>, pois
        tem as parcelas descontadas diretamente da folha de pagamento ou do benefício. Aqui também temos o <strong>saque FGTS</strong>.`
    },
    {
        imagem: `//img.icons8.com/color/96/get-cash.png`,
        servico: 'Crédito Pessoal',
        texto: `Crédito pessoal é destinado a <strong>todos o públicos</strong>! Aqui na Cred Fácil temos também a modalidade de <strong>crédito com desconto na conta de energia</strong>, <strong>crédito via artão de crédito</strong> e muito mais!.`
    },
    {
        imagem: `//img.icons8.com/color/96/farm.png`,
        servico: 'Crédito Rural',
        texto: `O crédito rural é um financiamento que <strong>auxilia produtores rurais</strong>, <strong>associações</strong> e <strong>cooperativas</strong>. Serve <strong>para expandir as operações</strong>, fazer investimentos ou <strong>custear a produção</strong> e a comercialização dos itens agropecuários.`
    },
    {
        imagem: `//img.icons8.com/color/96/cleaning-a-surface.png`,
        servico: 'Limpa Nome',
        texto: `O limpa nome é um serviço onde todas as suas <strong>dívidas serão colocadas em status de sigilo total</strong> durante 12 meses, elevando seu Score e <strong>facilitando a aprovação</strong> em operações financeiras.`
    },
    {
        imagem: `//img.icons8.com/fluency/100/security-checked--v1.png`,
        servico: 'Seguros',
        texto: `A Cred Fácil possui <strong>todos os tipos de seguros</strong> e <strong>mais de 10 seguradoras</strong> parceiras para melhor atender sua necessidade. Seguros residenciais, veiculares, seguro de vida e muito mais!`
    },
    {
        imagem: `//img.icons8.com/bubbles/100/check.png`,
        servico: 'Consórcios',
        texto: `A Cred Fácil oferece a <strong>melhor opção de consórcio</strong> de acordo com sua necessidade, seja para adquirir um novo veículo, casa, custear cirurgias e muito mais!`
    },
    {
        imagem: `//img.icons8.com/bubbles/100/solar-panel.png`,
        servico: 'Energia Solar',
        texto: `Já pensou em <strong>reduzir sua conta de energia em até 95%</strong>? Com serviço de energia fotovoltáica da Cred Fácil você pode! Conte com a gente para montar <strong>um projeto que caiba no seu bolso</strong>, seja residencial ou comercial. Além disso temos a opção de financiamento!`
    },
    {
        imagem: `//img.icons8.com/stickers/100/cash.png`,
        servico: 'Capital de Giro',
        texto: `O capital de giro é um produto para <strong>atender as necessidades de caixa da sua empresa</strong> e <strong>custear o ciclo operacional</strong> para te ajudar a honrar com seus compromissos. A Cred Fácil possui os <strong>melhores parceiros</strong> com as <strong>melhores taxas</strong> do mercado!`
    },
    {
        imagem: `//img.icons8.com/bubbles/100/car.png`,
        servico: 'Financiamento Veicular',
        texto: `Está na hora de adquirir seu novo veículo! Com a Cred Fácil você tem as melhores taxas e opções de financiamento e refinanciamento veicular!`
    },
    {
        imagem: `//img.icons8.com/clouds/100/cottage.png`,
        servico: 'Financiamento Residencial',
        texto: `Está na hora de adquirir sua nova casa! Com a Cred Fácil você tem as melhores taxas e opções de financiamento e refinanciamento residencial!`
    },
];

for (const servico of servicos) {
    const content = `<div class="servico">
    <img width="96" height="96" src="https:${servico.imagem}" alt="get-cash--v1"/>
    <h2>${servico.servico}</h2>
    <p>${servico.texto} </p>
</div>`

    document.querySelector('.servicos').innerHTML += content;
}