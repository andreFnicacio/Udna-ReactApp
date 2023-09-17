import { useEffect, useState } from "react";

export const infoData = [
  {
    id: 1,
    title: "Saúde",
    categoria: "saude",
    description:
      "Fatores de risco e doenças que estão relacionados à sua saúde em geral.",
  },
  {
    id: 2,
    title: "Alimentação",
    categoria: "alimentacao",
    description:
      "Fatores de risco que podem ser ocasionados por maus hábitos alimentares.",
  },
  {
    id: 3,
    title: "Medicamentos",
    categoria: "medicamentos",
    description:
      "O uso de alguns medicamentos pode ser fator de risco para algumas doenças.",
  },
  {
    id: 4,
    title: "Hábitos",
    categoria: "habitos",
    description:
      "Seus hábitos também são importantes para indicar fatores de risco.",
  },
  {
    id: 5,
    title: "Características pessoais",
    categoria: "caracteristicasPessoais",
    description:
      "Características pessoais também podem ser fatores de risco para algumas doenças. ",
  },
  {
    id: 5,
    title: "Condições preexistentes",
    categoria: "condicoesPreexistentes",
    description:
      "Aqui você saberá se alguma condição preexistente pode ser um fator de risco.",
  },
];
export const useFatorDeRiscoService = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(infoData);
    setLoading(false);
  }, []);
  
  return { data, loading };
};
