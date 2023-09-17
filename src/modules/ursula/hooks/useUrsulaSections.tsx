import React, {
	ReactNode,
	createContext,
	useContext,
	useState,
	useMemo,
} from 'react';
import AWS from 'aws-sdk';

interface UrsulaSectionData {
	isAllSectionCheck: boolean;
	disabledInfosBasicos: boolean;
	disabledSaude: boolean;
	disabledHabitos: boolean;
	disabledAlimentacao: boolean;
	disabledCheckbox: boolean;
	updateSections: (cpf: string)=>void;
}

const UrsulaSectionContext = createContext({} as UrsulaSectionData);

interface UrsulaSectionProviderProps {
	children: ReactNode;
}

const UrsulaSectionProvider = ({ children }: UrsulaSectionProviderProps) => {
	const [isAllSectionCheck, setIsAllSectionCheck] = useState(false);

  const [disabledInfosBasicos, setDisabledInfosBasicos] = useState(true);

  const [disabledSaude, setDisabledSaude] = useState(true);

  const [disabledHabitos, setDisabledHabitos] = useState(true);

  const [disabledAlimentacao, setDisabledAlimentacao] = useState(true);

  const [disabledCheckbox, setDisabledCheckbox] = useState(true);

  const updateSections = (cpf: string) => {
    let awsConfig2 = {
      region: "us-east-1",
      accessKeyId: "AKIA564XY3QK6GKEQWUS",
      secretAccessKey: "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",
    };

    AWS.config.update(awsConfig2);

    var params = {
      TableName: "checkSection",
      FilterExpression: "usercpf = :this_category",
      ExpressionAttributeValues: { ":this_category": cpf },
    };

    var documentClient = new AWS.DynamoDB.DocumentClient();

    documentClient.scan(params, function(err, data) {
      if (err) {
        console.tron.log(err);
      } else {
        console.tron.log(data);
        data.Items?.map(item=>{
          const section = item?.section;
          switch (section) {
            case "dadosBasicos":
              setDisabledInfosBasicos(false);
              break;

            case "informacoesIniciais":
              setDisabledSaude(false);
              break;

            case "saudeFeminina":
              setDisabledHabitos(false);
              break;

            case "habitosFumantes":
              setDisabledAlimentacao(false);
              break;

            case "alimentacao":
              setDisabledCheckbox(false);             
              break;

            case "checksection":
              setIsAllSectionCheck(true);
              break;
            default:
              break;
          }
        })
      }
    });
  }


	const defaultContext = useMemo(
		() => ({
			isAllSectionCheck,
		disabledInfosBasicos,
		disabledSaude,
		disabledHabitos,
		disabledAlimentacao,
    disabledCheckbox,
		updateSections
		}),
		[isAllSectionCheck,
			disabledInfosBasicos,
			disabledSaude,
			disabledHabitos,
			disabledAlimentacao,
			disabledCheckbox,
			updateSections],
	);

	return (
		<UrsulaSectionContext.Provider value={defaultContext}>
			{children}
		</UrsulaSectionContext.Provider>
	);
};

const useUrsulaSections = () => useContext(UrsulaSectionContext);

export { UrsulaSectionProvider, useUrsulaSections };
