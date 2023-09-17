import propTypes from "prop-types";
import React, { useState } from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import Button from "../../../../components/Button";
import styles from "./styles";
import { cleanCPF3 } from "../../../../modules/ursula/screens/screen.form";

const ActivateModal = ({
  isVisible,
  code,
  codeValidation,
  onChangeCode,
  onPress,
  onPressSecond,
}) => {
  const [aux, setAux] = useState({});

  let awsConfig2 = {
    region: "us-east-1",
    accessKeyId: "AKIA564XY3QK6GKEQWUS",
    secretAccessKey: "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",
  };

  AWS.config.update(awsConfig2);

  var params = {
    TableName: "PayTable-esVixmarc2021-prd",
    FilterExpression: "useriD = :this_user",
    ExpressionAttributeValues: { ":this_user": cleanCPF3 },
  };

  var documentClient = new AWS.DynamoDB.DocumentClient();

  documentClient.scan(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      setAux(data.Items[0]);
      console.log(aux);
    }
  });

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.text}>Informações de Pagamento</Text>
        <View style={styles.textInputView}>
          <View style={styles.container2}>
            <View style={styles.info}>
              <Text style={styles.key}>ID da compra:</Text>
              <Text style={styles.value}>{aux.id}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.key}>Nome:</Text>
              <Text style={styles.value}>{aux.Name}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.key}>Valor:</Text>
              <Text style={styles.value}>{aux.price / 100 + ",00"}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.key}>Data do pedido:</Text>
              <Text style={styles.value}>{aux.dateInitial}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Button
            text="Fechar Comprovante"
            onPress={onPressSecond}
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
};

ActivateModal.propTypes = {
  isVisible: propTypes.bool,
  code: propTypes.string,
  codeValidation: propTypes.string,
  onChangeCode: propTypes.func.isRequired,
  onPress: propTypes.func.isRequired,
  onPressSecond: propTypes.func.isRequired,
};

ActivateModal.defaultProps = {
  isVisible: false,
  code: "",
  codeValidation: "",
};

export default ActivateModal;
