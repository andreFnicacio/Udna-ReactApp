
import { useEffect, useState } from "react";
import AWS from "aws-sdk";
import { useUser } from "../../../providers/UserProvider";
import { useNavigation } from "react-navigation-hooks";
import { onlyNumbers } from "../../../utils/formatter";

export interface ICategoryAditionalInfo {
  category: string;
  id: string;
  title: string;
  description?: string;
}
export interface IResultData {
  [id: string]: ICategoryAditionalInfo;
}
const categoryData: Array<ICategoryAditionalInfo> = [
  {
    category: "1",
    id: "cb-25",
    title: "Fibrose Cística",
    description:
      "Você já foi diagnosticado(a) para alguma dessas doenças/condições abaixo? (Se necessário, marque mais de uma opção)",
  },
  { category: "1", id: "cb-2", title: "Diabetes tipo I" },
  {
    category: "1",
    id: "cb-29",
    title: "Síndrome do Intestino Irritável (SII)",
  },
  { category: "1", id: "cb-27", title: "Doenças granulomatosas" },
  { category: "1", id: "cb-3", title: "Trombose" },
  { category: "1", id: "cb-30", title: "Doença de Crohn" },
  { category: "1", id: "cb-20", title: "Hanseníase" },
  { category: "1", id: "cb-28", title: "Linfomas" },
  {
    category: "1",
    id: "cb-19",
    title: "Síndrome de Down ou Síndrome de Turner",
  },
  {
    category: "1",
    id: "cb-4",
    title: "Hipertensão Arterial Sistêmica (HAS)",
  },
  { category: "1", id: "cb-33", title: "Ansiedade" },
  {
    category: "1",
    id: "cb-22",
    title: "Síndrome de Ovários Policísticos (SOP)",
  },
  { category: "1", id: "cb-7", title: "Infarto Agudo do Miocárdio (IAM)" },
  { category: "1", id: "cb-26", title: "Insuficiência hepática" },
  { category: "1", id: "cb-5", title: "Insuficiência cardíaca (IC)" },
  {
    category: "1",
    id: "cb-13",
    title: "Compulsão alimentar periódica (TCAP)",
  },
  { category: "1", id: "cb-23", title: "Doença falciforme" },
  { category: "1", id: "cb-6", title: "Aterosclerose" },
  {
    category: "1",
    id: "cb-8",
    title: "Dislipidemias (níveis alterados de colesterol e triglicerídeos)",
  },
  { category: "1", id: "cb-16", title: "Inflamação Crônica Sistêmica (ICS)" },
  { category: "1", id: "cb-32", title: "Depressão" },
  { category: "1", id: "cb-21", title: "Diabetes gestacional" },
  { category: "1", id: "cb-24", title: "Osteomalácia ou Osteoporose" },
  { category: "1", id: "cb-17", title: "Alopecia Androgênica Masculina" },
  { category: "1", id: "cb-9", title: "Hipovitaminose B" },
  {
    category: "1",
    id: "cb-15",
    title: "Doença Hepática Gordurosa Não Alcóolica (DHGNA)",
  },
  { category: "1", id: "cb-14", title: "Obesidade" },
  { category: "1", id: "cb-11", title: "Intolerância à lactose" },
  { category: "1", id: "cb-18", title: "Alopecia Androgênica Feminina" },
  { category: "1", id: "cb-1", title: "Diabetes tipo II " },
  { category: "1", id: "cb-12", title: "Doença Celíaca (DC)" },
  { category: "1", id: "cb-31", title: "Hiperhomocisteinemia" },
  { category: "1", id: "cb-10", title: "Hipovitaminose D" },
];
export const useInformacoesAdicionais = () => {
  const [infoData, setInfoData] = useState<ICategoryAditionalInfo[]>(
    categoryData
  );
  const { navigate, getParam } = useNavigation();

  let parametroUser = getParam("parametroUser");
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    setInfoData(categoryData);
    setLoading(false);
  }, []);

  const nextCategory = (sub: string) => {
    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
    };

    AWS.config.update(awsConfig2);

    var params = {
      TableName: "checkbox",
      FilterExpression: "category = :this_category",
      ExpressionAttributeValues: { ":this_category": sub },
      dynamoDbCrc32: false,
    };

    var documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.scan(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        setInfoData(data.Items);
      }
    });
  };

  const onFinished = (result: IResultData) => {
    let aux = Math.floor(Math.random() * 10000 + 1);
    const auxUrsula = "1-" + aux.toString();

    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
    };

    AWS.config.update(awsConfig2);

    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
      TableName: "respostaUser",
      Item: {
        id: auxUrsula,
        usercpf: user.cpf,
        dadosUrsula: result,
        section: "checksection",
      },
    };

    docClient.put(params, function(err, data) {
      if (err) {
        console.error(
          "Unable to add item. Error JSON:",
          JSON.stringify(err, null, 1)
        );
      } else {
        console.log("Added item:", JSON.stringify(data, null, 1));
      }
    });
    checkSection(user.cpf);
  };

	let now = new Date();



  const checkSection = (cpf: string) => {
    let aux = Math.floor(Math.random() * 1000000 + 1);
    const auxUrsula = "1-" + aux.toString();

    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
    };
    AWS.config.update(awsConfig2);

    let dynamodb = new AWS.DynamoDB();

		let auxDate = now.getDate();
		let auxMonth = now.getMonth() + 1;
		let auxYer = now.getFullYear();
		let time = now.getHours() + ':' + now.getMinutes();
		let auxClean = auxDate.toString() + '-' + auxMonth.toString() + '-' + auxYer.toString();

  
    const parames = {
      Item: {
        id: {
          S: auxUrsula,
        },
        usercpf: {
          S: onlyNumbers(cpf),
        },
        section: {
          S: "checksection",
        },
        verify: {
          S:"1",
        },
        parametroUser: {
          S:parametroUser,
        },
        title: {
          S: "Avaliação da Ursula",
        },
        time: {
          S: time,
        },
        dateUrsula: {
          S: auxClean,
        },
      },
      ReturnConsumedCapacity: "TOTAL",
      TableName: "timeLineUrsula-exVix2021set-prd",
    };
    dynamodb.putItem(parames, function(err, data) {
      if (err) console.log(err, err.stack);
      // an error occurred
      else console.log(data); // successful response
    });
    navigate('TipoFatorRiscoList', {parametroUser: parametroUser});
  };
  return { infoData, loading, nextCategory, onFinished };
};
