import Card from "../../components/Card";
import Stars from "../../components/Stars";

const data = [
    {
        title: "Informaçoes Pessoais",
        container: [
            {
                item: "Idade",
                description: "21 anos",
            },
            {
                item: "Email",
                description: "vasconcelosjean42@gmail.com",
            },
            {
                item: "Endereço",
                description: "Bacabal - MA, Brasil",
            },
            {
                item: "Estado Civil",
                description: "Solteiro",
            },
            {
                item: "Telefone",
                description: "(99) 99116-4594",
            },
            {
                item: "Grau",
                description: "Graduando",
            },
        ]
    },
    {
        title: "Habilidades",
        container: [
            {
                item: "HTML5",
                description: <Stars amount={5} />,
            },
            {
                item: "CSS3",
                description: <Stars amount={5} />,
            },
            {
                item: "Javascript",
                description: <Stars amount={3} />,
            },
            {
                item: "Java",
                description: <Stars amount={4} />,
            },
            {
                item: "Python",
                description: <Stars amount={3} />,
            },
            {
                item: "Aderência a novas linguagens",
                description: <Stars amount={4} />,
            },
            {
                item: "Aderência a novas linguagens",
                description: <Stars amount={4} />,
            },
        ]
    },
    {
        title: "Formação acadêmica",
        container: [
            {
                description: <Card
                    data="2015-2017"
                    title="Ensino Médio-Técnico, Informática, Integrado"
                    description="
                        Ensino Médio completo pelo Instituto 
                        Federal do Maranhão (IFMA) campus 
                        Bacabal de forma Integrada.

                        Formação concluida em Técnico em 
                        Informática pelo Instituto Federal do 
                        Maranhão (IFMA) campus Bacabal.
                    "
                />,
            },
            {
                description: <Card
                    data="2018-2022"
                    title="Bacharelado, Ciência da Computação"
                    description="
                        Graduação em andamento no curso superior 
                        Bacharelado em Ciência da Computação pelo
                        Instituto Federal do Maranhão (IFMA) campus
                        Caxias.
                    "
                />,
            },
        ]
    },
];

export default data;